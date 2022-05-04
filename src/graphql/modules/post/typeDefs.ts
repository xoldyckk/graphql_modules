import { gql } from "graphql-modules";

export const post = gql`
  type Post {
    id: ID!
    caption: String!
    createdByUser: User!
  }
`;

export const additionalTypesIntroduced = gql`
  type User {
    posts: [Post!]!
  }
`;

export const postsQuery = gql`
  type Query {
    posts: [Post!]!
  }
`;

export const postQuery = gql`
  type PostNotFoundError implements UserError {
    message: String!
    path: [String!]!
  }

  union PostQueryError = InvalidIdError | PostNotFoundError

  type PostQueryPayload {
    userErrors: [PostQueryError!]!
    post: Post
  }

  type Query {
    post(postId: ID!): PostQueryPayload!
  }
`;

export const postCreateMutation = gql`
  input PostCreateMutationInput {
    caption: String!
  }

  type CaptionLengthError implements UserError {
    message: String!
    path: [String!]!
  }

  union PostCreateMutationError = CaptionLengthError

  type PostCreateMutationPayload {
    userErrors: [PostCreateMutationError!]!
    createdPost: Post
  }

  type Mutation {
    postCreate(input: PostCreateMutationInput!): PostCreateMutationPayload!
  }
`;

export const postUpdateMutation = gql`
  input PostUpdateMutationInput {
    caption: String
  }

  type UnauthorizedMutationError implements UserError {
    message: String!
    path: [String!]!
  }

  union PostUpdateMutationError =
      InvalidIdError
    | CaptionLengthError
    | PostNotFoundError
    | UnauthorizedMutationError

  type PostUpdateMutationPayload {
    userErrors: [PostUpdateMutationError!]!
    updatedPost: Post
  }

  type Mutation {
    postUpdate(
      postId: ID!
      input: PostUpdateMutationInput!
    ): PostUpdateMutationPayload!
  }
`;

export const postDeleteMutation = gql`
  union PostDeleteMutationError =
      InvalidIdError
    | PostNotFoundError
    | UnauthorizedMutationError

  type PostDeleteMutationPayload {
    userErrors: [PostDeleteMutationError!]!
    deletedPost: Post
  }

  type Mutation {
    postDelete(postId: ID!): PostDeleteMutationPayload!
  }
`;
