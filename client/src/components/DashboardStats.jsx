const DashboardStats = ({
  totalCourses,
  enrolledCourses,
  completedCourses
}) => {
  return (
    <div className="row">

      <div className="col-md-4 mb-3">
        <div className="card bg-primary text-white p-3">
          <h3>
            {totalCourses}
          </h3>
          <p>
            Total Courses
          </p>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div className="card bg-success text-white p-3">
          <h3>
            {enrolledCourses}
          </h3>
          <p>
            Enrolled
          </p>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div className="card bg-warning p-3">
          <h3>
            {completedCourses}
          </h3>
          <p>
            Completed
          </p>
        </div>
      </div>

    </div>
  );
};

export default DashboardStats;