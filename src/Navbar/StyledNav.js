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
      border: 2px solid red;
      /* align-items: center; */
      flex: 2;
      li {
        border: 2px solid red;
      }
      details {
        position: relative;
        height: 100%;
        border: 2px solid red;
      }
      details > summary {
        list-style: none;
        cursor: pointer;
      }
      details > summary::-webkit-details-marker {
        display: none;
      }
      details > ul {
        position: absolute;
        padding: 1rem;
        border-radius: 6px;
        margin-top: 1.2rem;

        background-color: var(--color-bg-white);
        color: var(--color-text-black);

        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 1px;
      }

      & ul:first-child {
        display: flex;
        border: 2px solid red;
        /* align-items: center; */

        & > *:not(:last-child) {
          margin-right: 1.2rem;
        }
      }
    }
    /* form */
    form {
      margin-left: auto;
      margin-right: 0.5rem;
      border: 2px solid red;

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
