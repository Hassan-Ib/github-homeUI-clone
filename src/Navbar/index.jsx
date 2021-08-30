import React, { useEffect } from "react";
import StyledNav, {
  NavLinkContainer,
  NavForm,
  NavLinkList,
  SignUpButton,
} from "./Styled-Nav";
import NavLink from "./NavLink";
import GitSvg from "./GitSvg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  function handleMouseEnter(e) {
    this.open = true;
  }

  function handleMouseLeave(e) {
    this.open = false;
  }

  useEffect(() => {
    const mediaq = window.matchMedia("(min-width: 80em)");
    const details = document.querySelectorAll("details");

    const handleTagHoverEffect = function (details) {
      details.forEach((details) =>
        details.addEventListener("mouseenter", handleMouseEnter)
      );
      details.forEach((details) =>
        details.addEventListener("mouseleave", handleMouseLeave)
      );
    };
    const removeTagHoverEffect = function (details) {
      details.forEach((details) => {
        details.removeEventListener("mouseenter", handleMouseEnter);
        details.removeEventListener("mouseleave", handleMouseLeave);
      });
    };

    if (mediaq.matches) {
      handleTagHoverEffect(details);
    }

    const handleMediaChange = function (e) {
      if (e.matches) {
        handleTagHoverEffect(details);
      } else {
        removeTagHoverEffect(details);
      }
    };
    mediaq.addEventListener("change", handleMediaChange);
    return () => {
      mediaq.removeEventListener("change", handleMediaChange);
      removeTagHoverEffect(details);
    };
  }, []);

  return (
    <StyledNav>
      <GitSvg />
      <NavLinkContainer>
        <div className="close__btn">
          <FaTimes />
        </div>
        <NavLinkList className="nav__list">
          <li>
            <NavLink summary="Why Github?">
              <ul>
                <li>
                  <a href="./">Features</a>
                  <ul className="features__list"></ul>
                </li>
                <hr />

                <li>
                  <a href="./">Github sponsors</a>
                </li>
                <li>
                  <a href="./">costumer stories</a>
                </li>
              </ul>
            </NavLink>
          </li>
          <li>
            {/* <a href="#./">Team</a> */}
            <NavLink>Team</NavLink>
          </li>
          <li>
            {/* <a href="#./">Enterprice</a> */}
            <NavLink>Entertprice</NavLink>
          </li>
          <li>
            <NavLink summary="Explore">
              <ul>
                <li>
                  <a href="./">Features</a>
                  <ul className="features__list"></ul>
                </li>
                <hr />

                <li>
                  <a href="./">Github sponsors</a>
                </li>
                <li>
                  <a href="./">costumer stories</a>
                </li>
              </ul>
            </NavLink>
          </li>
          <li>
            {/* <a href="./">Marketplace</a> */}
            <NavLink>Marketplace</NavLink>
          </li>
          <li>
            <NavLink summary="Pricing">
              <ul>
                <li>
                  <a href="./">Features</a>
                  <ul className="features__list"></ul>
                </li>
                <hr />

                <li>
                  <a href="./">Github sponsors</a>
                </li>
                <li>
                  <a href="./">costumer stories</a>
                </li>
              </ul>
            </NavLink>
          </li>
        </NavLinkList>
        <NavForm action="#">
          <label htmlFor="search">
            <input
              type="search"
              placeholder="search github"
              id="search"
              autoComplete="off"
              spellCheck="false"
              autoCapitalize="off"
              autoCorrect="false"
            />
            <img
              src="https://github.githubassets.com/images/search-key-slash.svg"
              alt="search icon"
            />
          </label>

          <input type="button" value="sign in" />

          <input type="button" value="sign up" />
        </NavForm>
      </NavLinkContainer>

      <SignUpButton>sign up</SignUpButton>
      <FaBars />
    </StyledNav>
  );
};

export default Navbar;
