import dotenv from "dotenv";
import mongoose from "mongoose";

import Course from "../models/Course.js";
import connectDB from "../config/db.js";

dotenv.config();

connectDB();

const courses = [
  {
    title:
      "React Masterclass",
    description:
      "Complete React Development",
    instructor:
      "John Smith",
    category:
      "Web Development",
    duration:
      "8 Weeks",
    tags: [
      "React",
      "JavaScript",
      "Frontend"
    ]
  },
  {
    title:
      "Node.js API Development",
    description:
      "Build REST APIs",
    instructor:
      "David Lee",
    category:
      "Backend Development",
    duration:
      "6 Weeks",
    tags: [
      "Node.js",
      "Express",
      "MongoDB"
    ]
  },
  {
    title:
      "Machine Learning Fundamentals",
    description:
      "Learn ML Basics",
    instructor:
      "Sarah Johnson",
    category:
      "Data Science",
    duration:
      "10 Weeks",
    tags: [
      "AI",
      "Machine Learning",
      "Python"
    ]
  },
  {
    title:
      "Cyber Security Essentials",
    description:
      "Security Concepts",
    instructor:
      "Mark Wilson",
    category:
      "Cyber Security",
    duration:
      "5 Weeks",
    tags: [
      "Security",
      "Networking",
      "Ethical Hacking"
    ]
  }
];

const importData =
  async () => {
    try {
      await Course.deleteMany();

      await Course.insertMany(
        courses
      );

      console.log(
        "Courses Imported"
      );

      process.exit();
    } catch (error) {
      console.error(
        error
      );
      process.exit(1);
    }
  };

importData();