import { GraphQLResolveInfo } from 'graphql';
import { User, Post } from '@prisma/client/index.d';
export type Maybe<T> = T | null;
export type InputMaybe<T> = undefined | T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken: Scalars['String'];
  user: User;
};

export type CaptionLengthError = UserError & {
  __typename?: 'CaptionLengthError';
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

export type EmailAlreadyRegisteredError = UserError & {
  __typename?: 'EmailAlreadyRegisteredError';
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

export type EmailFormatError = UserError & {
  __typename?: 'EmailFormatError';
  emailFormatSuggestion: Scalars['String'];
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

export type EmailLengthError = UserError & {
  __typename?: 'EmailLengthError';
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

export type EmailNotRegisteredError = UserError & {
  __typename?: 'EmailNotRegisteredError';
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

export type IncorrectPasswordError = UserError & {
  __typename?: 'IncorrectPasswordError';
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

export type InvalidIdError = UserError & {
  __typename?: 'InvalidIdError';
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  postCreate: PostCreateMutationPayload;
  postDelete: PostDeleteMutationPayload;
  postUpdate: PostUpdateMutationPayload;
  signIn: SignInMutationPayload;
  signUp: SignUpMutationPayload;
  userDelete: UserDeleteMutationPayload;
  userUpdate: UserUpdateMutationPayload;
};


export type MutationPostCreateArgs = {
  input: PostCreateMutationInput;
};


export type MutationPostDeleteArgs = {
  postId: Scalars['ID'];
};


export type MutationPostUpdateArgs = {
  input: PostUpdateMutationInput;
  postId: Scalars['ID'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignUpArgs = {
  input: SignUpMutationInput;
};


export type MutationUserUpdateArgs = {
  input: UserUpdateMutationInput;
};

export type PasswordLengthError = UserError & {
  __typename?: 'PasswordLengthError';
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  caption: Scalars['String'];
  createdByUser: User;
  id: Scalars['ID'];
};

export type PostCreateMutationError = CaptionLengthError;

export type PostCreateMutationInput = {
  caption: Scalars['String'];
};

export type PostCreateMutationPayload = {
  __typename?: 'PostCreateMutationPayload';
  createdPost?: Maybe<Post>;
  userErrors: Array<PostCreateMutationError>;
};

export type PostDeleteMutationError = InvalidIdError | PostNotFoundError | UnauthorizedMutationError;

export type PostDeleteMutationPayload = {
  __typename?: 'PostDeleteMutationPayload';
  deletedPost?: Maybe<Post>;
  userErrors: Array<PostDeleteMutationError>;
};

export type PostNotFoundError = UserError & {
  __typename?: 'PostNotFoundError';
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

export type PostQueryError = InvalidIdError | PostNotFoundError;

export type PostQueryPayload = {
  __typename?: 'PostQueryPayload';
  post?: Maybe<Post>;
  userErrors: Array<PostQueryError>;
};

export type PostUpdateMutationError = CaptionLengthError | InvalidIdError | PostNotFoundError | UnauthorizedMutationError;

export type PostUpdateMutationInput = {
  caption?: InputMaybe<Scalars['String']>;
};

export type PostUpdateMutationPayload = {
  __typename?: 'PostUpdateMutationPayload';
  updatedPost?: Maybe<Post>;
  userErrors: Array<PostUpdateMutationError>;
};

export type Query = {
  __typename?: 'Query';
  post: PostQueryPayload;
  posts: Array<Post>;
  user: UserQueryPayload;
  users: Array<User>;
};


export type QueryPostArgs = {
  postId: Scalars['ID'];
};


export type QueryUserArgs = {
  userId: Scalars['ID'];
};

export type SignInMutationError = EmailFormatError | EmailLengthError | EmailNotRegisteredError | IncorrectPasswordError | PasswordLengthError;

export type SignInMutationPayload = {
  __typename?: 'SignInMutationPayload';
  authPayload?: Maybe<AuthPayload>;
  userErrors: Array<SignInMutationError>;
};

export type SignUpMutationError = EmailAlreadyRegisteredError | EmailFormatError | EmailLengthError | PasswordLengthError | UsernameLengthError | UsernameTakenError;

export type SignUpMutationInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SignUpMutationPayload = {
  __typename?: 'SignUpMutationPayload';
  authPayload?: Maybe<AuthPayload>;
  userErrors: Array<SignUpMutationError>;
};

export type UnauthorizedMutationError = UserError & {
  __typename?: 'UnauthorizedMutationError';
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  posts: Array<Post>;
  username: Scalars['String'];
};

export type UserDeleteMutationPayload = {
  __typename?: 'UserDeleteMutationPayload';
  deletedUser?: Maybe<User>;
};

export type UserError = {
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

export type UserNotFoundError = UserError & {
  __typename?: 'UserNotFoundError';
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

export type UserQueryError = InvalidIdError | UserNotFoundError;

export type UserQueryPayload = {
  __typename?: 'UserQueryPayload';
  user?: Maybe<User>;
  userErrors: Array<UserQueryError>;
};

export type UserUpdateMutationError = UsernameLengthError | UsernameTakenError;

export type UserUpdateMutationInput = {
  username?: InputMaybe<Scalars['String']>;
};

export type UserUpdateMutationPayload = {
  __typename?: 'UserUpdateMutationPayload';
  updatedUser?: Maybe<User>;
  userErrors: Array<UserUpdateMutationError>;
};

export type UsernameLengthError = UserError & {
  __typename?: 'UsernameLengthError';
  message: Scalars['String'];
  path: Array<Scalars['String']>;
};

export type UsernameTakenError = UserError & {
  __typename?: 'UsernameTakenError';
  message: Scalars['String'];
  path: Array<Scalars['String']>;
  usernameSuggestion: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthPayload: ResolverTypeWrapper<Omit<AuthPayload, 'user'> & { user: ResolversTypes['User'] }>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CaptionLengthError: ResolverTypeWrapper<CaptionLengthError>;
  EmailAlreadyRegisteredError: ResolverTypeWrapper<EmailAlreadyRegisteredError>;
  EmailFormatError: ResolverTypeWrapper<EmailFormatError>;
  EmailLengthError: ResolverTypeWrapper<EmailLengthError>;
  EmailNotRegisteredError: ResolverTypeWrapper<EmailNotRegisteredError>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IncorrectPasswordError: ResolverTypeWrapper<IncorrectPasswordError>;
  InvalidIdError: ResolverTypeWrapper<InvalidIdError>;
  Mutation: ResolverTypeWrapper<{}>;
  PasswordLengthError: ResolverTypeWrapper<PasswordLengthError>;
  Post: ResolverTypeWrapper<Post>;
  PostCreateMutationError: ResolversTypes['CaptionLengthError'];
  PostCreateMutationInput: PostCreateMutationInput;
  PostCreateMutationPayload: ResolverTypeWrapper<Omit<PostCreateMutationPayload, 'createdPost' | 'userErrors'> & { createdPost?: Maybe<ResolversTypes['Post']>, userErrors: Array<ResolversTypes['PostCreateMutationError']> }>;
  PostDeleteMutationError: ResolversTypes['InvalidIdError'] | ResolversTypes['PostNotFoundError'] | ResolversTypes['UnauthorizedMutationError'];
  PostDeleteMutationPayload: ResolverTypeWrapper<Omit<PostDeleteMutationPayload, 'deletedPost' | 'userErrors'> & { deletedPost?: Maybe<ResolversTypes['Post']>, userErrors: Array<ResolversTypes['PostDeleteMutationError']> }>;
  PostNotFoundError: ResolverTypeWrapper<PostNotFoundError>;
  PostQueryError: ResolversTypes['InvalidIdError'] | ResolversTypes['PostNotFoundError'];
  PostQueryPayload: ResolverTypeWrapper<Omit<PostQueryPayload, 'post' | 'userErrors'> & { post?: Maybe<ResolversTypes['Post']>, userErrors: Array<ResolversTypes['PostQueryError']> }>;
  PostUpdateMutationError: ResolversTypes['CaptionLengthError'] | ResolversTypes['InvalidIdError'] | ResolversTypes['PostNotFoundError'] | ResolversTypes['UnauthorizedMutationError'];
  PostUpdateMutationInput: PostUpdateMutationInput;
  PostUpdateMutationPayload: ResolverTypeWrapper<Omit<PostUpdateMutationPayload, 'updatedPost' | 'userErrors'> & { updatedPost?: Maybe<ResolversTypes['Post']>, userErrors: Array<ResolversTypes['PostUpdateMutationError']> }>;
  Query: ResolverTypeWrapper<{}>;
  SignInMutationError: ResolversTypes['EmailFormatError'] | ResolversTypes['EmailLengthError'] | ResolversTypes['EmailNotRegisteredError'] | ResolversTypes['IncorrectPasswordError'] | ResolversTypes['PasswordLengthError'];
  SignInMutationPayload: ResolverTypeWrapper<Omit<SignInMutationPayload, 'authPayload' | 'userErrors'> & { authPayload?: Maybe<ResolversTypes['AuthPayload']>, userErrors: Array<ResolversTypes['SignInMutationError']> }>;
  SignUpMutationError: ResolversTypes['EmailAlreadyRegisteredError'] | ResolversTypes['EmailFormatError'] | ResolversTypes['EmailLengthError'] | ResolversTypes['PasswordLengthError'] | ResolversTypes['UsernameLengthError'] | ResolversTypes['UsernameTakenError'];
  SignUpMutationInput: SignUpMutationInput;
  SignUpMutationPayload: ResolverTypeWrapper<Omit<SignUpMutationPayload, 'authPayload' | 'userErrors'> & { authPayload?: Maybe<ResolversTypes['AuthPayload']>, userErrors: Array<ResolversTypes['SignUpMutationError']> }>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UnauthorizedMutationError: ResolverTypeWrapper<UnauthorizedMutationError>;
  User: ResolverTypeWrapper<User>;
  UserDeleteMutationPayload: ResolverTypeWrapper<Omit<UserDeleteMutationPayload, 'deletedUser'> & { deletedUser?: Maybe<ResolversTypes['User']> }>;
  UserError: ResolversTypes['CaptionLengthError'] | ResolversTypes['EmailAlreadyRegisteredError'] | ResolversTypes['EmailFormatError'] | ResolversTypes['EmailLengthError'] | ResolversTypes['EmailNotRegisteredError'] | ResolversTypes['IncorrectPasswordError'] | ResolversTypes['InvalidIdError'] | ResolversTypes['PasswordLengthError'] | ResolversTypes['PostNotFoundError'] | ResolversTypes['UnauthorizedMutationError'] | ResolversTypes['UserNotFoundError'] | ResolversTypes['UsernameLengthError'] | ResolversTypes['UsernameTakenError'];
  UserNotFoundError: ResolverTypeWrapper<UserNotFoundError>;
  UserQueryError: ResolversTypes['InvalidIdError'] | ResolversTypes['UserNotFoundError'];
  UserQueryPayload: ResolverTypeWrapper<Omit<UserQueryPayload, 'user' | 'userErrors'> & { user?: Maybe<ResolversTypes['User']>, userErrors: Array<ResolversTypes['UserQueryError']> }>;
  UserUpdateMutationError: ResolversTypes['UsernameLengthError'] | ResolversTypes['UsernameTakenError'];
  UserUpdateMutationInput: UserUpdateMutationInput;
  UserUpdateMutationPayload: ResolverTypeWrapper<Omit<UserUpdateMutationPayload, 'updatedUser' | 'userErrors'> & { updatedUser?: Maybe<ResolversTypes['User']>, userErrors: Array<ResolversTypes['UserUpdateMutationError']> }>;
  UsernameLengthError: ResolverTypeWrapper<UsernameLengthError>;
  UsernameTakenError: ResolverTypeWrapper<UsernameTakenError>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthPayload: Omit<AuthPayload, 'user'> & { user: ResolversParentTypes['User'] };
  Boolean: Scalars['Boolean'];
  CaptionLengthError: CaptionLengthError;
  EmailAlreadyRegisteredError: EmailAlreadyRegisteredError;
  EmailFormatError: EmailFormatError;
  EmailLengthError: EmailLengthError;
  EmailNotRegisteredError: EmailNotRegisteredError;
  ID: Scalars['ID'];
  IncorrectPasswordError: IncorrectPasswordError;
  InvalidIdError: InvalidIdError;
  Mutation: {};
  PasswordLengthError: PasswordLengthError;
  Post: Post;
  PostCreateMutationError: ResolversParentTypes['CaptionLengthError'];
  PostCreateMutationInput: PostCreateMutationInput;
  PostCreateMutationPayload: Omit<PostCreateMutationPayload, 'createdPost' | 'userErrors'> & { createdPost?: Maybe<ResolversParentTypes['Post']>, userErrors: Array<ResolversParentTypes['PostCreateMutationError']> };
  PostDeleteMutationError: ResolversParentTypes['InvalidIdError'] | ResolversParentTypes['PostNotFoundError'] | ResolversParentTypes['UnauthorizedMutationError'];
  PostDeleteMutationPayload: Omit<PostDeleteMutationPayload, 'deletedPost' | 'userErrors'> & { deletedPost?: Maybe<ResolversParentTypes['Post']>, userErrors: Array<ResolversParentTypes['PostDeleteMutationError']> };
  PostNotFoundError: PostNotFoundError;
  PostQueryError: ResolversParentTypes['InvalidIdError'] | ResolversParentTypes['PostNotFoundError'];
  PostQueryPayload: Omit<PostQueryPayload, 'post' | 'userErrors'> & { post?: Maybe<ResolversParentTypes['Post']>, userErrors: Array<ResolversParentTypes['PostQueryError']> };
  PostUpdateMutationError: ResolversParentTypes['CaptionLengthError'] | ResolversParentTypes['InvalidIdError'] | ResolversParentTypes['PostNotFoundError'] | ResolversParentTypes['UnauthorizedMutationError'];
  PostUpdateMutationInput: PostUpdateMutationInput;
  PostUpdateMutationPayload: Omit<PostUpdateMutationPayload, 'updatedPost' | 'userErrors'> & { updatedPost?: Maybe<ResolversParentTypes['Post']>, userErrors: Array<ResolversParentTypes['PostUpdateMutationError']> };
  Query: {};
  SignInMutationError: ResolversParentTypes['EmailFormatError'] | ResolversParentTypes['EmailLengthError'] | ResolversParentTypes['EmailNotRegisteredError'] | ResolversParentTypes['IncorrectPasswordError'] | ResolversParentTypes['PasswordLengthError'];
  SignInMutationPayload: Omit<SignInMutationPayload, 'authPayload' | 'userErrors'> & { authPayload?: Maybe<ResolversParentTypes['AuthPayload']>, userErrors: Array<ResolversParentTypes['SignInMutationError']> };
  SignUpMutationError: ResolversParentTypes['EmailAlreadyRegisteredError'] | ResolversParentTypes['EmailFormatError'] | ResolversParentTypes['EmailLengthError'] | ResolversParentTypes['PasswordLengthError'] | ResolversParentTypes['UsernameLengthError'] | ResolversParentTypes['UsernameTakenError'];
  SignUpMutationInput: SignUpMutationInput;
  SignUpMutationPayload: Omit<SignUpMutationPayload, 'authPayload' | 'userErrors'> & { authPayload?: Maybe<ResolversParentTypes['AuthPayload']>, userErrors: Array<ResolversParentTypes['SignUpMutationError']> };
  String: Scalars['String'];
  UnauthorizedMutationError: UnauthorizedMutationError;
  User: User;
  UserDeleteMutationPayload: Omit<UserDeleteMutationPayload, 'deletedUser'> & { deletedUser?: Maybe<ResolversParentTypes['User']> };
  UserError: ResolversParentTypes['CaptionLengthError'] | ResolversParentTypes['EmailAlreadyRegisteredError'] | ResolversParentTypes['EmailFormatError'] | ResolversParentTypes['EmailLengthError'] | ResolversParentTypes['EmailNotRegisteredError'] | ResolversParentTypes['IncorrectPasswordError'] | ResolversParentTypes['InvalidIdError'] | ResolversParentTypes['PasswordLengthError'] | ResolversParentTypes['PostNotFoundError'] | ResolversParentTypes['UnauthorizedMutationError'] | ResolversParentTypes['UserNotFoundError'] | ResolversParentTypes['UsernameLengthError'] | ResolversParentTypes['UsernameTakenError'];
  UserNotFoundError: UserNotFoundError;
  UserQueryError: ResolversParentTypes['InvalidIdError'] | ResolversParentTypes['UserNotFoundError'];
  UserQueryPayload: Omit<UserQueryPayload, 'user' | 'userErrors'> & { user?: Maybe<ResolversParentTypes['User']>, userErrors: Array<ResolversParentTypes['UserQueryError']> };
  UserUpdateMutationError: ResolversParentTypes['UsernameLengthError'] | ResolversParentTypes['UsernameTakenError'];
  UserUpdateMutationInput: UserUpdateMutationInput;
  UserUpdateMutationPayload: Omit<UserUpdateMutationPayload, 'updatedUser' | 'userErrors'> & { updatedUser?: Maybe<ResolversParentTypes['User']>, userErrors: Array<ResolversParentTypes['UserUpdateMutationError']> };
  UsernameLengthError: UsernameLengthError;
  UsernameTakenError: UsernameTakenError;
};

export type AuthPayloadResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaptionLengthErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['CaptionLengthError'] = ResolversParentTypes['CaptionLengthError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailAlreadyRegisteredErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['EmailAlreadyRegisteredError'] = ResolversParentTypes['EmailAlreadyRegisteredError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailFormatErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['EmailFormatError'] = ResolversParentTypes['EmailFormatError']> = {
  emailFormatSuggestion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailLengthErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['EmailLengthError'] = ResolversParentTypes['EmailLengthError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailNotRegisteredErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['EmailNotRegisteredError'] = ResolversParentTypes['EmailNotRegisteredError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncorrectPasswordErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['IncorrectPasswordError'] = ResolversParentTypes['IncorrectPasswordError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvalidIdErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['InvalidIdError'] = ResolversParentTypes['InvalidIdError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  postCreate?: Resolver<ResolversTypes['PostCreateMutationPayload'], ParentType, ContextType, RequireFields<MutationPostCreateArgs, 'input'>>;
  postDelete?: Resolver<ResolversTypes['PostDeleteMutationPayload'], ParentType, ContextType, RequireFields<MutationPostDeleteArgs, 'postId'>>;
  postUpdate?: Resolver<ResolversTypes['PostUpdateMutationPayload'], ParentType, ContextType, RequireFields<MutationPostUpdateArgs, 'input' | 'postId'>>;
  signIn?: Resolver<ResolversTypes['SignInMutationPayload'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'email' | 'password'>>;
  signUp?: Resolver<ResolversTypes['SignUpMutationPayload'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'input'>>;
  userDelete?: Resolver<ResolversTypes['UserDeleteMutationPayload'], ParentType, ContextType>;
  userUpdate?: Resolver<ResolversTypes['UserUpdateMutationPayload'], ParentType, ContextType, RequireFields<MutationUserUpdateArgs, 'input'>>;
};

export type PasswordLengthErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['PasswordLengthError'] = ResolversParentTypes['PasswordLengthError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  caption?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdByUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCreateMutationErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['PostCreateMutationError'] = ResolversParentTypes['PostCreateMutationError']> = {
  __resolveType: TypeResolveFn<'CaptionLengthError', ParentType, ContextType>;
};

export type PostCreateMutationPayloadResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['PostCreateMutationPayload'] = ResolversParentTypes['PostCreateMutationPayload']> = {
  createdPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['PostCreateMutationError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostDeleteMutationErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['PostDeleteMutationError'] = ResolversParentTypes['PostDeleteMutationError']> = {
  __resolveType: TypeResolveFn<'InvalidIdError' | 'PostNotFoundError' | 'UnauthorizedMutationError', ParentType, ContextType>;
};

export type PostDeleteMutationPayloadResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['PostDeleteMutationPayload'] = ResolversParentTypes['PostDeleteMutationPayload']> = {
  deletedPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['PostDeleteMutationError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostNotFoundErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['PostNotFoundError'] = ResolversParentTypes['PostNotFoundError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostQueryErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['PostQueryError'] = ResolversParentTypes['PostQueryError']> = {
  __resolveType: TypeResolveFn<'InvalidIdError' | 'PostNotFoundError', ParentType, ContextType>;
};

export type PostQueryPayloadResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['PostQueryPayload'] = ResolversParentTypes['PostQueryPayload']> = {
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['PostQueryError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostUpdateMutationErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['PostUpdateMutationError'] = ResolversParentTypes['PostUpdateMutationError']> = {
  __resolveType: TypeResolveFn<'CaptionLengthError' | 'InvalidIdError' | 'PostNotFoundError' | 'UnauthorizedMutationError', ParentType, ContextType>;
};

export type PostUpdateMutationPayloadResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['PostUpdateMutationPayload'] = ResolversParentTypes['PostUpdateMutationPayload']> = {
  updatedPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['PostUpdateMutationError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  post?: Resolver<ResolversTypes['PostQueryPayload'], ParentType, ContextType, RequireFields<QueryPostArgs, 'postId'>>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['UserQueryPayload'], ParentType, ContextType, RequireFields<QueryUserArgs, 'userId'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type SignInMutationErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['SignInMutationError'] = ResolversParentTypes['SignInMutationError']> = {
  __resolveType: TypeResolveFn<'EmailFormatError' | 'EmailLengthError' | 'EmailNotRegisteredError' | 'IncorrectPasswordError' | 'PasswordLengthError', ParentType, ContextType>;
};

export type SignInMutationPayloadResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['SignInMutationPayload'] = ResolversParentTypes['SignInMutationPayload']> = {
  authPayload?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['SignInMutationError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignUpMutationErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['SignUpMutationError'] = ResolversParentTypes['SignUpMutationError']> = {
  __resolveType: TypeResolveFn<'EmailAlreadyRegisteredError' | 'EmailFormatError' | 'EmailLengthError' | 'PasswordLengthError' | 'UsernameLengthError' | 'UsernameTakenError', ParentType, ContextType>;
};

export type SignUpMutationPayloadResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['SignUpMutationPayload'] = ResolversParentTypes['SignUpMutationPayload']> = {
  authPayload?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['SignUpMutationError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnauthorizedMutationErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['UnauthorizedMutationError'] = ResolversParentTypes['UnauthorizedMutationError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserDeleteMutationPayloadResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['UserDeleteMutationPayload'] = ResolversParentTypes['UserDeleteMutationPayload']> = {
  deletedUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['UserError'] = ResolversParentTypes['UserError']> = {
  __resolveType: TypeResolveFn<'CaptionLengthError' | 'EmailAlreadyRegisteredError' | 'EmailFormatError' | 'EmailLengthError' | 'EmailNotRegisteredError' | 'IncorrectPasswordError' | 'InvalidIdError' | 'PasswordLengthError' | 'PostNotFoundError' | 'UnauthorizedMutationError' | 'UserNotFoundError' | 'UsernameLengthError' | 'UsernameTakenError', ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
};

export type UserNotFoundErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['UserNotFoundError'] = ResolversParentTypes['UserNotFoundError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserQueryErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['UserQueryError'] = ResolversParentTypes['UserQueryError']> = {
  __resolveType: TypeResolveFn<'InvalidIdError' | 'UserNotFoundError', ParentType, ContextType>;
};

export type UserQueryPayloadResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['UserQueryPayload'] = ResolversParentTypes['UserQueryPayload']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserQueryError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserUpdateMutationErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['UserUpdateMutationError'] = ResolversParentTypes['UserUpdateMutationError']> = {
  __resolveType: TypeResolveFn<'UsernameLengthError' | 'UsernameTakenError', ParentType, ContextType>;
};

export type UserUpdateMutationPayloadResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['UserUpdateMutationPayload'] = ResolversParentTypes['UserUpdateMutationPayload']> = {
  updatedUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userErrors?: Resolver<Array<ResolversTypes['UserUpdateMutationError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsernameLengthErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['UsernameLengthError'] = ResolversParentTypes['UsernameLengthError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsernameTakenErrorResolvers<ContextType = GraphQLModules.Context, ParentType extends ResolversParentTypes['UsernameTakenError'] = ResolversParentTypes['UsernameTakenError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  path?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  usernameSuggestion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLModules.Context> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  CaptionLengthError?: CaptionLengthErrorResolvers<ContextType>;
  EmailAlreadyRegisteredError?: EmailAlreadyRegisteredErrorResolvers<ContextType>;
  EmailFormatError?: EmailFormatErrorResolvers<ContextType>;
  EmailLengthError?: EmailLengthErrorResolvers<ContextType>;
  EmailNotRegisteredError?: EmailNotRegisteredErrorResolvers<ContextType>;
  IncorrectPasswordError?: IncorrectPasswordErrorResolvers<ContextType>;
  InvalidIdError?: InvalidIdErrorResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PasswordLengthError?: PasswordLengthErrorResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostCreateMutationError?: PostCreateMutationErrorResolvers<ContextType>;
  PostCreateMutationPayload?: PostCreateMutationPayloadResolvers<ContextType>;
  PostDeleteMutationError?: PostDeleteMutationErrorResolvers<ContextType>;
  PostDeleteMutationPayload?: PostDeleteMutationPayloadResolvers<ContextType>;
  PostNotFoundError?: PostNotFoundErrorResolvers<ContextType>;
  PostQueryError?: PostQueryErrorResolvers<ContextType>;
  PostQueryPayload?: PostQueryPayloadResolvers<ContextType>;
  PostUpdateMutationError?: PostUpdateMutationErrorResolvers<ContextType>;
  PostUpdateMutationPayload?: PostUpdateMutationPayloadResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SignInMutationError?: SignInMutationErrorResolvers<ContextType>;
  SignInMutationPayload?: SignInMutationPayloadResolvers<ContextType>;
  SignUpMutationError?: SignUpMutationErrorResolvers<ContextType>;
  SignUpMutationPayload?: SignUpMutationPayloadResolvers<ContextType>;
  UnauthorizedMutationError?: UnauthorizedMutationErrorResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserDeleteMutationPayload?: UserDeleteMutationPayloadResolvers<ContextType>;
  UserError?: UserErrorResolvers<ContextType>;
  UserNotFoundError?: UserNotFoundErrorResolvers<ContextType>;
  UserQueryError?: UserQueryErrorResolvers<ContextType>;
  UserQueryPayload?: UserQueryPayloadResolvers<ContextType>;
  UserUpdateMutationError?: UserUpdateMutationErrorResolvers<ContextType>;
  UserUpdateMutationPayload?: UserUpdateMutationPayloadResolvers<ContextType>;
  UsernameLengthError?: UsernameLengthErrorResolvers<ContextType>;
  UsernameTakenError?: UsernameTakenErrorResolvers<ContextType>;
};

