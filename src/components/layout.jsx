import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="header">
        {/* I'm thinking of a header with a background banner */}
        <div className="navigation">
          <div className="nav-item">Roster</div>
          <div className="nav-item">Simulation</div>
          <div className="nav-item">Town</div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
