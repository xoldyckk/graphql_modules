import { PostModule } from "./generatedModuleTypes";
import {
  postArgsSchema,
  handlePostArgsSchemaParseErrors,
  postCreateArgsSchema,
  handlePostCreateArgsSchemaParseErrors,
  postDeleteArgsSchema,
  handlePostDeleteArgsSchemaParseErrors,
  postUpdateArgsSchema,
  handlePostUpdateArgsSchemaParseErrors,
} from "./schemas";

export const postResolvers: PostModule.Resolvers = {
  Query: {
    posts: async (parent, args, context, info) => {
      const { prisma } = context;

      return await prisma.post.findMany({});
    },

    post: async (parent, args, context, info) => {
      try {
        const parseResult = postArgsSchema.safeParse(args);

        if (!parseResult.success) {
          return handlePostArgsSchemaParseErrors(parseResult.error);
        }
        const { postId } = parseResult.data;

        const { prisma } = context;

        const post = await prisma.post.findUnique({
          where: {
            id: postId,
          },
        });

        if (!post) {
          return {
            userErrors: [
              {
                __typename: "PostNotFoundError",
                message: `no post found with id : '${postId}'`,
                path: ["post"],
              },
            ],
            post: null,
          };
        }

        return { userErrors: [], post };
      } catch (error) {
        return {
          userErrors: [],
          post: null,
        };
      }
    },
  },

  Mutation: {
    postCreate: async (parent, args, context, info) => {
      try {
        const parseResult = postCreateArgsSchema.safeParse(args);

        if (!parseResult.success) {
          return handlePostCreateArgsSchemaParseErrors(parseResult.error);
        }
        const { input } = parseResult.data;

        const { currentUser, prisma } = context;

        const createdPost = await prisma.post.create({
          data: {
            caption: input.caption,
            createdByUserId: currentUser.userId as string,
          },
        });

        return {
          userErrors: [],
          createdPost,
        };
      } catch (error: any) {
        return {
          userErrors: [],
          createdPost: null,
        };
      }
    },

    postUpdate: async (parent, args, context, info) => {
      try {
        const parseResult = postUpdateArgsSchema.safeParse(args);

        if (!parseResult.success) {
          return handlePostUpdateArgsSchemaParseErrors(parseResult.error);
        }
        const { postId, input } = parseResult.data;

        const { currentUser, prisma } = context;

        const post = await prisma.post.findUnique({
          where: {
            id: postId,
          },
        });

        if (!post) {
          return {
            userErrors: [
              {
                __typename: "PostNotFoundError",
                message: `no post found with id : '${postId}'`,
                path: ["postUpdate"],
              },
            ],
            updatedPost: null,
          };
        }

        if (post?.createdByUserId !== currentUser.userId) {
          return {
            userErrors: [
              {
                __typename: "UnauthorizedMutationError",
                message: `you are not authorized to update the post with id '${postId}'`,
                path: ["postUpdate"],
              },
            ],
            updatedPost: null,
          };
        }

        const updatedPost = await prisma.post.update({
          where: {
            id: postId,
          },
          data: {
            caption: input.caption,
          },
        });

        return {
          userErrors: [],
          updatedPost,
        };
      } catch (error) {
        return {
          userErrors: [],
          updatedPost: null,
        };
      }
    },

    postDelete: async (parent, args, context, info) => {
      try {
        const parseResult = postDeleteArgsSchema.safeParse(args);

        if (!parseResult.success) {
          return handlePostDeleteArgsSchemaParseErrors(parseResult.error);
        }
        const { postId } = parseResult.data;

        const { currentUser, prisma } = context;

        const post = await prisma.post.findUnique({
          where: {
            id: postId,
          },
        });

        if (!post) {
          return {
            userErrors: [
              {
                __typename: "PostNotFoundError",
                message: `no post found with id : '${postId}'`,
                path: ["postDelete"],
              },
            ],
            deletedPost: null,
          };
        }

        if (post?.createdByUserId !== currentUser.userId) {
          return {
            userErrors: [
              {
                __typename: "UnauthorizedMutationError",
                message: `you are not authorized to delete the post with id '${postId}'`,
                path: ["postDelete"],
              },
            ],
            deletedPost: null,
          };
        }

        const deletedPost = await prisma.post.delete({
          where: {
            id: postId,
          },
        });

        return {
          userErrors: [],
          deletedPost,
        };
      } catch (error) {
        return {
          userErrors: [],
          deletedPost: null,
        };
      }
    },
  },

  Post: {
    createdByUser: async (parent, args, context, info) => {
      const { prisma } = context;

      return await prisma.user.findUnique({
        where: {
          id: parent.createdByUserId,
        },
        rejectOnNotFound: true,
      });
    },
  },

  User: {
    posts: async (parent, args, context, info) => {
      const { prisma } = context;

      return await prisma.post.findMany({
        where: {
          createdByUserId: parent.id,
        },
      });
    },
  },
};
