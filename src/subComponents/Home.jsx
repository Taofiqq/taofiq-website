import { BiHomeAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HomeButton = () => {
  return (
    <HomeButtonStyled>
      <NavLink to="/">
        <BiHomeAlt className="homeButton" />
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
  padding: 0.4rem;
  border: 1px solid black;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  &:hover {
    background: black;
    transition: all 0.3s ease-in;
  }

  .homeButton {
    font-size: 1.6rem;
    color: black;
    &:hover {
      color: white;
      transition: all 0.3s ease-in;
    }
  }
`;

export default HomeButton;
