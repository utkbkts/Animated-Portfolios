import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Theme";
import Logocomponent from "../subcomponents/Logocomponent";
import Social from "../subcomponents/Social";
import PowerButton from "../subcomponents/PwerButton";
import ParticleCOmponent from "../subcomponents/ParticleCOmponent";
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  &:hover{
    color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.text};

  }
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  flex-direction: column;

  ${Main}:hover &{
    &>*{
      color: ${props=>props.theme.body};
    }
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;

  ${Main}:hover &{
    &>*{
      color: ${props=>props.theme.body};
    }
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Logocomponent/>
        <Social/>
        <PowerButton/>
        <ParticleCOmponent theme="light"/>
        <Main>
          <Title>
            <Description>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribut
            </Description>
            <Description>
              <strong>Skills</strong>
              <p>Html,Css,React,JS,Redux,Sass,Bootstrap,Tailwind,Firebase</p>
            </Description>
          </Title>
        </Main>
        <Main>
          <Title>
            <Description>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution
            </Description>
            <Description>
              <strong>Skills</strong>
              <p>Html,Css,React,JS,Redux,Sass,Bootstrap,Tailwind,Firebase</p>
            </Description>
          </Title>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
