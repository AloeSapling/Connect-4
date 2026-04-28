import { Router } from "express";

const router = Router();

router.get("/activeUsers/", function (req, res) {
  res.send("respond with a resource");
});

export default router;