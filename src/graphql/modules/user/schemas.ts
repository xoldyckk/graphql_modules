import { z, ZodError } from "zod";
import { userIdSchema, usernameSchema } from "../../fieldSchemas";
import { UserModule } from "./generatedModuleTypes";
import {
  UserQueryPayload,
  UserUpdateMutationPayload,
} from "../generatedSchemaTypes";

export const userArgsSchema = z.object({
  userId: userIdSchema,
});

export const handleUserArgsSchemaParseErrors = (
  error: ZodError
): UserQueryPayload => {
  const userErrors: UserModule.UserQueryError[] = error.issues.map((issue) => {
    return {
      __typename: "InvalidIdError",
      message: issue.message,
      path: ["userId"],
    };
  });

  return { userErrors, user: null };
};

export const userUpdateArgsSchema = z.object({
  input: z
    .object({
      username: usernameSchema.nullish(),
    })
    .transform((input) => ({
      username: input.username !== null ? input.username : undefined,
    })),
});

export const handleUserUpdateArgsSchemaParseErrors = (
  error: ZodError
): UserUpdateMutationPayload => {
  const userErrors: UserModule.UserUpdateMutationError[] = error.issues.map(
    (issue) => {
      return {
        __typename: "UsernameLengthError",
        message: issue.message,
        path: ["input", "username"],
      };
    }
  );

  return { userErrors, updatedUser: null };
};
