import { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Theme";
import Logo from "../subComponents/Logo";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import Home from "../subComponents/Home";
import { portfolioData } from "../data/PortfolioData";
import Card from "../subComponents/Card";
import { SiElasticcloud } from "react-icons/si";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const spinner = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      // spinner.current.style.transform = `rotate(${+window.pageYOffset}deg)`;

      return (spinner.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
      // return (spinner.current.style.transform =
      //   "rotate(" + -window.pageYOffset + " deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Logo theme="light" />
        <SocialMediaIcons theme="light" />
        <Home />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {portfolioData.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
        </Main>

        <Rotate ref={spinner}>
          <SiElasticcloud className="icons" />
        </Rotate>

        <BigTitle text="WORK" top="-3%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

const Box = styled.div`
  /* width: 100vw; */
  height: 400vh;
  position: relative;
  background-color: ${(props) => props.theme.body};
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 80px;
  height: 80px;
  z-index: 1;
  color: white;

  .icons {
    width: 30px;
    height: 30px;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
export default About;
