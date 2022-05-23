import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import AuthPanel from "./auth/auth-flyout-panel";

const Layout = () => {
  const [authPanelHidden, setAuthPanelHidden] = useState(true);

  const toggleAuthPanel = () => {
    setAuthPanelHidden(!authPanelHidden);
  };

  return (
    <>
      <div className="header">
        {/* I'm thinking of a header with a background banner */}
        <div className="navigation d-flex">
          <div className="nav-item">Roster</div>
          <div className="nav-item">Simulation</div>
          <div className="nav-item">Town</div>
          <div className="nav-item auth" onClick={toggleAuthPanel}>
            Auth
            <AuthPanel hidden={authPanelHidden} />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
