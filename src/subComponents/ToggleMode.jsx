import styled from "styled-components";
import { BsFillSunFill, BsMoon } from "react-icons/bs";
const ToggleMode = ({ theme, setTheme }) => {
  const darkthemeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("dark");
  };
  const lightthemeToggle = () => {
    theme === "dark" ? setTheme("light") : setTheme("light");
  };
  return (
    <ButtonContainer>
      <LightModeButton onClick={() => lightthemeToggle()}>
        <BsFillSunFill />
      </LightModeButton>
      <DarkModeButton onClick={() => darkthemeToggle()}>
        <BsMoon />
      </DarkModeButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  position: fixed;
  top: 2rem;
  left: 70%;
  display: flex;
`;
const LightModeButton = styled.button`
  border: none;
  width: 3rem;
  outline: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background: transparent;
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
`;

const DarkModeButton = styled.button`
  border: none;
  width: 3rem;
  outline: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background: transparent;
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
`;

export default ToggleMode;
