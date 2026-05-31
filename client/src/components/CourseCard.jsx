import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">

        <div className="card-body">

          <h5 className="card-title">
            {course.title}
          </h5>

          <p className="card-text">
            {course.description}
          </p>

          <p>
            <strong>Instructor:</strong>{" "}
            {course.instructor}
          </p>

          <p>
            <strong>Category:</strong>{" "}
            {course.category}
          </p>

          <p>
            <strong>Duration:</strong>{" "}
            {course.duration}
          </p>

          <Link
            to={`/course/${course._id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>

        </div>
      </div>
    </div>
  );
};

export default CourseCard;