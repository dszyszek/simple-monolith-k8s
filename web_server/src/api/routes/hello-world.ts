import { Router } from "express";

import HelloWorldController from "../../controllers/HelloWorld";

const router = Router();

router.get("/", HelloWorldController.get);

export default router;
