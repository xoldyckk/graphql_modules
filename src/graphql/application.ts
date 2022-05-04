import { createApplication } from "graphql-modules";
import { authModule, userModule, postModule } from "./modules";

/*
This is the graphql application created by combining all the individual graphql modules.
*/
export const application = createApplication({
  modules: [authModule, userModule, postModule],
});
