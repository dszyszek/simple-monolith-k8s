import { Router } from "express";

import helloWorldRoute from "./routes/hello-world";
import userElementsListRoute from "./routes/user-elements-list";

const router = Router();

router.use("/hello-world", helloWorldRoute);
router.use("/user-elements-list", userElementsListRoute);

export default router;
