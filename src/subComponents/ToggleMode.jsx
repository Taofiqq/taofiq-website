import styled from "styled-components";
import { BsFillSunFill, BsMoon } from "react-icons/bs";
import { motion } from "framer-motion";
import { mediaQueries } from "./mediaQueries";
const ToggleMode = ({ theme, setTheme }) => {
  const darkthemeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("dark");
  };
  const lightthemeToggle = () => {
    theme === "dark" ? setTheme("light") : setTheme("light");
  };
  return (
    <ButtonContainer
      initial={{
        y: -200,
        transition: { type: "spring", duration: 1.5, delay: 1 },
      }}
      animate={{
        y: 0,
        transition: { type: "spring", duration: 1.5, delay: 1 },
      }}
    >
      <LightModeButton onClick={() => lightthemeToggle()}>
        <BsFillSunFill />
      </LightModeButton>
      <DarkModeButton onClick={() => darkthemeToggle()}>
        <BsMoon />
      </DarkModeButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled(motion.div)`
  position: relative;
  display: flex;
`;
const LightModeButton = styled.button`
  position: absolute;
  top: 0.5rem;
  left: 66%;
  border: none;
  width: 3rem;
  outline: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background: transparent;
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  z-index: 10;

  ${mediaQueries(40)`
  font-size: .8rem;
  top: 1rem;
  left: 63%;
  `};

  ${mediaQueries(25)`
  font-size: .8rem;
  top: 1rem;
  left: 51%;
  `};
  ${mediaQueries(20)`
  font-size: .6rem;
  top: .6rem;
  left: 53%;
  `};
`;

const DarkModeButton = styled.button`
  position: absolute;
  top: 0.5rem;
  left: 71%;
  border: none;
  width: 3rem;
  outline: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background: transparent;
  color: ${(props) => props.theme.text};
  z-index: 10;
  font-size: 1.2rem;

  ${mediaQueries(40)`
  font-size: .8rem;
  top: 1rem;
  left: 68%;
  `};
  ${mediaQueries(25)`
  font-size: .8rem;
  top: 1rem;
  left: 57%;
  `};
  ${mediaQueries(20)`
  font-size: .6rem;
  top: .6rem;
  left: 59%;
  `};
`;

export default ToggleMode;
