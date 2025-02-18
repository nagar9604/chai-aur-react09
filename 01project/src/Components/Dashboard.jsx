import React from 'react'

function Dashboard() {
    const [showModal, setShowModal] = useState(false);
    const [currentService, setCurrentService] = useState('');
    const [balance, setBalance] = useState(1000); // Simulated balance
    
  
    const handleLogout = () => {
      setIsLoggedIn(false);
    };
  
    // Show modal for each service
    const handleServiceClick = (serviceName) => {
      setCurrentService(serviceName);
      setShowModal(true);
    };
  
    // Close modal
    const closeModal = () => {
      setShowModal(false);
    };
  
    return (
      <>
        <div>
  
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="#">MyBank</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
  
                  <li className="nav-item">
                    <button className="btn btn-primary" onClick={goToLoginpage}>Login</button>
                  </li>
                
                 
                
                </ul>
              </div>
            </div>
          </nav>
  
  
          <header className="jumbotron jumbotron-fluid text-center">
            <div className="container">
              <h1 className="display-4">Welcome to MyBank</h1>
              <p className="lead">Your trusted financial partner</p>
            </div>
          </header>
  
  
          
  
  
          <div className="container text-center my-5">
            <h2>Our Services</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card" onClick={() => handleServiceClick('Personal Banking')}>
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Service 1" />
                  <div className="card-body">
                    <h5 className="card-title">Personal Banking</h5>
                    <p className="card-text">Manage your personal accounts with ease and security.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" onClick={() => handleServiceClick('Business Solutions')}>
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Service 2" />
                  <div className="card-body">
                    <h5 className="card-title">Business Solutions</h5>
                    <p className="card-text">Financial tools designed for businesses of all sizes.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" onClick={() => handleServiceClick('Loans & Mortgages')}>
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Service 3" />
                  <div className="card-body">
                    <h5 className="card-title">Loans & Mortgages</h5>
                    <p className="card-text">Competitive rates for personal and home loans.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
  
          <footer className="bg-dark text-white text-center py-4">
            <p>&copy; 2025 MyBank. All Rights Reserved.</p>
          </footer>
  
  
  
        </div>
  
      </>
    )
}

export default Dashboard