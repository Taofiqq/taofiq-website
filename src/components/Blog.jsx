import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Theme";
import blogImg from "../resource/img/blog.jpeg";
import HomeButton from "../subComponents/Home";
import Logo from "../subComponents/Logo";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import { Blogs } from "../data/BlogData";
import BlogComponent from "./BlogComponents";
import AnchorComponent from "./Anchor";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";
import { mediaQueries } from "../subComponents/mediaQueries";
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
    <ThemeProvider theme={darkTheme}>
      <MainContainer
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Container>
          <Logo />
          <HomeButton />
          <SocialMediaIcons theme="light" />
          <AnchorComponent numbers={numbers} />
          <Center>
            <Grid>
              {Blogs.map((blog) => {
                return <BlogComponent blog={blog} />;
              })}
            </Grid>
          </Center>

          <BigTitle text="BLOGS" top="-10%" left="15%" />
        </Container>
      </MainContainer>
    </ThemeProvider>
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

  ${mediaQueries(30)`
    padding-top: 7rem;
    
  
  `};
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: calc(1rem + 2vw);

  ${mediaQueries(50)`
    grid-template-columns: 100%;

    
  
  `};
`;
export default Blog;
