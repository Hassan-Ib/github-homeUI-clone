import React from "react";
import Styledheader, {
  Banner,
  BannerText,
  BannerImage,
  BannerForm,
  GitUserBanner,
} from "./HomeStyle.jsx";
import gitActionWorld from "../assest/download.png";

const Homepage = ({ children }) => {
  return (
    <Styledheader>
      {children}
      <Banner>
        <BannerText>
          <div>
            <h1>Where the world builds software</h1>
            <p>
              Millions of developers and companies build, ship, and maintain
              their software on GitHub the largest and most advanced development
              platform in the world.
            </p>
            <BannerForm>
              <input type="search" placeholder="Email" name="Email" />
              <button>Sign up for Github</button>
            </BannerForm>
          </div>
          <GitUserBanner></GitUserBanner>
        </BannerText>
        <BannerImage>
          <picture>
            <source srcSet={`${gitActionWorld}`} />
            <img src={`${gitActionWorld}`} alt="git action around the world" />
          </picture>
        </BannerImage>
      </Banner>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1680 40"
        className="position-absolute hero__svg">
        <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
      </svg>
    </Styledheader>
  );
};

export default Homepage;
