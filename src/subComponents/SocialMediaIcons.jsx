import { NavLink } from "react-router-dom";
import { SiHashnode, SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import styled from "styled-components";

const SocialMediaIcons = (props) => {
  return (
    <Icons>
      <div>
        <IconsWrapper
          target="_blank"
          to={{ pathname: "https://github.com/Taofiqq" }}
          click={props.click}
        >
          <SiGithub />
        </IconsWrapper>
      </div>
      <div>
        <IconsWrapper
          target="_blank"
          to={{
            pathname:
              "https://www.linkedin.com/in/taofiq-aiyelabegan-6241a1139/",
          }}
          click={props.click}
        >
          <SiLinkedin />
        </IconsWrapper>
      </div>
      <div>
        <IconsWrapper
          target="_blank"
          to={{ pathname: "https://twitter.com/Taofiq__ " }}
          click={props.click}
        >
          <SiTwitter />
        </IconsWrapper>
      </div>
      <div>
        <IconsWrapper
          target="_blank"
          to={{ pathname: "https://hashnode.com/@Taofiq" }}
          click={props.click}
        >
          <SiHashnode />
        </IconsWrapper>
      </div>
      <Line click={props.click}/>
    </Icons>
  );
};

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 2.4rem;
  bottom: 0;
  z-index: 3;
  font-size: 1.3rem;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;
const IconsWrapper = styled(NavLink)`
  color: ${(props) => (props.click ? "white" : "black")};
`;
const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => (props.click ? "#D9CAB3" : "black")}; ;
`;

export default SocialMediaIcons;
