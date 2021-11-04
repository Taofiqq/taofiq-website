import styled from "styled-components";
import blogImg from "../resource/img/blog.jpg";
import HomeButton from "../subComponents/Home";
import Logo from "../subComponents/Logo";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import { Blogs } from "../data/BlogData";
import BlogComponent from "./BlogComponents";
import AnchorComponent from "./Anchor";

const Blog = () => {
  return (
    <MainContainer>
      <Container>
        <Logo />
        <HomeButton />
        <SocialMediaIcons />
        <AnchorComponent />
        <Center>
          <Grid>
            {Blogs.map((blog) => {
              return <BlogComponent blog={blog} />;
            })}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.div`
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
