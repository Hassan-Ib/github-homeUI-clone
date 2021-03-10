import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  color: var(--color-text-white);
  padding: 0.5rem 1rem;
  @media screen and (min-width: 75em) {
    svg {
      color: #fff !important;
      margin-right: 1rem;
    }

    div {
      display: flex;
      align-items: center;
      flex: 2;
      details {
        position: relative;
      }
      details > summary::-webkit-details-marker {
        display: none;
      }
      details > ul {
        position: absolute;
        margin-top: 1rem;
      }

      & ul:first-child {
        display: flex;
        align-items: center;

        & > *:not(:last-child) {
          margin-right: 1.2rem;
        }
      }
    }
    /* form */
    form {
      margin-left: auto;
      margin-right: 0.5rem;

      input {
        color: var(--color-text-white);
        margin: 0.5rem;
        font-size: 1rem;
        letter-spacing: var(--letter-spacing);
      }
      input[type="search"] {
        padding: 0.5rem 1rem;
        border-radius: var(--border-radius);
        background-color: var(--color-bg-input);
        color: var(--color-text-placeholder);
        border: none;
        font-size: 0.9rem;
        text-transform: capitalize;
      }
      label[for="search"] {
        position: relative;
        img {
          position: absolute;
          top: 0%;
          right: 8%;
          cursor: pointer;
        }
      }
    }
    input[value="sign up"] {
      display: none;
    }
  }

  /* sign in button */
  button {
    margin-left: auto;
    font-size: var(--font-size);
    border: 2px solid var(--color-slight-white);
    color: var(--color-text-white);
    padding: var(--padding-button);
    border-radius: var(--border-radius);
  }
`;
export default StyledNav;
