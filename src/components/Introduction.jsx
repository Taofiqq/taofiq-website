import { useEffect, useState } from "react";
import styled from "styled-components";
import Me from "../resource/img/about.png";
import { motion } from "framer-motion";
import { mediaQueries } from "../subComponents/mediaQueries";
const Introduction = () => {
  const [height, setHeight] = useState("55vh");
  useEffect(() => {
    if (window.matchMedia("(max-width: 50em)").matches) {
      setHeight("70vh");
    }
    if (window.matchMedia("(max-width: 20em)").matches) {
      setHeight("60vh");
    }
  }, []);
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ type: "tween", duration: 2, delay: 1 }}
    >
      <BoxContainer>
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Hi>
            Hi👋🏿, I'm Taofiq, a freelance Front End Developer, passionate about
            bringing web applications designs to life using code. I specializing
            in building the user interface of the web and creating accesible and
            exceptional digital experiences for users.
          </Hi>
          {/* <Para1></Para1> */}
          {/* <Para2>
            I develop and build User Interfaces. Passionate about responsive
            website design and a firm believer in the mobile-first strategy
            while building web applications.
          </Para2> */}
        </Text>
      </BoxContainer>
      <BoxContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img src={Me} alt="myself" className="myImg" />
        </motion.div>
      </BoxContainer>
    </Box>
  );
};

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  background: linear-gradient(to right, white 50%, grey 50%) bottom,
    linear-gradient(to right, white 50%, grey 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid white;
  border-right: 2px solid black;
  z-index: 4;

  ${mediaQueries(1200)`
    width: 65vw;
  `};

  ${mediaQueries(60)`
    width: 70vw;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    background-size: 100% 2px;

    flex-direction:column;
    justify-content:space-between;
  
  `};

  ${mediaQueries(40)`
    width: 60vw;
    
  
  `};

  ${mediaQueries(30)`
    width: 70vw;
    
  
  `};
  ${mediaQueries(20)`
    width: 60vw;
    
  
  `};

  @media only screen and (max-width: 50em) {
    background: none;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
  }
`;

const BoxContainer = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .myImg {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }

  ${mediaQueries(50)`
      width: 100%;
    height: 50%;
      .myImg {
    
    width: 70%;
    
  }

  `};

  ${mediaQueries(40)`
  
      .myImg {
    
    width: 80%;
    
  }

  `};

  ${mediaQueries(30)`
     

      .myImg {
    
    width: 90%;
    
  }

  `};
  ${mediaQueries(20)`
     

     .myImg {
   
   width: 80%;
   
 }

 `};
`;

const Text = styled(motion.div)`
  font-size: calc(1rem + 1.5vw);
  color: white;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    /* color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`}; */

    /* font-size: calc(0.5rem + 1.5vw); */
    font-weight: 300;

    ${mediaQueries(40)`
        font-size: calc(0.5rem + 1vw);


  `};
  }

  ${mediaQueries(40)`
        font-size: calc(1rem + 1.5vw);


  `};
  ${mediaQueries(20)`
         padding: 1rem;



  `};
`;

const Hi = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
`;
// const Para1 = styled.h1`
//   font-size: 1rem;
//   font-weight: 300;
// `;
// const Para2 = styled.p`
//   font-size: 1rem;
//   font-weight: 300;
//   color: white;
// `;

export default Introduction;
