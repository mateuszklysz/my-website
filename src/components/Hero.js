import React from "react";
import styled from "styled-components";
import media from "../utils/media";

import HeroText from "./HeroText";
import HeroCube from "./HeroCube";

const StyledContainer = styled.section`
  display: flex;
  margin: 0 100px 40px 100px;
  height: 650px;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme: { font } }) => font.family.montserrat};
  color: ${({ theme: { color } }) => color.white};

  ${media.desktopL`
    height: auto;
    flex-direction: column;
 `}
`;

const Hero = () => (
  <StyledContainer>
    <HeroText />
    <HeroCube />
  </StyledContainer>
);

export default Hero;
