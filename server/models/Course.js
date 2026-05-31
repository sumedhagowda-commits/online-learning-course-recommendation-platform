import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    instructor: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    duration: {
      type: String,
      default: "4 Weeks"
    },

    thumbnail: {
      type: String,
      default: ""
    },

    tags: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: true
  }
);

const Course = mongoose.model(
  "Course",
  courseSchema
);

export default Course;