import styled from "styled-components";
import { mediaQuery } from "../utilities/css/theme";

const StyledHeader = styled.header`
  background-image: linear-gradient(130deg, #042d6b, #04112a 18%);
  position: relative;
  overflow: hidden;
  color: var(--color-text-white);
  max-height: 140vh;
  .hero__svg {
    bottom: 0%;
  }
`;

export const Banner = styled.section`
  height: 90vh;
  padding: 0 2rem;
  @media screen and (min-width: ${mediaQuery.md}) {
    display: flex;
    /* align-items: center; */

    & > * {
      flex-basis: 50%;
    }
  }
`;
export const BannerText = styled.div`
  padding-top: 5rem;
  h1 {
    font-size: 3.5rem;
    line-height: 1;
  }
  p {
    color: var(--color-text-white-1);
    font-size: 1.3rem;
    margin-top: 1rem;
  }
`;

export const BannerImage = styled.div`
  overflow: hidden;
  width: 100%;
  picture,
  img {
    display: block;
    height: auto;
  }

  @media screen and (min-width: ${mediaQuery.md}) {
    picture {
      width: 115%;
    }
    img {
      width: 110%;
      margin-top: -15%;
    }
  }
`;
export const BannerForm = styled.div`
  display: flex;
  margin-top: 0.6rem;
  input {
    flex: 0.58;
    border-radius: 5px;
    padding: 0.5rem;
    font-size: var(--font-size);
  }
  button {
    flex: 0.4;
    font-size: var(--font-size);
    color: var(--color-text-white);
    background-color: rgb(46, 164, 79);
    background-image: linear-gradient(
      -180deg,
      rgb(52, 184, 89),
      rgb(46, 164, 79)
    );
    border-radius: 5px;
    margin-left: auto;
  }
`;
export const GitUserBanner = styled.div``;
export default StyledHeader;
