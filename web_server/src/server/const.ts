import path from "path";

export const CLIENT_CODE_ROOT_PATH = path.join(
  __dirname,
  "../",
  "../",
  "../",
  "web_client"
);
export const CLIENT_CODE_DIST_PATH = path.join(CLIENT_CODE_ROOT_PATH, "out");
export const CLIENT_CODE_STATIC = path.join(
  CLIENT_CODE_DIST_PATH,
  "_next",
  "static"
);
export const CLIENT_CODE_DIST_HTML_ROOT = path.join(
  CLIENT_CODE_DIST_PATH,
  "index.html"
);
