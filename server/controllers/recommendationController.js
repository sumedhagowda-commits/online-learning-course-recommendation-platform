import User from "../models/User.js";
import Course from "../models/Course.js";
import Enrollment from "../models/Enrollment.js";

export const getRecommendations =
  async (req, res) => {
    try {
      const user =
        await User.findById(
          req.user.id
        );

      const enrollments =
        await Enrollment.find({
          user:
            req.user.id
        });

      const enrolledIds =
        enrollments.map(
          (e) =>
            e.course.toString()
        );

      const courses =
        await Course.find();

      const recommendations =
        courses
          .filter(
            (course) =>
              !enrolledIds.includes(
                course._id.toString()
              )
          )
          .map((course) => {
            let score = 0;

            user.interests.forEach(
              (
                interest
              ) => {
                if (
                  course.category
                    .toLowerCase()
                    .includes(
                      interest.toLowerCase()
                    )
                )
                  score += 2;

                if (
                  course.tags.some(
                    (
                      tag
                    ) =>
                      tag
                        .toLowerCase()
                        .includes(
                          interest.toLowerCase()
                        )
                  )
                )
                  score += 2;
              }
            );

            user.skills.forEach(
              (skill) => {
                if (
                  course.tags.some(
                    (
                      tag
                    ) =>
                      tag
                        .toLowerCase()
                        .includes(
                          skill.toLowerCase()
                        )
                  )
                )
                  score += 1;
              }
            );

            return {
              ...course.toObject(),
              score
            };
          })
          .sort(
            (a, b) =>
              b.score -
              a.score
          );

      res.json(
        recommendations
      );
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };