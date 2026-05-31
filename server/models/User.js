import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    interests: [
      {
        type: String
      }
    ],

    skills: [
      {
        type: String
      }
    ],

    role: {
      type: String,
      enum: ["learner", "admin"],
      default: "learner"
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model(
  "User",
  userSchema
);

export default User;