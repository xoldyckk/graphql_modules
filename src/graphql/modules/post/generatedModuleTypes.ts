import * as Types from "../generatedSchemaTypes";
import * as gm from "graphql-modules";
export namespace PostModule {
  interface DefinedFields {
    Post: 'id' | 'caption' | 'createdByUser';
    User: 'posts';
    Query: 'posts' | 'post';
    PostNotFoundError: 'message' | 'path';
    PostQueryPayload: 'userErrors' | 'post';
    CaptionLengthError: 'message' | 'path';
    PostCreateMutationPayload: 'userErrors' | 'createdPost';
    Mutation: 'postCreate' | 'postUpdate' | 'postDelete';
    UnauthorizedMutationError: 'message' | 'path';
    PostUpdateMutationPayload: 'userErrors' | 'updatedPost';
    PostDeleteMutationPayload: 'userErrors' | 'deletedPost';
  };
  
  interface DefinedInputFields {
    PostCreateMutationInput: 'caption';
    PostUpdateMutationInput: 'caption';
  };
  
  export type Post = Pick<Types.Post, DefinedFields['Post']>;
  export type User = Pick<Types.User, DefinedFields['User']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type PostNotFoundError = Pick<Types.PostNotFoundError, DefinedFields['PostNotFoundError']>;
  export type UserError = Types.UserError;
  export type PostQueryError = Types.PostQueryError;
  export type InvalidIdError = Types.InvalidIdError;
  export type PostQueryPayload = Pick<Types.PostQueryPayload, DefinedFields['PostQueryPayload']>;
  export type PostCreateMutationInput = Pick<Types.PostCreateMutationInput, DefinedInputFields['PostCreateMutationInput']>;
  export type CaptionLengthError = Pick<Types.CaptionLengthError, DefinedFields['CaptionLengthError']>;
  export type PostCreateMutationError = Types.PostCreateMutationError;
  export type PostCreateMutationPayload = Pick<Types.PostCreateMutationPayload, DefinedFields['PostCreateMutationPayload']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type PostUpdateMutationInput = Pick<Types.PostUpdateMutationInput, DefinedInputFields['PostUpdateMutationInput']>;
  export type UnauthorizedMutationError = Pick<Types.UnauthorizedMutationError, DefinedFields['UnauthorizedMutationError']>;
  export type PostUpdateMutationError = Types.PostUpdateMutationError;
  export type PostUpdateMutationPayload = Pick<Types.PostUpdateMutationPayload, DefinedFields['PostUpdateMutationPayload']>;
  export type PostDeleteMutationError = Types.PostDeleteMutationError;
  export type PostDeleteMutationPayload = Pick<Types.PostDeleteMutationPayload, DefinedFields['PostDeleteMutationPayload']>;
  
  export type PostResolvers = Pick<Types.PostResolvers, DefinedFields['Post'] | '__isTypeOf'>;
  export type UserResolvers = Pick<Types.UserResolvers, DefinedFields['User'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type PostNotFoundErrorResolvers = Pick<Types.PostNotFoundErrorResolvers, DefinedFields['PostNotFoundError'] | '__isTypeOf'>;
  export type PostQueryPayloadResolvers = Pick<Types.PostQueryPayloadResolvers, DefinedFields['PostQueryPayload'] | '__isTypeOf'>;
  export type CaptionLengthErrorResolvers = Pick<Types.CaptionLengthErrorResolvers, DefinedFields['CaptionLengthError'] | '__isTypeOf'>;
  export type PostCreateMutationPayloadResolvers = Pick<Types.PostCreateMutationPayloadResolvers, DefinedFields['PostCreateMutationPayload'] | '__isTypeOf'>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type UnauthorizedMutationErrorResolvers = Pick<Types.UnauthorizedMutationErrorResolvers, DefinedFields['UnauthorizedMutationError'] | '__isTypeOf'>;
  export type PostUpdateMutationPayloadResolvers = Pick<Types.PostUpdateMutationPayloadResolvers, DefinedFields['PostUpdateMutationPayload'] | '__isTypeOf'>;
  export type PostDeleteMutationPayloadResolvers = Pick<Types.PostDeleteMutationPayloadResolvers, DefinedFields['PostDeleteMutationPayload'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Post?: PostResolvers;
    User?: UserResolvers;
    Query?: QueryResolvers;
    PostNotFoundError?: PostNotFoundErrorResolvers;
    PostQueryPayload?: PostQueryPayloadResolvers;
    CaptionLengthError?: CaptionLengthErrorResolvers;
    PostCreateMutationPayload?: PostCreateMutationPayloadResolvers;
    Mutation?: MutationResolvers;
    UnauthorizedMutationError?: UnauthorizedMutationErrorResolvers;
    PostUpdateMutationPayload?: PostUpdateMutationPayloadResolvers;
    PostDeleteMutationPayload?: PostDeleteMutationPayloadResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Post?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      caption?: gm.Middleware[];
      createdByUser?: gm.Middleware[];
    };
    User?: {
      '*'?: gm.Middleware[];
      posts?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      posts?: gm.Middleware[];
      post?: gm.Middleware[];
    };
    PostNotFoundError?: {
      '*'?: gm.Middleware[];
      message?: gm.Middleware[];
      path?: gm.Middleware[];
    };
    PostQueryPayload?: {
      '*'?: gm.Middleware[];
      userErrors?: gm.Middleware[];
      post?: gm.Middleware[];
    };
    CaptionLengthError?: {
      '*'?: gm.Middleware[];
      message?: gm.Middleware[];
      path?: gm.Middleware[];
    };
    PostCreateMutationPayload?: {
      '*'?: gm.Middleware[];
      userErrors?: gm.Middleware[];
      createdPost?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      postCreate?: gm.Middleware[];
      postUpdate?: gm.Middleware[];
      postDelete?: gm.Middleware[];
    };
    UnauthorizedMutationError?: {
      '*'?: gm.Middleware[];
      message?: gm.Middleware[];
      path?: gm.Middleware[];
    };
    PostUpdateMutationPayload?: {
      '*'?: gm.Middleware[];
      userErrors?: gm.Middleware[];
      updatedPost?: gm.Middleware[];
    };
    PostDeleteMutationPayload?: {
      '*'?: gm.Middleware[];
      userErrors?: gm.Middleware[];
      deletedPost?: gm.Middleware[];
    };
  };
}