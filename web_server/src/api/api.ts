import { Router } from "express";

const router = Router();

router.get("/hello-world", (req, res) => {
  console.log("Request received -- /hello-world");
  res.json({
    message: "hello world",
  });
});

export default router;
