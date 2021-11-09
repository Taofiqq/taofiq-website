import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Theme";
import { BiLaptop, BiCodeAlt } from "react-icons/bi";
import Logo from "../subComponents/Logo";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import Home from "../subComponents/Home";
import ParticlesComponent from "../subComponents/Particles";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

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
const Skills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Logo />
        <SocialMediaIcons />
        <Home />
        <ParticlesComponent theme="light" />
        <Main>
          <Title>
            <BiCodeAlt /> FrontEnd Developer
          </Title>
          <Description>lorem20fjdiiiiiiiiiiiiiiiiiiii</Description>
          <Description>
            <strong>I love bulding modern, innovative websites using:</strong>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>ReactJS</li>
              <li>StyledComponents</li>
              <li>NextJs</li>
            </ul>
          </Description>
        </Main>

        <Main>
          <Title>
            <BiLaptop /> Backend Developer
          </Title>
          <Description>lorem20fjdiiiiiiiiiiiiiiiiiiii</Description>
          <Description>
            <strong>I love bulding backend of a server using:</strong>
            <ul>
              <li>NodeJs</li>
              <li>Express</li>
              <li>Fastify</li>
              <li>MongoDB</li>
            </ul>
          </Description>
        </Main>
        <BigTitle title="SKILLS" top="10%" leftt="10%" />
      </Box>
    </ThemeProvider>
  );
};

const Box = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
`;

const Main = styled.div`
  border: 2px solid black;
  color: black;
  background-color: white;
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: black;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc (1em + 1vw);
  ${Main}:hover & {
    & > * {
      color: white;
    }

    & > *:first-child {
      margin-right: 1rem;
    }
  }
`;
const Description = styled.div`
  color: black;
  font-size: calc (0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: white;
  }

  strong {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  ul {
    margin-left: 2rem;
  }
`;
export default Skills;
