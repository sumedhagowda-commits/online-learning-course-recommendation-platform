import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  updateProgress,
  getMyProgress
} from "../controllers/progressController.js";

const router =
  express.Router();

router.get(
  "/my",
  protect,
  getMyProgress
);

router.put(
  "/:id",
  protect,
  updateProgress
);

export default router;