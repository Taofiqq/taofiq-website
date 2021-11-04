import styled from "styled-components";
const BlogComponent = ({ blog }) => {
  return (
    <BlogBox target="_blank" t0={{ pathname: blog.link }}>
      <Image src={blog.imgSrc} />
      <Title>{blog.name}</Title>
      <Hashtags>
        {blog.tags.map((t, id) => {
          return <Hashtag key={id}>#{t}</Hashtag>;
        })}
      </Hashtags>
      <Date>{blog.date} </Date>
    </BlogBox>
  );
};
const BlogBox = styled.div`
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
