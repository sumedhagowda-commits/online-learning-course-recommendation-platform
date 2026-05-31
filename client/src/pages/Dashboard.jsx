import {
  useEffect,
  useState
} from "react";

import API from "../services/api";

import DashboardStats from "../components/DashboardStats";

import RecommendedCourses from "../components/RecommendedCourses";

const Dashboard = () => {
  const [totalCourses,
    setTotalCourses] =
    useState(0);

  const [enrolledCourses,
    setEnrolledCourses] =
    useState(0);

  const [completedCourses,
    setCompletedCourses] =
    useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard =
    async () => {
      try {
        const courses =
          await API.get(
            "/courses"
          );

        const enrollments =
          await API.get(
            "/enrollments/my"
          );

        const progress =
          await API.get(
            "/progress/my"
          );

        setTotalCourses(
          courses.data.length
        );

        setEnrolledCourses(
          enrollments.data.length
        );

        const completed =
          progress.data.filter(
            (item) =>
              item.completed
          );

        setCompletedCourses(
          completed.length
        );
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div>

      <h1 className="mb-4">
        Learner Dashboard
      </h1>

      <DashboardStats
        totalCourses={
          totalCourses
        }
        enrolledCourses={
          enrolledCourses
        }
        completedCourses={
          completedCourses
        }
      />

      <div className="mt-4">
        <RecommendedCourses />
      </div>

    </div>
  );
};

export default Dashboard;