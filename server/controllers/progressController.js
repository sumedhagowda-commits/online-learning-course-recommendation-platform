import Progress from "../models/Progress.js";

export const updateProgress =
  async (req, res) => {
    try {
      const {
        progressPercentage
      } = req.body;

      const progress =
        await Progress.findByIdAndUpdate(
          req.params.id,
          {
            progressPercentage,
            completed:
              progressPercentage >=
              100
          },
          {
            new: true
          }
        );

      res.json(progress);
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };

export const getMyProgress =
  async (req, res) => {
    try {
      const progress =
        await Progress.find({
          user:
            req.user.id
        }).populate(
          "course"
        );

      res.json(progress);
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };