import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  color: var(--color-white);
  padding: 1rem;
  /* font-size: 4rem; */
  @media screen and (min-width: 600px) {
    svg {
      color: white !important;
    }
    form {
      margin-left: auto;
      input {
        margin: 0.5rem;
        font-size: 1rem;
        letter-spacing: var(--letter-spacing);
      }
    }
    input[value="sign up"] {
      display: none;
    }
  }
  button {
    font-size: var(--font-size);
    border: 2px solid var(--color-slight-white);
  }
`;
export default StyledNav;
