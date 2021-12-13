import { FcHome } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { mediaQueries } from "./mediaQueries";

const HomeButton = () => {
  return (
    <HomeButtonStyled
      initial={{
        y: -200,
        transition: { type: "spring", duration: 1.5, delay: 1 },
      }}
      animate={{
        y: 0,
        transition: { type: "spring", duration: 1.5, delay: 1 },
      }}
    >
      <NavLink to="/">
        <FcHome className="homeButton" />
      </NavLink>
    </HomeButtonStyled>
  );
};

const HomeButtonStyled = styled(motion.button)`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: transparent;
  border: none;
  padding: 0.4rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  .homeButton {
    font-size: 2rem;

    ${mediaQueries(40)`
    width:20px;
        height:20px;
  `};
  }

  ${mediaQueries(40)`
   width: 2rem;
  height: 2rem;
  top: 3rem;
  left: 45%;
  `};
  ${mediaQueries(40)`
  top: 2.5rem;
  left: 45%;
  `};
`;

export default HomeButton;
