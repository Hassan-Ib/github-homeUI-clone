import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  color: var(--color-text-white);
  position: relative;
  padding: 1rem;

  @media screen and (min-width: 80em) {
    & > *:last-child {
      display: none;
    }
  }
`;

export const NavLinkContainer = styled.div`
  min-width: 300px;
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;

  font-size: 1.1rem;
  background-color: var(--color-bg-white);
  color: var(--color-text-black-1);

  /* transform: translateX(100%); */
  & > *:not(:last-child) {
    border-bottom: 1px solid var(--color-text-black);
  }
  .close__btn {
    padding: 0.5rem;
    & > * {
      display: block;
      margin-left: auto;
    }
  }
  /* media query */
  @media screen and (min-width: 80em) {
    position: relative;
    display: flex;
    height: auto;
    flex: 2;
    transform: translateX(0);

    color: var(--color-text-white);
    background-color: inherit;

    & > *:not(:last-child) {
      border-bottom: none;
    }
    .close__btn {
      display: none;
    }
  }
`;

export const NavLinkList = styled.ul`
  padding: 1rem;

  li {
    padding: 0.5rem 0;
  }

  & > * {
    transition: color 100ms ease;
    &:hover {
      color: var(--color-text-black);
    }
  }
  /* media query */
  @media screen and (min-width: 80em) {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    li {
      padding: 0 0.5rem;
    }
    & > * {
      &:hover {
        color: var(--color-text-white-1);
      }
    }
  }
`;

export const NavDetails = styled.details`
  div {
    ul {
      padding: 0.5rem;

      background-color: var(--color-bg-white);
      color: var(--color-text-black);

      font-size: 1rem;
      letter-spacing: 1px;
    }
    @media screen and (min-width: 80em) {
      padding-top: 1.5rem;
      position: absolute;
    }
  }

  summary {
    list-style: none;
    cursor: pointer;
  }

  summary::marker {
    display: none;
  }
`;

export const NavForm = styled.form`
  padding: 1rem;

  input {
    font-size: 1rem;
    letter-spacing: var(--letter-spacing);
  }

  label[for="search"] {
    display: block;
    position: relative;
    img {
      position: absolute;
      top: 25%;
      right: 4%;
      cursor: pointer;
    }
  }
  input[type="search"] {
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    background-color: var(--color-bg-input);
    color: var(--color-text-placeholder);
    border: none;
    font-size: 0.9rem;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }
  input[type="button"] {
    display: inline-block;
    margin-left: 2rem;
  }
  @media screen and (min-width: 80em) {
    padding: 0 1rem;
    margin-left: auto;
    display: flex;
    align-items: center;
    input[type="search"] {
      margin-bottom: 0;
    }
    & > * {
      margin: 0;
    }
    input[type="button"] {
      display: inline-block;
      margin-left: 1rem;
      color: var(--color-text-white);
    }
    input[type="button"]:last-child {
      display: none;
    }
  }
`;

export const SignUpButton = styled.button`
  margin-left: auto;
  margin-right: 2rem;
  font-size: var(--font-size);
  border: 2px solid var(--color-slight-white);
  color: var(--color-text-white);
  padding: var(--padding-button);
  border-radius: var(--border-radius);
`;

export default StyledNav;
