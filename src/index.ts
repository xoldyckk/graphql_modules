import "reflect-metadata";
import { expressApp, apolloServer, httpServer } from "./server";

const startServer = async (serverPort: number) => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: expressApp });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: serverPort }, resolve)
  );
  console.log(
    `🚀 Server ready at http://localhost:${serverPort}${apolloServer.graphqlPath}`
  );
};

startServer(4000);
