import { z } from "zod";

export const repositoriesDataSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    owner: z.object({
      login: z.string(),
    }),
    html_url: z.string(),
  })
);

type RepositoriesDataSchema = z.infer<typeof repositoriesDataSchema>;

type MappedRepositoryWithoutSubrepositories = {
  hasSubrepositories: false;
  name: string;
  description: string;
  html_url: string;
  id: number;
};

type MappedRepositoryWithSubrepositories = {
  hasSubrepositories: true;
  name: string;
  description: string;
  subrepositories: {
    id: number;
    name: string;
    html_url: string;
  }[];
};

type MappedRepositories =
  | MappedRepositoryWithSubrepositories
  | MappedRepositoryWithoutSubrepositories;

export class MapRepositories {
  private newRepositoriesWithDescription: MappedRepositoryWithSubrepositories[] =
    [];
  private filteredRepositories: RepositoriesDataSchema = [];
  private filteredRepositoriesWithDescription: MappedRepositoryWithoutSubrepositories[] =
    [];

  constructor(
    private readonly previousRepositories: RepositoriesDataSchema,
    private readonly repositoriesMappingSchema: Record<string, string>,
    private readonly unwantedRepositories: string[],
    private readonly repositoriesDescriptionMappingSchema: Record<
      string,
      string
    >
  ) {}

  private filter(): void {
    this.filteredRepositories = Array.from(
      this.previousRepositories
        .filter(
          (repo) =>
            !this.unwantedRepositories.includes(repo.name) &&
            repo.owner.login === "felipecalgaro"
        )
        .filter((repo) => !(repo.name in this.repositoriesMappingSchema))
    );
  }

  private setDescription(
    newRepositoriesWithoutDescription: Omit<
      MappedRepositoryWithSubrepositories,
      "description"
    >[]
  ): void {
    this.newRepositoriesWithDescription = Array.from(
      newRepositoriesWithoutDescription.map((repo) => ({
        ...repo,
        description: this.repositoriesDescriptionMappingSchema[repo.name],
      }))
    );

    this.filteredRepositoriesWithDescription = Array.from(
      this.filteredRepositories.map((repo) => ({
        ...repo,
        description: this.repositoriesDescriptionMappingSchema[repo.name],
        hasSubrepositories: false,
      }))
    );
  }

  public map(): MappedRepositories[] {
    this.filter();

    const newRepositoriesNames = Array.from(
      new Set(Object.values(this.repositoriesMappingSchema))
    );

    const newRepositoriesWithoutDescription = newRepositoriesNames.map(
      (newRepoName) => ({
        hasSubrepositories: true,
        name: newRepoName,
        subrepositories: Object.keys(this.repositoriesMappingSchema)
          .filter(
            (repoName) =>
              this.repositoriesMappingSchema[
                repoName as keyof typeof this.repositoriesMappingSchema
              ] === newRepoName
          )
          .map((repoName) => {
            const repository = this.previousRepositories.find(
              (repo) => repo.name === repoName
            );

            if (!repository) throw new Error("Unexpected error.");

            return {
              name: repoName,
              id: repository.id,
              html_url: repository.html_url,
            };
          }),
      })
    ) satisfies Omit<MappedRepositoryWithSubrepositories, "description">[];

    this.setDescription(newRepositoriesWithoutDescription);

    return [
      ...this.filteredRepositoriesWithDescription,
      ...this.newRepositoriesWithDescription,
    ];
  }
}
