import { NavLink } from "react-router-dom";
import { SiHashnode, SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import styled from "styled-components";
import { motion } from "framer-motion";

const SocialMediaIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <IconsWrapper
          target="_blank"
          to={{ pathname: "https://github.com/Taofiqq" }}
          click={props.click}
        >
          <SiGithub />
        </IconsWrapper>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
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
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <IconsWrapper
          target="_blank"
          to={{ pathname: "https://twitter.com/Taofiq__ " }}
          click={props.click}
        >
          <SiTwitter />
        </IconsWrapper>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <IconsWrapper
          target="_blank"
          to={{ pathname: "https://hashnode.com/@Taofiq" }}
          click={props.click}
        >
          <SiHashnode />
        </IconsWrapper>
      </motion.div>
      <Line
        click={props.click}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
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
  /* color: ${(props) => (props.click ? "white" : "black")}; */
  color: ${(props) => props.theme.text};
`;
const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  /* background-color: ${(props) => (props.click ? "#D9CAB3" : "black")}; */
  background-color: ${(props) => props.theme.text};
`;

export default SocialMediaIcons;
