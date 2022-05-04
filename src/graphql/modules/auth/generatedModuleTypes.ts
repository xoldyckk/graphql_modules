import * as Types from "../generatedSchemaTypes";
import * as gm from "graphql-modules";
export namespace AuthModule {
  interface DefinedFields {
    AuthPayload: 'user' | 'accessToken';
    EmailLengthError: 'message' | 'path';
    EmailFormatError: 'message' | 'path' | 'emailFormatSuggestion';
    EmailAlreadyRegisteredError: 'message' | 'path';
    UsernameLengthError: 'message' | 'path';
    UsernameTakenError: 'message' | 'path' | 'usernameSuggestion';
    PasswordLengthError: 'message' | 'path';
    SignUpMutationPayload: 'userErrors' | 'authPayload';
    Mutation: 'signUp' | 'signIn';
    EmailNotRegisteredError: 'message' | 'path';
    IncorrectPasswordError: 'message' | 'path';
    SignInMutationPayload: 'userErrors' | 'authPayload';
  };
  
  interface DefinedInputFields {
    SignUpMutationInput: 'email' | 'password' | 'username';
  };
  
  export type AuthPayload = Pick<Types.AuthPayload, DefinedFields['AuthPayload']>;
  export type User = Types.User;
  export type SignUpMutationInput = Pick<Types.SignUpMutationInput, DefinedInputFields['SignUpMutationInput']>;
  export type EmailLengthError = Pick<Types.EmailLengthError, DefinedFields['EmailLengthError']>;
  export type UserError = Types.UserError;
  export type EmailFormatError = Pick<Types.EmailFormatError, DefinedFields['EmailFormatError']>;
  export type EmailAlreadyRegisteredError = Pick<Types.EmailAlreadyRegisteredError, DefinedFields['EmailAlreadyRegisteredError']>;
  export type UsernameLengthError = Pick<Types.UsernameLengthError, DefinedFields['UsernameLengthError']>;
  export type UsernameTakenError = Pick<Types.UsernameTakenError, DefinedFields['UsernameTakenError']>;
  export type PasswordLengthError = Pick<Types.PasswordLengthError, DefinedFields['PasswordLengthError']>;
  export type SignUpMutationError = Types.SignUpMutationError;
  export type SignUpMutationPayload = Pick<Types.SignUpMutationPayload, DefinedFields['SignUpMutationPayload']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type EmailNotRegisteredError = Pick<Types.EmailNotRegisteredError, DefinedFields['EmailNotRegisteredError']>;
  export type IncorrectPasswordError = Pick<Types.IncorrectPasswordError, DefinedFields['IncorrectPasswordError']>;
  export type SignInMutationError = Types.SignInMutationError;
  export type SignInMutationPayload = Pick<Types.SignInMutationPayload, DefinedFields['SignInMutationPayload']>;
  
  export type AuthPayloadResolvers = Pick<Types.AuthPayloadResolvers, DefinedFields['AuthPayload'] | '__isTypeOf'>;
  export type EmailLengthErrorResolvers = Pick<Types.EmailLengthErrorResolvers, DefinedFields['EmailLengthError'] | '__isTypeOf'>;
  export type EmailFormatErrorResolvers = Pick<Types.EmailFormatErrorResolvers, DefinedFields['EmailFormatError'] | '__isTypeOf'>;
  export type EmailAlreadyRegisteredErrorResolvers = Pick<Types.EmailAlreadyRegisteredErrorResolvers, DefinedFields['EmailAlreadyRegisteredError'] | '__isTypeOf'>;
  export type UsernameLengthErrorResolvers = Pick<Types.UsernameLengthErrorResolvers, DefinedFields['UsernameLengthError'] | '__isTypeOf'>;
  export type UsernameTakenErrorResolvers = Pick<Types.UsernameTakenErrorResolvers, DefinedFields['UsernameTakenError'] | '__isTypeOf'>;
  export type PasswordLengthErrorResolvers = Pick<Types.PasswordLengthErrorResolvers, DefinedFields['PasswordLengthError'] | '__isTypeOf'>;
  export type SignUpMutationPayloadResolvers = Pick<Types.SignUpMutationPayloadResolvers, DefinedFields['SignUpMutationPayload'] | '__isTypeOf'>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type EmailNotRegisteredErrorResolvers = Pick<Types.EmailNotRegisteredErrorResolvers, DefinedFields['EmailNotRegisteredError'] | '__isTypeOf'>;
  export type IncorrectPasswordErrorResolvers = Pick<Types.IncorrectPasswordErrorResolvers, DefinedFields['IncorrectPasswordError'] | '__isTypeOf'>;
  export type SignInMutationPayloadResolvers = Pick<Types.SignInMutationPayloadResolvers, DefinedFields['SignInMutationPayload'] | '__isTypeOf'>;
  
  export interface Resolvers {
    AuthPayload?: AuthPayloadResolvers;
    EmailLengthError?: EmailLengthErrorResolvers;
    EmailFormatError?: EmailFormatErrorResolvers;
    EmailAlreadyRegisteredError?: EmailAlreadyRegisteredErrorResolvers;
    UsernameLengthError?: UsernameLengthErrorResolvers;
    UsernameTakenError?: UsernameTakenErrorResolvers;
    PasswordLengthError?: PasswordLengthErrorResolvers;
    SignUpMutationPayload?: SignUpMutationPayloadResolvers;
    Mutation?: MutationResolvers;
    EmailNotRegisteredError?: EmailNotRegisteredErrorResolvers;
    IncorrectPasswordError?: IncorrectPasswordErrorResolvers;
    SignInMutationPayload?: SignInMutationPayloadResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    AuthPayload?: {
      '*'?: gm.Middleware[];
      user?: gm.Middleware[];
      accessToken?: gm.Middleware[];
    };
    EmailLengthError?: {
      '*'?: gm.Middleware[];
      message?: gm.Middleware[];
      path?: gm.Middleware[];
    };
    EmailFormatError?: {
      '*'?: gm.Middleware[];
      message?: gm.Middleware[];
      path?: gm.Middleware[];
      emailFormatSuggestion?: gm.Middleware[];
    };
    EmailAlreadyRegisteredError?: {
      '*'?: gm.Middleware[];
      message?: gm.Middleware[];
      path?: gm.Middleware[];
    };
    UsernameLengthError?: {
      '*'?: gm.Middleware[];
      message?: gm.Middleware[];
      path?: gm.Middleware[];
    };
    UsernameTakenError?: {
      '*'?: gm.Middleware[];
      message?: gm.Middleware[];
      path?: gm.Middleware[];
      usernameSuggestion?: gm.Middleware[];
    };
    PasswordLengthError?: {
      '*'?: gm.Middleware[];
      message?: gm.Middleware[];
      path?: gm.Middleware[];
    };
    SignUpMutationPayload?: {
      '*'?: gm.Middleware[];
      userErrors?: gm.Middleware[];
      authPayload?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      signUp?: gm.Middleware[];
      signIn?: gm.Middleware[];
    };
    EmailNotRegisteredError?: {
      '*'?: gm.Middleware[];
      message?: gm.Middleware[];
      path?: gm.Middleware[];
    };
    IncorrectPasswordError?: {
      '*'?: gm.Middleware[];
      message?: gm.Middleware[];
      path?: gm.Middleware[];
    };
    SignInMutationPayload?: {
      '*'?: gm.Middleware[];
      userErrors?: gm.Middleware[];
      authPayload?: gm.Middleware[];
    };
  };
}