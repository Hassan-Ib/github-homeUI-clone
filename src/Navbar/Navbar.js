import React from "react";
import StyledNav from "./StyledNav";
import data from "./navData";

const Navbar = () => {
  const detailHandler = React.useRef();
  function handleMouseEnter(e) {
    const details = detailHandler.current;
    if (!details.open) {
      console.log("true");
      details.open = true;
    }
  }

  function handleMouseLeave() {
    const details = detailHandler.current;
    details.open = false;
  }
  return (
    <StyledNav>
      <svg
        height="40"
        viewBox="0 0 16 16"
        version="1.1"
        width="40"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        ></path>
      </svg>
      <div>
        <ul>
          <li>
            <details
              ref={detailHandler}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <summary>
                Why Github? <span></span>
              </summary>
              <ul>
                <li>
                  <a href="">Features</a>
                  <ul></ul>
                </li>
                <hr />

                <li>
                  <a href="">Github sponsors</a>
                </li>
                <li>
                  <a href="">costumer stories</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Enterprice</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>

          <li>
            <a href="#">pricing</a>
          </li>
        </ul>

        <form action="#">
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
        </form>
      </div>

      <button>sign up</button>
    </StyledNav>
  );
};

export default Navbar;
