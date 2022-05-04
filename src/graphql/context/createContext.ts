import { Request } from "express";
import { PrismaClient } from "@prisma/client";
import {
  getCurrentUserFromAuthorizationHeader,
  ICurrentUser,
} from "./getCurrentUserFromAuthorizationHeader";
import { prisma } from "./prisma";

/*
This declares an interface type for context object in the
global namespace so that context type can be easily inferred
across the whole application
*/
declare global {
  namespace GraphQLModules {
    interface GlobalContext {
      currentUser: ICurrentUser;
      prisma: PrismaClient;
    }
  }
}

/*
createContext function returns the context object containing information about the
user currently making the request and the PrismaClient instance.
*/
export const createContext = async (req: Request) => {
  try {
    const currentUser = await getCurrentUserFromAuthorizationHeader(
      req.headers.authorization
    );

    return {
      currentUser,
      prisma,
    };
  } catch (error) {}
};
