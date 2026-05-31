import mongoose from "mongoose";

const progressSchema =
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      },

      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
      },

      progressPercentage: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
      },

      completed: {
        type: Boolean,
        default: false
      }
    },
    {
      timestamps: true
    }
  );

const Progress = mongoose.model(
  "Progress",
  progressSchema
);

export default Progress;