import {
  useEffect,
  useState
} from "react";

import {
  Link
} from "react-router-dom";

import API from "../services/api";

const EnrolledCourses =
  () => {
    const [
      enrollments,
      setEnrollments
    ] = useState([]);

    useEffect(() => {
      loadEnrollments();
    }, []);

    const loadEnrollments =
      async () => {
        try {
          const response =
            await API.get(
              "/enrollments/my"
            );

          setEnrollments(
            response.data
          );
        } catch (error) {
          console.error(
            error
          );
        }
      };

    return (
      <div>

        <h1 className="mb-4">
          My Courses
        </h1>

        {enrollments.length ===
        0 ? (
          <div className="alert alert-warning">
            No enrolled
            courses yet
          </div>
        ) : (
          enrollments.map(
            (
              enrollment
            ) => (
              <div
                key={
                  enrollment._id
                }
                className="card p-3 mb-3"
              >
                <h4>
                  {
                    enrollment
                      .course
                      .title
                  }
                </h4>

                <p>
                  {
                    enrollment
                      .course
                      .description
                  }
                </p>

                <Link
                  to="/progress"
                  className="btn btn-primary"
                >
                  View
                  Progress
                </Link>
              </div>
            )
          )
        )}

      </div>
    );
  };

export default EnrolledCourses;