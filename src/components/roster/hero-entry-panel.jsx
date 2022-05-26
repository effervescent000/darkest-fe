import React, { useState } from "react";
import { Collapse } from "reactstrap";

const HeroEntryPanel = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="hero-entry-panel">
      <div className="hero-entry-header" onClick={toggleCollapse}>
        <span>Add new hero</span>
      </div>
      <Collapse isOpen={collapsed}>Hero entry form goes here</Collapse>
    </div>
  );
};

export default HeroEntryPanel;
