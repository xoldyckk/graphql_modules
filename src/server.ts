import http from "http";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import {
  PrismaClientInitializationError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
} from "@prisma/client/runtime";
import { createContext, schema } from "./graphql";

const expressApp = express();

const httpServer = http.createServer(expressApp);

const apolloServer = new ApolloServer({
  schema,
  context: async ({ req }) => await createContext(req),
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  /*
  For handling errors which should not be exposed to client.
  */
  formatError: (error) => {
    if (
      error instanceof PrismaClientInitializationError ||
      error instanceof PrismaClientRustPanicError ||
      error instanceof PrismaClientUnknownRequestError
    ) {
      return new Error("Internal Server Errror");
    } else {
      return error;
    }
  },
});

export { expressApp, httpServer, apolloServer };
