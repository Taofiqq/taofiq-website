import styled from "styled-components";
import Me from "../resource/img/about.png";
import { motion } from "framer-motion";
const Introduction = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "tween", duration: 2, delay: 1 }}
    >
      <BoxContainer>
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Hi>Hi, 👋🏿</Hi>
          <Para1>
            I'm Taofiq, a freelance Front End Developer based in Malaysia.
          </Para1>
          <Para2>
            I develop the user interfaces of the website and applications.
          </Para2>
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
`;

const Text = styled(motion.div)`
  font-size: calc(1rem + 1.5vw);
  color: black;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  /* & > *:last-child {
    color: grey;
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300px;
  } */
`;

const Hi = styled.h1`
  font-size: 2rem;
  font-weight: 300;
`;
const Para1 = styled.h1`
  font-size: 2rem;
  font-weight: 300;
`;
const Para2 = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  color: #e0c097;
`;

export default Introduction;
