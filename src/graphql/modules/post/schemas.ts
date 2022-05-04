import { z, ZodError } from "zod";
import { captionSchema, postIdSchema } from "../../fieldSchemas";
import { PostModule } from "./generatedModuleTypes";
import {
  PostQueryPayload,
  PostCreateMutationPayload,
  PostUpdateMutationPayload,
  PostDeleteMutationPayload,
} from "../generatedSchemaTypes";

export const postArgsSchema = z.object({
  postId: postIdSchema,
});

export const handlePostArgsSchemaParseErrors = (
  error: ZodError
): PostQueryPayload => {
  const userErrors: PostModule.PostQueryError[] = error.issues.map((issue) => {
    return {
      __typename: "InvalidIdError",
      message: issue.message,
      path: ["postId"],
    };
  });

  return { userErrors, post: null };
};

export const postCreateArgsSchema = z.object({
  input: z.object({
    caption: captionSchema,
  }),
});

export const handlePostCreateArgsSchemaParseErrors = (
  error: ZodError
): PostCreateMutationPayload => {
  const userErrors: PostModule.PostCreateMutationError[] = error.issues.map(
    (issue) => {
      return {
        __typename: "CaptionLengthError",
        message: issue.message,
        path: ["input", "caption"],
      };
    }
  );

  return { userErrors, createdPost: null };
};

export const postUpdateArgsSchema = z.object({
  postId: postIdSchema,
  input: z
    .object({
      caption: captionSchema.nullish(),
    })
    .transform((input) => ({
      caption: input.caption !== null ? input.caption : undefined,
    })),
});

export const handlePostUpdateArgsSchemaParseErrors = (
  error: ZodError
): PostUpdateMutationPayload => {
  const userErrors: PostModule.PostUpdateMutationError[] = error.issues.map(
    (issue) => {
      if (issue.path.includes("postId")) {
        return {
          __typename: "InvalidIdError",
          message: issue.message,
          path: ["postId"],
        };
      } else {
        return {
          __typename: "CaptionLengthError",
          message: issue.message,
          path: ["input", "caption"],
        };
      }
    }
  );

  return { userErrors, updatedPost: null };
};

export const postDeleteArgsSchema = z.object({
  postId: postIdSchema,
});

export const handlePostDeleteArgsSchemaParseErrors = (
  error: ZodError
): PostDeleteMutationPayload => {
  const userErrors: PostModule.PostDeleteMutationError[] = error.issues.map(
    (issue) => {
      return {
        __typename: "InvalidIdError",
        message: issue.message,
        path: ["postId"],
      };
    }
  );

  return { userErrors, deletedPost: null };
};
