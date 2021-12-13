import styled from "styled-components";
import taoMemoji from "../resource/img/taomemoji.png";
import { motion } from "framer-motion";
import { mediaQueries } from "./mediaQueries";
const Logo = (props) => {
  return (
    <Container>
      <LogoStyled
        initial={{
          y: -200,
          transition: { type: "spring", duration: 1.5, delay: 1 },
        }}
        animate={{
          y: 0,
          transition: { type: "spring", duration: 1.5, delay: 1 },
        }}
        click={props.click}
      >
        Taofiq
      </LogoStyled>
      <Image
        initial={{
          y: -200,
          transition: { type: "spring", duration: 1.5, delay: 1 },
        }}
        animate={{
          y: 0,
          transition: { type: "spring", duration: 1.5, delay: 1 },
        }}
        src={taoMemoji}
      />
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
`;
const LogoStyled = styled(motion.h1)`
  color: ${(props) => props.theme.text};
  display: inline-block;
  font-family: "Dancing Script", cursive;
  top: 1rem;
  left: 2rem;
  position: fixed;
  z-index: 5;

  ${mediaQueries(40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
  `};
  ${mediaQueries(20)`
      font-size:1em;
      left:1rem;
      top:2rem;
  `};
`;
const Image = styled(motion.img)`
  width: 70px;
  height: 70px;
  position: fixed;
  left: 7rem;
  top: 1rem;
  z-index: 3;

  ${mediaQueries(40)`
  width: 40px;
  height: 40px;
   left: 4.5rem;
  top: 2.5rem;
  `};
  ${mediaQueries(20)`
  width: 30px;
  height: 30px;
   left: 3.5rem;
  top: 2.2rem;
  `};
`;
export default Logo;
