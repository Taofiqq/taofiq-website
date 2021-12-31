import styled, { ThemeProvider } from "styled-components";
import { darkTheme, mediaQueries } from "./Theme";
import { BiLaptop, BiCodeAlt } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiMaterialui,
  SiChakraui,
  SiTailwindcss,
  SiMongodb,
  SiFastify,
  SiExpress,
  SiGraphql,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiCss3 } from "react-icons/di";
import Logo from "../subComponents/Logo";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import Home from "../subComponents/Home";
import ParticlesComponent from "../subComponents/Particles";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        key="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Logo />
        <SocialMediaIcons />
        <Home />
        <ParticlesComponent theme="darkTheme" />
        <Main>
          <Title>
            <BiCodeAlt /> FrontEnd
          </Title>

          <Description>
            <SkillContainer>
              <span>HTML</span>
              <AiFillHtml5 />
            </SkillContainer>
            <SkillContainer>
              <span>CSS</span>
              <DiCss3 />
            </SkillContainer>
            <SkillContainer>
              <span>Javascript</span>
              <IoLogoJavascript />
            </SkillContainer>
            <SkillContainer>
              <span>ReactJS</span>
              <FaReact />
            </SkillContainer>
            <SkillContainer>
              <span>NextJS</span>
              <SiNextdotjs />
            </SkillContainer>
            <SkillContainer>
              <span>Redux</span>
              <SiRedux />
            </SkillContainer>
            <SkillContainer>
              <span>Typescript</span>
              <SiTypescript />
            </SkillContainer>
            <SkillContainer>
              <span>Material-UI</span>
              <SiMaterialui />
            </SkillContainer>
            <SkillContainer>
              <span>Chakra-UI</span>
              <SiChakraui />
            </SkillContainer>
            <SkillContainer>
              <span>Tailwind</span>
              <SiTailwindcss />
            </SkillContainer>
            <SkillContainer>
              <span>GraphQL</span>
              <SiGraphql />
            </SkillContainer>
          </Description>
        </Main>
        <Main2>
          <Title>
            <BiLaptop /> Backend
          </Title>

          <Description2>
            <SkillContainer>
              <span>NodeJS</span>
              <FaNodeJs />
            </SkillContainer>
            <SkillContainer>
              <span>MongoDB</span>
              <SiMongodb />
            </SkillContainer>
            <SkillContainer>
              <span>Fastify</span>
              <SiFastify />
            </SkillContainer>
            <SkillContainer>
              <span>ExpressJS</span>
              <SiExpress />
            </SkillContainer>
            <SkillContainer>
              <span>GraphQL</span>
              <SiGraphql />
            </SkillContainer>
          </Description2>
        </Main2>

        {/* <BigTitle title="SKILLS" top="4%" leftt="4%" /> */}
        <BigTitle text="Skills" left="13%" top="-9%" />
      </Box>
    </ThemeProvider>
  );
};

const Box = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.body};

  ${mediaQueries(50)`
            flex-direction:column;    
            padding:8rem 0;
height:auto;
            &>*:nth-child(5){
              margin-bottom:5rem;
            }
    `};
`;

const Main = styled.div`
  margin-top: 5rem;
  color: black;
  background-color: white;
  padding: 3rem 2rem;
  width: 30vw;
  height: auto;
  z-index: 3;
  line-height: 1.5rem;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    color: white;
    background-color: #222831;
  }

  ${mediaQueries(60)`
            height: 55vh;
  `};

  ${mediaQueries(50)`
              width: 50vw;
              height: max-content;

  `};
`;
const Main2 = styled.div`
  margin-top: 5rem;
  color: white;
  background-color: #222831;
  padding: 2.5rem 2rem;
  width: 30vw;
  height: 65vh;
  z-index: 3;
  line-height: 1.5rem;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    color: black;
    background-color: white;
  }

  ${mediaQueries(60)`
            height: 55vh;
  `};

  ${mediaQueries(50)`
              width: 50vw;
              height: max-content;

  `};
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc (1em + 1vw);

  ${mediaQueries(60)`
          font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};
  ${Main}:hover & {
    & > * {
      color: white;
    }

    & > *:first-child {
      margin-right: 1rem;
    }
  }
`;
const Description = styled.div`
  color: black;
  font-size: calc (0.6em + 1vw);
  padding: 0.5rem 2rem;

  ${Main}:hover & {
    color: white;
  }

  ${mediaQueries(50)`
  font-size: calc(0.8em + 1vw);
  `};

  ${mediaQueries(30)`
  font-size:calc(0.7em + 1vw);
  `};

  ${mediaQueries(25)`font-size:calc(0.5em + 1vw)
  `};

  strong {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  ul {
    margin-left: 2rem;
  }
`;
const Description2 = styled.div`
  color: white;
  font-size: calc (0.6em + 1vw);
  padding: 0.5rem 2rem;

  ${Main2}:hover & {
    color: black;
  }

  ${mediaQueries(50)`
  font-size: calc(0.8em + 1vw);
  `};

  ${mediaQueries(30)`
  font-size:calc(0.7em + 1vw);
  `};

  ${mediaQueries(25)`font-size:calc(0.5em + 1vw)
  `};

  strong {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  ul {
    margin-left: 2rem;
  }
`;

const SkillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  span {
    /* margin-right: 2rem; */
  }
`;
export default Skills;
