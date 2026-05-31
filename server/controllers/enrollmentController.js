import Enrollment from "../models/Enrollment.js";
import Progress from "../models/Progress.js";

export const enrollCourse =
  async (req, res) => {
    try {
      const courseId =
        req.params.courseId;

      const exists =
        await Enrollment.findOne(
          {
            user:
              req.user.id,
            course:
              courseId
          }
        );

      if (exists) {
        return res
          .status(400)
          .json({
            message:
              "Already enrolled"
          });
      }

      const enrollment =
        await Enrollment.create(
          {
            user:
              req.user.id,
            course:
              courseId
          }
        );

      await Progress.create({
        user: req.user.id,
        course: courseId
      });

      res.status(201).json(
        enrollment
      );
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };

export const getMyEnrollments =
  async (req, res) => {
    try {
      const enrollments =
        await Enrollment.find({
          user:
            req.user.id
        }).populate(
          "course"
        );

      res.json(
        enrollments
      );
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };