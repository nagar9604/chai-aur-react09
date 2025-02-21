import React ,{useState}from "react";
import { Link } from "react-router-dom"; // For navigation using React Router

const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <header>
      
      <div className="logo-text-container" style={{backgroundColor:"#384959",color:"white"}}>
        <div>
          <img src="https://cdn-icons-png.freepik.com/256/5180/5180052.png?ga=GA1.1.789058358.1740063125&semt=ais_hybrid" alt="logo" width="3%" height="3%"/>  HOME APPLIANCES AND SERVICES
          </div> 
          </div>    
      
      <nav className="custom-navbar navbar-expand-lg navbar-dark ">
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