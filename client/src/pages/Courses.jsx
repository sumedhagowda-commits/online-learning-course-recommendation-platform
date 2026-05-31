import {
  useEffect,
  useState
} from "react";

import API from "../services/api";

import CourseCard from "../components/CourseCard";

const Courses = () => {
  const [courses, setCourses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses =
    async () => {
      try {
        const response =
          await API.get(
            "/courses"
          );

        setCourses(
          response.data
        );
      } catch (error) {
        setError(
          "Failed to load courses"
        );
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <h3>
        Loading Courses...
      </h3>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        {error}
      </div>
    );
  }

  return (
    <div>

      <h1 className="mb-4">
        Available Courses
      </h1>

      <div className="row">
        {courses.map(
          (course) => (
            <CourseCard
              key={
                course._id
              }
              course={
                course
              }
            />
          )
        )}
      </div>

    </div>
  );
};

export default Courses;