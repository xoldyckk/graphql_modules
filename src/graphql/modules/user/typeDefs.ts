import { gql } from "graphql-modules";

export const user = gql`
  type User {
    id: ID!
    email: String!
    username: String!
  }
`;

export const userError = gql`
  interface UserError {
    message: String!
    path: [String!]!
  }
`;

export const usersQuery = gql`
  type Query {
    users: [User!]!
  }
`;

export const userQuery = gql`
  type InvalidIdError implements UserError {
    message: String!
    path: [String!]!
  }

  type UserNotFoundError implements UserError {
    message: String!
    path: [String!]!
  }

  union UserQueryError = InvalidIdError | UserNotFoundError

  type UserQueryPayload {
    userErrors: [UserQueryError!]!
    user: User
  }

  type Query {
    user(userId: ID!): UserQueryPayload!
  }
`;

export const userUpdateMutation = gql`
  input UserUpdateMutationInput {
    username: String
  }

  union UserUpdateMutationError = UsernameLengthError | UsernameTakenError

  type UserUpdateMutationPayload {
    userErrors: [UserUpdateMutationError!]!
    updatedUser: User
  }

  type Mutation {
    userUpdate(input: UserUpdateMutationInput!): UserUpdateMutationPayload!
  }
`;

export const userDeleteMutation = gql`
  type UserDeleteMutationPayload {
    deletedUser: User
  }

  type Mutation {
    userDelete: UserDeleteMutationPayload!
  }
`;
