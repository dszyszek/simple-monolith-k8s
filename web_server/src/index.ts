import { runWebServer } from "./server";
import { ServerConfig } from "./server";

const DEFAULT_PORT = 3000;
const PORT = process.env.PORT ?? DEFAULT_PORT.toString();

const serverConfig: ServerConfig = {
  port: parseInt(PORT),
};

runWebServer(serverConfig);
