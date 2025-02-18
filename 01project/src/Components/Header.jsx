import React ,{useState}from "react";
import { Link } from "react-router-dom"; // For navigation using React Router

const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <header>
      <nav className="navbar" data-bs-theme="dark">
      <div className="container-fluid">
          <img src="https://tse4.mm.bing.net/th?id=OIP.8Kx2sSeO1iiDfgayRlZHLgHaFj&pid=Api&P=0&h=180" alt="logo" width="50" height="auto"/>
          <h6 className="navbar-nav mr-auto text-white"> HOME APPLIANCES AND SERVICES</h6>
          </div>    
      </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
        
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav ms-auto nav-underline">
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/serviceprovider">Service Provider</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/customer">Customer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/catagory">Catagory</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/subcatagory">Sub-Catagory</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/complain">Complain</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/feedback">Feedback</Link>
              </li>
              <li className="nav-item ">
              <Link to={toggle ? "/login" : "/registration : /forgot-password"} className="nav-link text-white" onClick={() => setToggle(!toggle)}>
                Login</Link>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;