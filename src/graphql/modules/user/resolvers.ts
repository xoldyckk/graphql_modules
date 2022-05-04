import faker from "@faker-js/faker";
import { UserModule } from "./generatedModuleTypes";
import {
  userArgsSchema,
  handleUserArgsSchemaParseErrors,
  userUpdateArgsSchema,
  handleUserUpdateArgsSchemaParseErrors,
} from "./schemas";

export const userResolvers: UserModule.Resolvers = {
  Query: {
    users: async (parent, args, context, info) => {
      try {
        const { prisma } = context;

        return await prisma.user.findMany({});
      } catch (error) {
        return [];
      }
    },

    user: async (parent, args, context, info) => {
      try {
        const parseResult = userArgsSchema.safeParse(args);

        if (!parseResult.success) {
          return handleUserArgsSchemaParseErrors(parseResult.error);
        }
        const { userId } = parseResult.data;

        const { prisma } = context;

        const user = await prisma.user.findUnique({
          where: {
            id: userId,
          },
        });

        if (!user) {
          return {
            userErrors: [
              {
                __typename: "UserNotFoundError",
                message: `no user found with id : '${userId}'`,
                path: ["user"],
              },
            ],
            user: null,
          };
        }

        return { userErrors: [], user };
      } catch (error) {
        return { userErrors: [], user: null };
      }
    },
  },

  Mutation: {
    userUpdate: async (parent, args, context, info) => {
      try {
        const parseResult = userUpdateArgsSchema.safeParse(args);

        if (!parseResult.success) {
          return handleUserUpdateArgsSchemaParseErrors(parseResult.error);
        }
        const { input } = parseResult.data;

        const { currentUser, prisma } = context;

        if (!input.username) {
          const user = prisma.user.findUnique({
            where: {
              id: currentUser.userId as string,
            },
            rejectOnNotFound: true,
          });

          return { userErrors: [], updatedUser: user };
        }

        const existingUser = await prisma.user.findUnique({
          where: {
            username: input.username,
          },
        });

        if (existingUser && existingUser.id !== currentUser.userId) {
          let userErrors: UserModule.UserUpdateMutationError[] = [];

          userErrors.push({
            __typename: "UsernameTakenError",
            message: `username '${input.username}' is already taken`,
            path: ["input", "username"],
            usernameSuggestion: faker.internet.userName(input.username),
          });

          return { userErrors, updatedUser: null };
        }

        const updatedUser = await prisma.user.update({
          where: {
            id: currentUser.userId as string,
          },
          data: input,
        });

        return { userErrors: [], updatedUser };
      } catch (error) {
        return { userErrors: [], updatedUser: null };
      }
    },

    userDelete: async (parent, args, context, info) => {
      try {
        const { currentUser, prisma } = context;

        const deletedUser = await prisma.user.delete({
          where: {
            id: currentUser.userId as string,
          },
        });

        return { deletedUser };
      } catch (error) {
        return { deletedUser: null };
      }
    },
  },
};
