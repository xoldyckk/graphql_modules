import { z } from "zod";

export const userIdSchema = z
  .string({
    description: "userId of the user",
    required_error: "userId must be provided",
    invalid_type_error: "userId must a string",
  })
  .length(24, { message: "userId length must be exactly 24 characters" });

export const emailSchema = z
  .string({
    description: "email of the user",
    required_error: "email must be provided",
    invalid_type_error: "email must be a string",
  })

  .min(3, { message: "email length must be at least 3 characters" })
  .max(320, { message: "email length must be at most 320 characters" })
  .email({
    message: "email must be of a standard email format",
  });

export const passwordSchema = z
  .string({
    description: "password of the user",
    required_error: "password must be provided",
    invalid_type_error: "password must a string",
  })
  .min(12, { message: "password length must be at least 12 characters" })
  .max(256, { message: "password length must be at most 256 characters" });

export const usernameSchema = z
  .string({
    description: "username of the user",
    required_error: "username must be provided",
    invalid_type_error: "username must a string",
  })
  .min(1, { message: "username length must be at least 1 character" })
  .max(30, { message: "username length must be at most 30 characters" });

export const postIdSchema = z
  .string({
    description: "postId of the post",
    required_error: "postId must be provided",
    invalid_type_error: "postId must a string",
  })
  .length(24, { message: "postId length must be exactly 24 characters" });

export const captionSchema = z
  .string({
    description: "caption of the post",
    required_error: "caption must be provided",
    invalid_type_error: "caption must a string",
  })
  .min(1, { message: "caption length must be at least 1 character" })
  .max(300, { message: "caption length must be at most 300 characters" });
