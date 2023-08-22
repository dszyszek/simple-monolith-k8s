import express from "express";
import bodyParser from "body-parser";

import type { ServerConfig } from "./types";
import { api } from "../api";
import { setHeaders } from "./utils";
import connectDB from "../db/connectDB";

const runWebServer = ({ port }: ServerConfig) => {
  const server = express();

  connectDB;

  server.use(bodyParser.json());
  server.use(setHeaders);

  server.use("/api/v1", api);

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

export { runWebServer };
