import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";
const BigTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  );
};

const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.2)`};
  font-size: calc(4rem + 4vw);
  z-index: 0;
  text-transform: uppercase;

  ${mediaQueries(30)`
  font-size: calc(3rem + 3vw);
  `};
`;
export default BigTitle;
