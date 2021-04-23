import React from "react";
import { NavDetails } from "./Styled-Nav";

const NavLink = ({ summary, children, link = "./" }) => {
  if (!summary) {
    return <a href={link}>{children}</a>;
  }
  return (
    <NavDetails>
      <summary>{summary}</summary>
      <div>{children}</div>
    </NavDetails>
  );
};

export default NavLink;
