import {
  useEffect,
  useState
} from "react";

import {
  useParams
} from "react-router-dom";

import API from "../services/api";

const CourseDetails =
  () => {
    const { id } =
      useParams();

    const [course, setCourse] =
      useState(null);

    const [loading, setLoading] =
      useState(true);

    const [message, setMessage] =
      useState("");

    useEffect(() => {
      fetchCourse();
    }, []);

    const fetchCourse =
      async () => {
        try {
          const response =
            await API.get(
              `/courses/${id}`
            );

          setCourse(
            response.data
          );
        } catch (error) {
          console.log(
            error
          );
        } finally {
          setLoading(false);
        }
      };

    const handleEnroll =
      async () => {
        try {
          await API.post(
            `/enrollments/${id}`
          );

          setMessage(
            "Successfully Enrolled!"
          );
        } catch (error) {
          setMessage(
            error.response
              ?.data
              ?.message ||
              "Enrollment Failed"
          );
        }
      };

    if (loading) {
      return (
        <h3>
          Loading...
        </h3>
      );
    }

    if (!course) {
      return (
        <h3>
          Course Not Found
        </h3>
      );
    }

    return (
      <div className="card p-4 shadow">

        <h2>
          {course.title}
        </h2>

        <hr />

        <p>
          <strong>
            Description:
          </strong>
        </p>

        <p>
          {
            course.description
          }
        </p>

        <p>
          <strong>
            Instructor:
          </strong>{" "}
          {
            course.instructor
          }
        </p>

        <p>
          <strong>
            Category:
          </strong>{" "}
          {
            course.category
          }
        </p>

        <p>
          <strong>
            Duration:
          </strong>{" "}
          {
            course.duration
          }
        </p>

        <p>
          <strong>
            Tags:
          </strong>
        </p>

        {course.tags.map(
          (
            tag,
            index
          ) => (
            <span
              key={index}
              className="badge bg-primary me-2"
            >
              {tag}
            </span>
          )
        )}

        <hr />

        <button
          className="btn btn-success"
          onClick={
            handleEnroll
          }
        >
          Enroll Now
        </button>

        {message && (
          <div className="alert alert-info mt-3">
            {message}
          </div>
        )}

      </div>
    );
  };

export default CourseDetails;