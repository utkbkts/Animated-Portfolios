import React, { useEffect } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { DarkTheme } from "./Theme";
import Logocomponent from "../subcomponents/Logocomponent";
import Social from "../subcomponents/Social";
import PowerButton from "../subcomponents/PwerButton";
import astronot from "../assets/Images/spaceman.png";
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const float = keyframes`
0%{transform:translateY(-10px)}
50%{transform:translateY(15px) translateX(15px)}
100%{transform:translateY(-10px)}
`;
const Space = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  font-size: calc(0.6rem+1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono" monospace;
  font-style: italic;
  z-index: 3;
`;

const AboutPage = () => {

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box id="particles-js">
        <Logocomponent theme="dark" />
        <Social theme="dark" />
        <PowerButton theme="dark" />
        <Space>
          <img src={astronot} />
        </Space>
        <Main>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          eligendi libero, sit at minima impedit saepe consequatur totam sunt,
          cumque repellat, fugiat aperiam dolore eum molestias consectetur illum
          itaque magnam quia facilis numquam reprehenderit! Rerum minus
          temporibus blanditiis, quaerat architecto hic ipsa, officia ipsam at
          aliquam sapiente deserunt mollitia dolore.
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
