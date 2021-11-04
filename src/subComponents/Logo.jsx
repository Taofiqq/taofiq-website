import styled from "styled-components";
import taoMemoji from "../resource/img/taomemoji.png";
const Logo = (props) => {
  return (
    <Container>
      <LogoStyled click={props.click}>Taofiq</LogoStyled>
      <Image src={taoMemoji} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const LogoStyled = styled.h1`
  color: ${(props) => (props.click ? "#FDFCE5" : "black")};
  display: inline-block;
  font-family: "Dancing Script", cursive;
  top: 1rem;
  left: 2rem;
  position: fixed;
  z-index: 5;
`;
const Image = styled.img`
  width: 90px;
  height: 90px;
  position: fixed;
  left: 7rem;
  top: 0.5rem;
  z-index: 3;
`;
export default Logo;
