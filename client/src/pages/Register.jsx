import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      interests: "",
      skills: ""
    });

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post(
        "/auth/register",
        {
          ...formData,

          interests:
            formData.interests
              .split(",")
              .map((i) =>
                i.trim()
              ),

          skills:
            formData.skills
              .split(",")
              .map((s) =>
                s.trim()
              )
        }
      );

      navigate("/login");
    } catch (error) {
      setError(
        error.response?.data
          ?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row justify-content-center">

      <div className="col-md-8">

        <div className="card p-4 shadow">

          <h2>
            Register
          </h2>

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          <form
            onSubmit={
              handleSubmit
            }
          >
            <div className="mb-3">
              <label>
                Name
              </label>

              <input
                type="text"
                name="name"
                className="form-control"
                onChange={
                  handleChange
                }
                required
              />
            </div>

            <div className="mb-3">
              <label>
                Email
              </label>

              <input
                type="email"
                name="email"
                className="form-control"
                onChange={
                  handleChange
                }
                required
              />
            </div>

            <div className="mb-3">
              <label>
                Password
              </label>

              <input
                type="password"
                name="password"
                className="form-control"
                onChange={
                  handleChange
                }
                required
              />
            </div>

            <div className="mb-3">
              <label>
                Interests
              </label>

              <input
                type="text"
                name="interests"
                className="form-control"
                placeholder="React, AI, Cyber Security"
                onChange={
                  handleChange
                }
              />
            </div>

            <div className="mb-3">
              <label>
                Skills
              </label>

              <input
                type="text"
                name="skills"
                className="form-control"
                placeholder="JavaScript, Python"
                onChange={
                  handleChange
                }
              />
            </div>

            <button
              className="btn btn-success w-100"
              disabled={
                loading
              }
            >
              {loading
                ? "Registering..."
                : "Register"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Register;