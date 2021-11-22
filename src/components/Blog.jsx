import { useState, useEffect } from "react";
import styled from "styled-components";
import blogImg from "../resource/img/blog.jpeg";
import HomeButton from "../subComponents/Home";
import Logo from "../subComponents/Logo";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import { Blogs } from "../data/BlogData";
import BlogComponent from "./BlogComponents";
import AnchorComponent from "./Anchor";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
  transition: {
    staggerChildren: 0.5,
    duration: 0.5,
  },
};

const Blog = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);
  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Container>
        <Logo />
        <HomeButton />
        <SocialMediaIcons />
        <AnchorComponent numbers={numbers} />
        <Center>
          <Grid>
            {Blogs.map((blog) => {
              return <BlogComponent blog={blog} />;
            })}
          </Grid>
        </Center>

        <BigTitle text="BLOGS" top="1%" left="5%" />
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled(motion.div)`
  background-image: url(${blogImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: calc(1rem + 2vw);
`;
export default Blog;
