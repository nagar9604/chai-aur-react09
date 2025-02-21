import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    setError("");
    setMessage("If an account with this email exists, we will send a password reset link.");
    // Simulate the process (you would actually send a request to your backend here)
    setTimeout(() => {
      navigate("/login"); // Redirect to login after the reset process
    }, 2000);
  };

  return (
    <div className="center-container" style={{backgroundColor:"gray"}}>
    <div
      className=" container-fluid d-flex justify-content-center align-items-center"
      style={{
        height: "75vh",
        backgroundImage: 'url("https://img.freepik.com/free-photo/volume-abstract-graphic-loneliness-desk_1258-258.jpg?ga=GA1.1.789058358.1740063125&semt=ais_hybrid")',
        backgroundSize: 'cover',
        backdropFilter:'blur(110vh)',
        zIndex:-1, 
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="card p-4 shadow"
        style={{
          width: "400px",
          borderRadius: "10px",
          backgroundColor: 'rgba(300, 300, 300, 0.4)',

        }}
      >
        <h3 className="text-center" style={{ color: "black" }}>
          Forgot Password
        </h3>
        {error && <div className="alert alert-danger">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}
        <form onSubmit={handleResetPassword}>
          <div className="mb-3">
            <label className="form-label" style={{ color: "black" }}>
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderColor: "black", borderRadius: "8px" }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              backgroundColor: "gray",
              borderRadius: "8px",
              borderColor:"black"
            }}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ForgotPassword;