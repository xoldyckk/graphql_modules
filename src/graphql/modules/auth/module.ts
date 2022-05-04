import { createModule } from "graphql-modules";
import { authPayload, signInMutation, signUpMutation } from "./typeDefs";
import { authResolvers } from "./resolvers";
import { TokenService } from "./services";

export const authModule = createModule({
  /*
  id is a unique identifer for the module for graphql-modules
  to differentiate between different modules easily and
  provide better debugging experience
  */
  id: "auth_module",
  /*
  dirname also helps while debugging the code provding us the exact
  location where the errors occurred
  */
  dirname: __dirname,
  /*
  typeDefs takes in an array of graphql type defintions.
  It is encouraged to make use of the 'gql' tag exported
  from graphql-modules package to write and export
  type definitions.
  */
  typeDefs: [authPayload, signInMutation, signUpMutation],
  /*
  resolvers option takes in an object which represents the
  root resolvers defined in type definitions for this module
  */
  resolvers: authResolvers,
  /*
  providers option takes in an array of providers/services(interchangeable terms) and
  registers them in the scope of the corresponding module(authModule here). Scope means
  the whole collection resolvers, providers, services etc. or other functions which are 
  executed within this module.
  */
  providers: [TokenService],
});
