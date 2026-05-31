import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] =
    useState({
      email: "",
      password: ""
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

      const response =
        await API.post(
          "/auth/login",
          formData
        );

      login(
        response.data.user,
        response.data.token
      );

      navigate("/dashboard");
    } catch (error) {
      setError(
        error.response?.data
          ?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row justify-content-center">

      <div className="col-md-6">

        <div className="card p-4 shadow">

          <h2 className="mb-4">
            Login
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

            <button
              className="btn btn-primary w-100"
              disabled={
                loading
              }
            >
              {loading
                ? "Logging In..."
                : "Login"}
            </button>
          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;