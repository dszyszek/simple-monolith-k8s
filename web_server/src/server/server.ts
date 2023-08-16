import express from "express";

import type { ServerConfig } from "./types";
import { api } from "../api";
import { setHeaders } from "./utils";

const runWebServer = ({ port }: ServerConfig) => {
  const server = express();

  server.use(setHeaders);

  server.use("/api/v1", api);

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

export { runWebServer };
