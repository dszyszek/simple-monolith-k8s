import path from "path";

export const CLIENT_CODE_ROOT_PATH = path.join(
  __dirname,
  "../",
  "../",
  "client"
);
export const CLIENT_CODE_DIST_PATH = path.join(CLIENT_CODE_ROOT_PATH, "dist");
export const CLIENT_CODE_DIST_HTML_ROOT = path.join(
  CLIENT_CODE_DIST_PATH,
  "index.html"
);
