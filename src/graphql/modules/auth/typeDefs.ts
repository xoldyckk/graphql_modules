import { gql } from "graphql-modules";

export const authPayload = gql`
  type AuthPayload {
    user: User!
    accessToken: String!
  }
`;

export const signUpMutation = gql`
  input SignUpMutationInput {
    email: String!
    password: String!
    username: String!
  }

  type EmailLengthError implements UserError {
    message: String!
    path: [String!]!
  }

  type EmailFormatError implements UserError {
    message: String!
    path: [String!]!
    emailFormatSuggestion: String!
  }

  type EmailAlreadyRegisteredError implements UserError {
    message: String!
    path: [String!]!
  }

  type UsernameLengthError implements UserError {
    message: String!
    path: [String!]!
  }

  type UsernameTakenError implements UserError {
    message: String!
    path: [String!]!
    usernameSuggestion: String!
  }

  type PasswordLengthError implements UserError {
    message: String!
    path: [String!]!
  }

  union SignUpMutationError =
      EmailLengthError
    | EmailFormatError
    | UsernameLengthError
    | PasswordLengthError
    | EmailAlreadyRegisteredError
    | UsernameTakenError

  type SignUpMutationPayload {
    userErrors: [SignUpMutationError!]!
    authPayload: AuthPayload
  }

  type Mutation {
    signUp(input: SignUpMutationInput!): SignUpMutationPayload!
  }
`;

export const signInMutation = gql`
  type EmailNotRegisteredError implements UserError {
    message: String!
    path: [String!]!
  }

  type IncorrectPasswordError implements UserError {
    message: String!
    path: [String!]!
  }

  union SignInMutationError =
      EmailLengthError
    | EmailFormatError
    | PasswordLengthError
    | EmailNotRegisteredError
    | IncorrectPasswordError

  type SignInMutationPayload {
    userErrors: [SignInMutationError!]!
    authPayload: AuthPayload
  }

  type Mutation {
    signIn(email: String!, password: String!): SignInMutationPayload!
  }
`;
