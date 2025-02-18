import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    alert(`Logged in with Email: ${email}`);
  };
  

  return (
    <div className="center-container" >

    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        
        
        backgroundImage: 'url("https://tse3.mm.bing.net/th?id=OIP.OgreYwyLQ_iccSbOnHosIAHaEK&pid=Api&P=0&h=180")',
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
          zIndex:1,
          
        }}
      >
        <h3 className="text-center" style={{ color: "Black" }}>
          Login
        </h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
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
              style={{ borderColor: "#607d8b", borderRadius: "8px" }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: "black" }}>
              Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ borderColor: "black", borderRadius: "8px" }}
              />
              <button
                className="btn btn-outline-secondary"
                style={{color:"black" ,borderColor:"black"}}
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <p>
            Don't have an account? <Link to="/registration" style={{ color: "blue" }}>Register here</Link>
          </p>


          <p>
           ForgotPassword? <Link to="/forgot-password" style={{ color: "blue" }}>ForgotPassword</Link>
          </p>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={rememberMe}
              onClick={()=> console.log("password remembered")}
              
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label className="form-check-label" style={{ color: "black" }}>
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ backgroundColor: "GrayText", borderColor:"black",borderRadius: "8px" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;