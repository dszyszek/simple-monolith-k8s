import { Router } from "express";

import UserElementsListController from "../../controller/UserElementsList";

const router = Router();

router.get("/all", UserElementsListController.getAll);
router.post("/add", UserElementsListController.addListElement);

export default router;
