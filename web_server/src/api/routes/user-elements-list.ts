import { Router } from "express";

import UserElementsListController from "../../controllers/UserElementsList";

const router = Router();

router.get("/", UserElementsListController.getAll);

export default router;
