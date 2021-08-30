import styled from "styled-components";
// import { theme } from "../utils/theme.js";

const StyledHeader = styled.header`
  background-image: var(--linear-gradient);
  position: relative;
  overflow: hidden;
  color: var(--color-text-white);
  .hero__svg {
    bottom: 0%;
  }
`;

export const Banner = styled.section`
  position: relative;
  max-height: 40rem;
  text-align: center;
  display: grid;
  place-items: center;
  padding: var(--spacing-lg) var(--spacing-sm);
`;

export const BannerText = styled.div`
  h1 {
    font-size: var(--fs-title);
    font-weight: var(--fw-title);
    line-height: 1.1;
  }
  p {
    color: var(--color-text-white-1);
    font-size: 1.3rem;
    margin-top: 1rem;
  }
`;

export const BannerImage = styled.div`
  overflow: hidden;
  width: 200%;
`;

export const BannerForm = styled.div`
  margin: 0 auto;
  margin-top: var(--spacing-sm);
  display: flex;
  flex-direction: column;

  input,
  button {
    padding: 0.5rem;
    border-radius: 5px;
    font-size: var(--fs);
  }
  input {
    margin-bottom: var(--spacing-xsm);
  }
  button {
    color: var(--color-text-white);
    background-color: rgb(46, 164, 79);
    background-image: linear-gradient(
      -180deg,
      rgb(52, 184, 89),
      rgb(46, 164, 79)
    );
  }
`;

export const GitUserBanner = styled.div``;

export default StyledHeader;
