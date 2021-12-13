import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import HomeButton from "../subComponents/Home";
import Logo from "../subComponents/Logo";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import { ImSpinner9 } from "react-icons/im";
import Introduction from "./Introduction";
import { motion } from "framer-motion";
import ToggleMode from "../subComponents/ToggleMode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme";
import { mediaQueries } from "../subComponents/mediaQueries";

const Main = () => {
  const [click, setClick] = useState(false);
  const [theme, setTheme] = useState("light");
  const [path, setpath] = useState("");

  const handleClick = () => {
    setClick(!click);
  };

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };

  const mq = window.matchMedia("(max-width: 50em)").matches;
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <MainContainer
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === "about" || path === "skills" ? moveY : moveX}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <HomeButton />
          <Logo click={click} />
          <SocialMediaIcons click={click} />
          <ToggleMode theme={theme} setTheme={setTheme} />
          <DarkDiv click={click} />

          <Center click={click}>
            <ImSpinner9 className="icon" onClick={() => handleClick()} />
            <span>Quick Intro? </span>
          </Center>

          <Contact
            target="_blank"
            to={{ pathname: "mailto:taofiqaiyelabegan45@gmail.com" }}
          >
            <motion.h4
              initial={{
                x: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                x: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Say Hi to me...
            </motion.h4>
          </Contact>

          <Blog to={{ pathname: "/blog" }}>
            <motion.h3
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Blog
            </motion.h3>
          </Blog>

          <Projects to={{ pathname: "/projects" }} click={click}>
            <motion.h3
              initial={{
                y: 2300,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Projects
            </motion.h3>
          </Projects>

          <BottomBar>
            <About
              onClick={() => setClick(false)}
              click={mq ? +false : +click}
              to="/about"
            >
              <motion.h3
                onClick={() => setpath("about")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About
              </motion.h3>
            </About>
            <Stacks to="/skills">
              <motion.h3
                onClick={() => setpath("skills")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Stacks
              </motion.h3>
            </Stacks>
          </BottomBar>
        </Container>
        {click ? <Introduction click={click} /> : null}
      </MainContainer>
    </ThemeProvider>
  );
};

const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  transition: all 0.6s;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
  }

  h3 {
    ${mediaQueries(40)`
      font-size:1.2em;

  `};

    ${mediaQueries(30)`
      font-size:1em;

  `};
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 3rem;
  right: calc(1rem + 2vw);
  z-index: 1;

  ${mediaQueries(40)`
      font-size: .62em;
      top: 3.5rem;
  `};
  ${mediaQueries(20)`
      font-size: .5em;
      top: 3.1rem;
      right: 1rem;
  `};
`;
const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 47%;
  /* right: calc(1rem + 2vw); */
  right: 1rem;
  z-index: 1;
  transform: translate(-50%, -50%);
  transform: rotate(90deg);
`;
const Projects = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  left: -1rem;
  z-index: 1;
  transform: rotate(90deg) translate(-50%, -50%);
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const About = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
const Stacks = styled(NavLink)`
  color: ${(props) => props.theme.text};
  z-index: 1;
`;
const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg)
}
`;
const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    width: ${(props) => (props.click ? "80px" : "150px")};
    height: ${(props) => (props.click ? "80px" : "150px")};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.click ? "40px" : "150px")};
    height: ${(props) => (props.click ? "40px" : "150px")};
  }

  .icon {
    width: 50px;
    height: 50px;
    animation: ${rotate} infinite 1.5s linear;
    color: ${(props) => props.theme.text};
  }
  span {
    padding-top: 1rem;
    display: ${(props) => (props.click ? "none" : "inline-block")};
    color: ${(props) => props.theme.text};

    /* ${mediaQueries(30)`
      font-size:1em;

  `}; */
  }
`;

const DarkDiv = styled.div`
  z-index: 1;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  right: 50%;
  bottom: 0;
  top: 0;
  background-color: #212121;
  position: absolute;
  transition: height 0.5s ease, width 1s ease 0.5s;

  ${(props) =>
    props.click
      ? mediaQueries(50)`
       height: 50%;
  right:0;
  
  width: 100%;
  transition: width 0.5s ease, height 1s ease 0.5s;

  `
      : mediaQueries(50)`
       height: 0;
  
  width: 0;
  `};
`;

export default Main;
