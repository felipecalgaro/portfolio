import {
  newRepositoriesNames,
  repositoriesMappingSchema,
  unwantedRepositories,
} from "@/assets/repositories-details";
import { z } from "zod";

export const repositoriesDataSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    owner: z.object({
      login: z.string(),
    }),
    html_url: z.string(),
    description: z.string().nullable(),
  })
);

type RepositoriesDataSchemaType = z.infer<typeof repositoriesDataSchema>;

type MappedRepositoryWithoutSubrepositories = {
  hasSubrepositories: false;
  name: string;
  description: string;
  html_url: string;
  id: number;
};

type MappedRepositoryWithSubrepositories = {
  hasSubrepositories: true;
  name: (typeof newRepositoriesNames)[number];
  description: (typeof repositoriesMappingSchema)[(typeof newRepositoriesNames)[number]]["description"];
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
  private subrepositoriesNames: string[] = [];

  constructor(
    private readonly previousRepositories: RepositoriesDataSchemaType
  ) {}

  private filter(): MappedRepositoryWithoutSubrepositories[] {
    return this.previousRepositories
      .filter(
        (repo) =>
          !unwantedRepositories.includes(repo.name) &&
          repo.owner.login === "felipecalgaro"
      )
      .filter((repo) => !this.subrepositoriesNames.includes(repo.name))
      .map((repo) => ({
        ...repo,
        hasSubrepositories: false,
        description: repo.description!,
      }));
  }

  public map(): MappedRepositories[] {
    const newRepositories = newRepositoriesNames.map((newRepoName) => ({
      name: newRepoName,
      description: repositoriesMappingSchema[newRepoName].description,
      hasSubrepositories: true,
      subrepositories: repositoriesMappingSchema[
        newRepoName
      ].subrepositories.map((subrepo) => {
        this.subrepositoriesNames.push(subrepo);

        const previousRepo = this.previousRepositories.find(
          (repo) => repo.name === subrepo
        );

        if (!previousRepo) {
          throw new Error("Unexpected error.");
        }

        return {
          id: previousRepo.id,
          name: previousRepo.name,
          html_url: previousRepo.html_url,
        };
      }),
    })) satisfies MappedRepositoryWithSubrepositories[];

    const filteredRepositories = this.filter();

    return [...filteredRepositories, ...newRepositories];
  }
}
