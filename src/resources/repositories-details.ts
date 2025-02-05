export const newRepositoriesNames = ["polls", "notesql"] as const;

type NewRepositoriesType = {
  [newRepoName in (typeof newRepositoriesNames)[number]]: {
    name: string;
    description: string;
  };
};

const newRepositories = {
  polls: {
    name: "polls",
    description:
      "Cookies-based platform for creating and voting on polls at real-time using WebSocket",
  },
  notesql: {
    name: "notesql",
    description: "Notes app that combines SOLID principles to a GraphQL API",
  },
} as const satisfies NewRepositoriesType;

type RepositoriesMappingSchemaType = {
  [newRepoName in (typeof newRepositoriesNames)[number]]: {
    subrepositories: string[];
    description: (typeof newRepositories)[newRepoName]["description"];
  };
};

export const repositoriesMappingSchema = {
  [newRepositories.polls.name]: {
    subrepositories: ["polls-api", "polls-client"],
    description: newRepositories.polls.description,
  },
  [newRepositories.notesql.name]: {
    subrepositories: ["notesql-api", "notesql-client"],
    description: newRepositories.notesql.description,
  },
} satisfies RepositoriesMappingSchemaType;

export const unwantedRepositories = ["felipecalgaro", "portfolio"];
