import styled, { ThemeProvider, keyframes } from "styled-components";
import { darkTheme } from "./Theme";
import Logo from "../subComponents/Logo";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import Home from "../subComponents/Home";
import ParticlesComponent from "../subComponents/Particles";
import spaceman from "../resource/img/spaceman.png";
import BigTitle from "../subComponents/BigTitle";

const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Logo theme="light" />
        <SocialMediaIcons theme="light" />
        <Home />
        <ParticlesComponent theme="dark" />

        <Spaceman>
          <img src={spaceman} alt="" />
        </Spaceman>

        <Main>
          lorem20fjdiiiiiiiiiiiiiiiiiiii
          <br />
          lorem20fjdiiiiiiiiiiiiiiiiiiii
          <br />
          lorem20fjdiiiiiiiiiiiiiiiiiiii
        </Main>
        <BigTitle text="ABOUT" left="13%" top="-9%" />
      </Box>
    </ThemeProvider>
  );
};

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme.body};
  overflow: hidden;
`;
const float = keyframes`
0% {
  transform: translateY(-10px);
}
50% {
  transform: translateY(15px) translateX(15px);
}
100% {
  transform: translateY(-10px);
}
`;
const Spaceman = styled.div`
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
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc (0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-size: initial;
  font-style: italic;
`;
export default About;
