import React from 'react';

const Header = () => {
  return (
    <nav className="navbar sticky-top navbar-light">
      <div className="row appreciation-nav-row">
        <div className="col">
          <div className="d-flex justify-content-start">
            <button
              type="button"
              id="sidebarCollapse"
              className="btn btn-outline-default"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        <div className="col">
          <div className="profile-area d-flex justify-content-end">
            <p className="p-0 m-0">
              <span>
                <img alt="userProfile" src="/src/assets/images/prof-img-appr.png" />
              </span>
              <span className="username">Chetna Pandey</span>
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-start"></div>
    </nav>
  );
};

export default Header;
