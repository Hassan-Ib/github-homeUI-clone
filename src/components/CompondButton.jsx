import React from "react";
import styled from "styled-components";
const CompondButton = ({ children }) => {
  return <StyledCompondButton>{children}</StyledCompondButton>;
};
const StyledCompondButton = styled.div`
  max-width: 35em;
  border: 2px solid red;
`;

export default CompondButton;
