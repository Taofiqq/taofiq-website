import { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Theme";
import Logo from "../subComponents/Logo";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import Home from "../subComponents/Home";
import { portfolioData } from "../data/PortfolioData";
import Card from "../subComponents/Card";
import { ImSpinner9 } from "react-icons/im";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";
import { mediaQueries } from "../subComponents/mediaQueries";

const About = () => {
  const ref = useRef(null);
  const spinner = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (spinner.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
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
          <ImSpinner9 className="icons" />
        </Rotate>

        <BigTitle text="Projects" top="-3%" right="20%" />
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
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;

  ${mediaQueries(50)`
        
        
        left:calc(8rem + 15vw);

  `};

  ${mediaQueries(40)`
  top: 30%;
        
        left:calc(6rem + 15vw);

  `};

  ${mediaQueries(40)`
        
        left:calc(2rem + 15vw);

  `};
  ${mediaQueries(25)`
        
        left:calc(1rem + 15vw);

  `};
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
    width: 80px;
    height: 80px;

    ${mediaQueries(40)`
     width:60px;
         height:60px;   
  `};

    ${mediaQueries(25)`
        width:50px;
         height:50px;
  `};
  }

  ${mediaQueries(40)`
     width:60px;
         height:60px;   
  `};

  ${mediaQueries(25)`
        width:50px;
         height:50px;
  `};
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
