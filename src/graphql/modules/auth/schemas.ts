import faker from "@faker-js/faker";
import { z, ZodError } from "zod";
import {
  emailSchema,
  passwordSchema,
  usernameSchema,
} from "../../fieldSchemas";
import { AuthModule } from "./generatedModuleTypes";

export const signUpArgsSchema = z.object({
  input: z.object({
    email: emailSchema,
    password: passwordSchema,
    username: usernameSchema,
  }),
});

export const handleSignUpArgsSchemaParseErrors = (error: ZodError) => {
  const userErrors: AuthModule.SignUpMutationError[] = error.issues.map(
    (issue) => {
      if (issue.path.includes("email")) {
        if (issue.code === "too_small" || issue.code === "too_big") {
          return {
            __typename: "EmailLengthError",
            message: issue.message,
            path: ["input", "email"],
          };
        } else {
          return {
            __typename: "EmailFormatError",
            message: issue.message,
            path: ["input", "email"],
            emailFormatSuggestion: faker.internet.email(),
          };
        }
      } else if (issue.path.includes("password")) {
        return {
          __typename: "PasswordLengthError",
          message: issue.message,
          path: ["input", "password"],
        };
      } else {
        return {
          __typename: "UsernameLengthError",
          message: issue.message,
          path: ["input", "username"],
        };
      }
    }
  );

  return { userErrors, authPayload: null };
};

export const signInArgsSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const handleSignInArgsSchemaParseErrors = (error: ZodError) => {
  const userErrors: AuthModule.SignInMutationError[] = error.issues.map(
    (issue) => {
      if (issue.path.includes("email")) {
        if (issue.code === "invalid_string") {
          return {
            __typename: "EmailFormatError",
            message: issue.message,
            path: ["email"],
            emailFormatSuggestion: faker.internet.email(),
          };
        } else {
          return {
            __typename: "EmailLengthError",
            message: issue.message,
            path: ["email"],
          };
        }
      } else {
        return {
          __typename: "PasswordLengthError",
          message: issue.message,
          path: ["password"],
        };
      }
    }
  );

  return { userErrors, authPayload: null };
};
