import express from "express";

import type { ServerConfig } from "./types";
import { api } from "../api";
import { CLIENT_CODE_DIST_PATH } from "./const";
import { setHeaders, isProduction } from "./utils";

const runWebServer = ({ port }: ServerConfig) => {
  const server = express();
  const clientRoot = CLIENT_CODE_DIST_PATH;

  server.use(setHeaders);

  server.use("/api/v1", api);

  if (isProduction()) {
    server.use(express.static(clientRoot));

    // server.get("*", (request, response) => {
    //   response.sendFile(clientHtmlRoot);
    // });
  }

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

export { runWebServer };
