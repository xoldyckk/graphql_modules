import * as Types from "../generatedSchemaTypes";
import * as gm from "graphql-modules";
export namespace UserModule {
  interface DefinedFields {
    User: 'id' | 'email' | 'username';
    Query: 'users' | 'user';
    InvalidIdError: 'message' | 'path';
    UserNotFoundError: 'message' | 'path';
    UserQueryPayload: 'userErrors' | 'user';
    UserUpdateMutationPayload: 'userErrors' | 'updatedUser';
    Mutation: 'userUpdate' | 'userDelete';
    UserDeleteMutationPayload: 'deletedUser';
    UserError: 'message' | 'path';
  };
  
  interface DefinedInputFields {
    UserUpdateMutationInput: 'username';
  };
  
  export type User = Pick<Types.User, DefinedFields['User']>;
  export type UserError = Pick<Types.UserError, DefinedFields['UserError']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type InvalidIdError = Pick<Types.InvalidIdError, DefinedFields['InvalidIdError']>;
  export type UserNotFoundError = Pick<Types.UserNotFoundError, DefinedFields['UserNotFoundError']>;
  export type UserQueryError = Types.UserQueryError;
  export type UserQueryPayload = Pick<Types.UserQueryPayload, DefinedFields['UserQueryPayload']>;
  export type UserUpdateMutationInput = Pick<Types.UserUpdateMutationInput, DefinedInputFields['UserUpdateMutationInput']>;
  export type UserUpdateMutationError = Types.UserUpdateMutationError;
  export type UsernameLengthError = Types.UsernameLengthError;
  export type UsernameTakenError = Types.UsernameTakenError;
  export type UserUpdateMutationPayload = Pick<Types.UserUpdateMutationPayload, DefinedFields['UserUpdateMutationPayload']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type UserDeleteMutationPayload = Pick<Types.UserDeleteMutationPayload, DefinedFields['UserDeleteMutationPayload']>;
  
  export type UserResolvers = Pick<Types.UserResolvers, DefinedFields['User'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type InvalidIdErrorResolvers = Pick<Types.InvalidIdErrorResolvers, DefinedFields['InvalidIdError'] | '__isTypeOf'>;
  export type UserNotFoundErrorResolvers = Pick<Types.UserNotFoundErrorResolvers, DefinedFields['UserNotFoundError'] | '__isTypeOf'>;
  export type UserQueryPayloadResolvers = Pick<Types.UserQueryPayloadResolvers, DefinedFields['UserQueryPayload'] | '__isTypeOf'>;
  export type UserUpdateMutationPayloadResolvers = Pick<Types.UserUpdateMutationPayloadResolvers, DefinedFields['UserUpdateMutationPayload'] | '__isTypeOf'>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type UserDeleteMutationPayloadResolvers = Pick<Types.UserDeleteMutationPayloadResolvers, DefinedFields['UserDeleteMutationPayload'] | '__isTypeOf'>;
  export type UserErrorResolvers = Pick<Types.UserErrorResolvers, DefinedFields['UserError']>;
  
  export interface Resolvers {
    User?: UserResolvers;
    Query?: QueryResolvers;
    InvalidIdError?: InvalidIdErrorResolvers;
    UserNotFoundError?: UserNotFoundErrorResolvers;
    UserQueryPayload?: UserQueryPayloadResolvers;
    UserUpdateMutationPayload?: UserUpdateMutationPayloadResolvers;
    Mutation?: MutationResolvers;
    UserDeleteMutationPayload?: UserDeleteMutationPayloadResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    User?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      email?: gm.Middleware[];
      username?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      users?: gm.Middleware[];
      user?: gm.Middleware[];
    };
    InvalidIdError?: {
      '*'?: gm.Middleware[];
      message?: gm.Middleware[];
      path?: gm.Middleware[];
    };
    UserNotFoundError?: {
      '*'?: gm.Middleware[];
      message?: gm.Middleware[];
      path?: gm.Middleware[];
    };
    UserQueryPayload?: {
      '*'?: gm.Middleware[];
      userErrors?: gm.Middleware[];
      user?: gm.Middleware[];
    };
    UserUpdateMutationPayload?: {
      '*'?: gm.Middleware[];
      userErrors?: gm.Middleware[];
      updatedUser?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      userUpdate?: gm.Middleware[];
      userDelete?: gm.Middleware[];
    };
    UserDeleteMutationPayload?: {
      '*'?: gm.Middleware[];
      deletedUser?: gm.Middleware[];
    };
  };
}