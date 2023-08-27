import { Router } from "express";

import HelloWorldController from "../../controller/HelloWorld";

const router = Router();

router.get("/", HelloWorldController.get);

export default router;
