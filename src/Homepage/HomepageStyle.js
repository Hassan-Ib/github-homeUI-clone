import styled from "styled-components";

const StyledHeader = styled.header`
  background-image: linear-gradient(130deg, #042d6b, #04112a 18%);
  position: relative;
  overflow: hidden;
  color: var(--color-text-white);
  max-height: 120vh;
  .hero__svg {
    bottom: 0%;
  }
`;

export const Banner = styled.section`
  padding: 0 2rem;
  @media screen and (min-width: 75em) {
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
  margin-left: 5rem;
  overflow: hidden;
  width: 100%;

  @media screen and (min-width: 75rem) {
    picture {
      display: block;
      width: 110%;
      height: auto;
    }
    img {
      display: block;
      width: 110%;
      height: auto;
    }
  }
`;
export const BannerForm = styled.div`
  display: flex;
  margin-top: 0.6rem;
  input {
    flex: 2;
    border-radius: 5px;
    padding: 0.5rem;
    font-size: var(--font-size);
  }
  button {
    flex: 1;
    font-size: var(--font-size);
    color: var(--color-text-white);
    /* background-color: ; */
  }
`;
export const GitUserBanner = styled.div``;
export default StyledHeader;
