import styled from "styled-components";
import taoMemoji from "../resource/img/taomemoji.png";
import { motion } from "framer-motion";
const Logo = (props) => {
  return (
    <Container
      initial={{
        x: -200,
        transition: { type: "spring", duration: 1.5, delay: 1 },
      }}
      animate={{
        x: 0,
        transition: { type: "spring", duration: 1.5, delay: 1 },
      }}
    >
      <LogoStyled click={props.click}>Taofiq</LogoStyled>
      <Image src={taoMemoji} />
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
`;
const LogoStyled = styled.h1`
  color: ${(props) => props.theme.text};
  /* color: ${(props) => (props.click ? "white" : "black")}; */
  display: inline-block;
  font-family: "Dancing Script", cursive;
  top: 1rem;
  left: 2rem;
  position: fixed;
  z-index: 5;
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
  position: fixed;
  left: 7rem;
  top: 1rem;
  z-index: 3;
`;
export default Logo;
