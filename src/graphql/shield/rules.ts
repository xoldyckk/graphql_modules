import { rule } from "graphql-shield";

/*
isAuthenticated is a rule(middleware) which checks whether the client that's making the current request is authenticated.
Rules are hooked to resolvers and act as a shield(middleware layer).
The resolver is only accessible when that rule evaluates to true.
*/
export const isAuthenticated = rule({ cache: "contextual" })(
  async (parent, args, context, info) => {
    if (!context.currentUser.isAuthenticated) {
      return new Error(
        `Only authenticated users have access to '${
          info.fieldName
        }' ${info.parentType.toString().toLowerCase()} field.`
      );
    } else {
      return true;
    }
  }
);
