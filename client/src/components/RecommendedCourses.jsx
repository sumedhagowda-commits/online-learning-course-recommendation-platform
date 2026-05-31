import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

const RecommendedCourses = () => {
  const [courses, setCourses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations =
    async () => {
      try {
        const response =
          await API.get(
            "/recommendations"
          );

        setCourses(
          response.data
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <p>
        Loading recommendations...
      </p>
    );
  }

  return (
    <div className="card shadow p-3">

      <h4 className="mb-3">
        Recommended Courses
      </h4>

      {courses.length === 0 ? (
        <p>
          No recommendations
          available.
        </p>
      ) : (
        courses
          .slice(0, 5)
          .map((course) => (
            <div
              key={course._id}
              className="border-bottom pb-2 mb-2"
            >
              <h6>
                {course.title}
              </h6>

              <p>
                Score:{" "}
                {course.score}
              </p>

              <Link
                to={`/course/${course._id}`}
                className="btn btn-sm btn-primary"
              >
                View
              </Link>
            </div>
          ))
      )}

    </div>
  );
};

export default RecommendedCourses;