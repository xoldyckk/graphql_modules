import { application } from "./application";
import { applyMiddleware } from "graphql-middleware";
import { permissions } from "./shield";

/*
This is the actual GraphQL schema that can be consumed by a graphql server.
*/
const applicationSchema = application.createSchemaForApollo();

/*
This is the GraphQL schema with graphql-shield integrated.
*/
export const schema = applyMiddleware(applicationSchema, permissions);
