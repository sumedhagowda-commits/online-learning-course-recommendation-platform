import {
  useEffect,
  useState
} from "react";

import API from "../services/api";

const Progress = () => {
  const [progressData,
    setProgressData] =
    useState([]);

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress =
    async () => {
      try {
        const response =
          await API.get(
            "/progress/my"
          );

        setProgressData(
          response.data
        );
      } catch (error) {
        console.error(error);
      }
    };

  const updateProgress =
    async (
      progressId,
      currentValue
    ) => {
      try {
        const newValue =
          Math.min(
            currentValue + 10,
            100
          );

        await API.put(
          `/progress/${progressId}`,
          {
            progressPercentage:
              newValue
          }
        );

        fetchProgress();
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div>

      <h1 className="mb-4">
        Progress Tracking
      </h1>

      {progressData.map(
        (item) => (
          <div
            key={item._id}
            className="card p-3 mb-3"
          >
            <h4>
              {
                item.course
                  .title
              }
            </h4>

            <div className="progress mb-3">
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${item.progressPercentage}%`
                }}
              >
                {
                  item.progressPercentage
                }
                %
              </div>
            </div>

            <button
              className="btn btn-success"
              onClick={() =>
                updateProgress(
                  item._id,
                  item.progressPercentage
                )
              }
            >
              Increase
              Progress
              +10%
            </button>

            {item.completed && (
              <div className="alert alert-success mt-3">
                Course
                Completed
              </div>
            )}
          </div>
        )
      )}

    </div>
  );
};

export default Progress;