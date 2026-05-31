import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  enrollCourse,
  getMyEnrollments
} from "../controllers/enrollmentController.js";

const router =
  express.Router();

router.post(
  "/:courseId",
  protect,
  enrollCourse
);

router.get(
  "/my",
  protect,
  getMyEnrollments
);

export default router;