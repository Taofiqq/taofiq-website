import { FcHome } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HomeButton = () => {
  return (
    <HomeButtonStyled>
      <NavLink to="/">
        <FcHome className="homeButton" />
      </NavLink>
    </HomeButtonStyled>
  );
};

const HomeButtonStyled = styled.button`
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
  }
`;

export default HomeButton;
