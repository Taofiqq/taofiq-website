import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";
import { mediaQueries } from "./mediaQueries";
const Card = (props) => {
  const { id, name, description, tags, demo, github } = props.data;
  return (
    <Box key={id} variant={Item}>
      <Title>{name}</Title>
      <Description>{description} </Description>
      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}>{t}</Tag>;
        })}
      </Tags>
      <Footer>
        <Link to={{ pathname: `${demo}` }} target="_blank">
          Demo
        </Link>
        <Git to={{ pathname: `${github}` }} target="_blank">
          <SiGithub />
        </Git>
      </Footer>
    </Box>
  );
};

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: white;
  color: black;
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }

  ${mediaQueries(50)`
        width:16rem;
        margin-right:6rem;
        height:35vh;
       

  `};
  ${mediaQueries(40)`
        width:14rem;
        margin-right:4rem;
        height:35vh;
        
        

  `};
  ${mediaQueries(25)`
        width:12rem;
        margin-right:4rem;
        height:35vh;
padding:1.5rem 1.5rem;
        
        

  `};
  ${mediaQueries(20)`
        width:10rem;
        margin-right:4rem;
        height:40vh;

        
        

  `};
`;

const Title = styled.h2`
  font-size: calc(1em +0.5vw);
`;
const Description = styled.h2`
  font-size: calc(0.8em +0.5vw);
  font-weight: 500;

  ${mediaQueries(25)`
  font-size:calc(0.7em + 0.3vw);



  `};
  ${mediaQueries(20)`
  font-size:calc(0.6em + 0.3vw);



  `};
`;
const Tags = styled.div`
  border-top: 1px solid black;
  padding-top: 0.6rem;
  display: flex;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-top: 1px solid white;
    font-size: calc(0.8em + 0.3vw);
  }
`;
const Tag = styled.span`
  margin-right: 1rem;
  ${mediaQueries(25)`
  font-size:calc(0.7em);


  `};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled(NavLink)`
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0.5rem;
  font-size: calc(1em + 0.5vw);

  ${Box}:hover & {
    background-color: white;
    color: black;
  }
`;

const Git = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  font-size: calc(1em + 0.5vw);
  ${Box}:hover & {
    color: white;
  }
`;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "Inertia",
      duration: 0.5,
    },
  },
};
export default Card;
