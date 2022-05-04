import { createModule } from "graphql-modules";
import {
  post,
  additionalTypesIntroduced,
  postCreateMutation,
  postDeleteMutation,
  postQuery,
  postUpdateMutation,
  postsQuery,
} from "./typeDefs";
import { postResolvers } from "./resolvers";

export const postModule = createModule({
  id: "post_module",
  dirname: __dirname,
  typeDefs: [
    post,
    additionalTypesIntroduced,
    postsQuery,
    postQuery,
    postCreateMutation,
    postDeleteMutation,
    postUpdateMutation,
  ],
  resolvers: postResolvers,
});
