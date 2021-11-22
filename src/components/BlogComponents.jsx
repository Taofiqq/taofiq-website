import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};
const BlogComponent = ({ blog }) => {
  return (
    <Container variants={Item}>
      <BlogBox target="_blank" to={{ pathname: blog.link }}>
        <Image src={blog.imgSrc} />
        <Title>{blog.name}</Title>
        <Hashtags>
          {blog.tags.map((t, id) => {
            return <Hashtag key={id}>#{t}</Hashtag>;
          })}
        </Hashtags>
        <Date>{blog.date} </Date>
      </BlogBox>
    </Container>
  );
};

const Container = styled(motion.div)``;

const BlogBox = styled(motion(NavLink))`
  height: 20rem;
  padding: 1rem;
  text-decoration: none;
  width: calc(10rem + 15vw);
  color: black;
  border: 1px solid black;
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: white;
    background-color: black;
    transition: all 0.3s ease;
  }
`;

const Image = styled.img`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center;

  ${BlogBox}:hover & {
    border: 1px solid white;
  }
`;
const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-weight: 600;
  border-bottom: 1px solid black;

  ${BlogBox}:hover & {
    border-bottom: 1px solid white;
  }
`;

const Hashtags = styled.div`
  padding: 0.5rem 0;
`;
const Hashtag = styled.span`
  padding-right: 0.5rem;
`;
const Date = styled.span`
  padding: 0.5rem 0;
`;
export default BlogComponent;
