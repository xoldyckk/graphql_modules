import { createModule } from "graphql-modules";
import {
  user,
  userError,
  usersQuery,
  userQuery,
  userUpdateMutation,
  userDeleteMutation,
} from "./typeDefs";
import { userResolvers } from "./resolvers";

export const userModule = createModule({
  id: "user_module",
  dirname: __dirname,
  typeDefs: [
    user,
    userError,
    usersQuery,
    userQuery,
    userUpdateMutation,
    userDeleteMutation,
  ],
  resolvers: userResolvers,
});
