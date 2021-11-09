import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import HomeButton from "../subComponents/Home";
import Logo from "../subComponents/Logo";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import { SiElasticcloud } from "react-icons/si";
import Introduction from "./Introduction";
import { motion } from "framer-motion";

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <MainContainer>
      <Container>
        <HomeButton />
        <Logo click={click} />
        <SocialMediaIcons click={click} />
        <DarkDiv click={click} />

        <Center click={click}>
          <SiElasticcloud className="icon" onClick={() => handleClick()} />
          <span>Click here for some little intro 😇</span>
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
          <About to={{ pathname: "/about" }} click={click}>
            <motion.h3
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
          <Stacks to={{ pathname: "/skills" }}>
            <motion.h3
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
  );
};

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: black;
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 1;
`;
const Blog = styled(NavLink)`
  color: black;
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  z-index: 1;
  transform: translate(-50%, -50%);
  transform: rotate(90deg);
`;
const Projects = styled(NavLink)`
  color: ${(props) => (props.click ? "white" : "black")};
  position: absolute;
  top: 50%;
  left: 0rem;
  z-index: 1;
  transform: rotate(90deg) translate(-50%, -50%);
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const About = styled(NavLink)`
  color: ${(props) => (props.click ? "white" : "black")};
  text-decoration: none;
  z-index: 1;
`;
const Stacks = styled(NavLink)`
  color: black;
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

  .icon {
    width: 50px;
    height: 50px;
    animation: ${rotate} infinite 1.5s linear;
  }
  span {
    padding-top: 1rem;
    display: ${(props) => (props.click ? "none" : "inline-block")};
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
`;

export default Main;
