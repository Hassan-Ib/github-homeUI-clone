import React from "react";
import Styledheader from "./HomepageStyle";

const Homepage = ({ children }) => {
  return (
    <Styledheader>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1680 40"
        className="position-absolute hero__svg"
      >
        <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
      </svg>
    </Styledheader>
  );
};

export default Homepage;
