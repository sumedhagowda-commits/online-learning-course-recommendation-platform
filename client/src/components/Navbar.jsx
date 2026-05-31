import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand" to="/">
          LearnHub
        </Link>

        {/* Right Side Buttons */}
        <div className="d-flex align-items-center">

          {user ? (
            <>
              <Link className="btn btn-light me-2" to="/dashboard">
                Dashboard
              </Link>

              <Link className="btn btn-warning me-2" to="/courses">
                Courses
              </Link>

              <Link className="btn btn-info me-2" to="/enrolled">
                My Courses
              </Link>

              <button
                className="btn btn-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-light me-2" to="/login">
                Login
              </Link>

              <Link className="btn btn-warning me-2" to="/register">
                Register
              </Link>
            </>
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;