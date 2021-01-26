import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(
  process.env.HASURA_URL || "https://evolved-imp-15.hasura.app/v1/graphql",
  {
    headers: {
      "x-hasura-admin-secret": process.env.HASURA_SECRET,
    },
  }
);
