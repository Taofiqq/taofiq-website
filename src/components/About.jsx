import styled, { ThemeProvider, keyframes } from "styled-components";
import { lightTheme } from "./Theme";
import Logo from "../subComponents/Logo";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import Home from "../subComponents/Home";
import ParticlesComponent from "../subComponents/Particles";
import spaceman from "../resource/img/taomemoji.png";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";
import { mediaQueries } from "../subComponents/mediaQueries";
import ToggleMode from "../subComponents/ToggleMode";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
  transition: {
    staggerChildren: 0.5,
    duration: 0.5,
  },
};

const About = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Logo theme="light" />
        <SocialMediaIcons theme="light" />
        <Home />
        <ParticlesComponent theme="dark" />
        <ToggleMode />

        <Spaceman>
          <img src={spaceman} alt="" />
        </Spaceman>

        <Main>
          Hello, I am a front end developer, and I create innovative, modern and
          responsive websites. I work on codes I touch to be more readable,
          performant and accessible than it was given to me.
          <br />
          <br />
          {/* <br />
          <br /> */}
          Aside from coding, I am also passionate about blogging and sharing the
          knowledge I gained with the dev community. I value the expertise to
          contribute to web development performance and help fellow developers
          improve their skills, as I have also gained a lot from others.
        </Main>
        <BigTitle text="ABOUT" left="13%" top="-9%" />
      </Box>
    </ThemeProvider>
  );
};

const Box = styled(motion.div)`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc (0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-size: initial;
  font-style: italic;

  ${mediaQueries(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

  ${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};
`;
export default About;
