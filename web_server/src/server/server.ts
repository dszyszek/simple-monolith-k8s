import express from "express";

import type { ServerConfig } from "./types";
import { api } from "../api";
import { CLIENT_CODE_DIST_HTML_ROOT } from "./const";
import { setHeaders, isProduction } from "./utils";

const runWebServer = ({ port }: ServerConfig) => {
  const server = express();
  const clientCode = CLIENT_CODE_DIST_HTML_ROOT;

  server.use(setHeaders);

  server.use("/api/v1", api);

  if (isProduction()) {
    server.get("*", (request, response) => {
      response.sendFile(clientCode);
    });
  }

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

export { runWebServer };
