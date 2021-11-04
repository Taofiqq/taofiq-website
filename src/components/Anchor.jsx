import { useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "../data/BlogData";
import { SiChainlink } from "react-icons/si";

const AnchorComponent = () => {
  const ref = useRef(null);
  //   const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;
      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      let diffP = (diff * 100) / (bodyHeight - windowSize);
      ref.current.style.transform = `translateY(${-diffP}%)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container>
      <Slider ref={ref}>
        {[...Array(25)].map((x, i) => {
          return (
            <Link
              key={i}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        {/* <Anchor width={70} height={70} fill="currentColor" /> */}
        <SiChainlink className="draw" />
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);

  .chain {
    transform: rotate(135deg);
  }

  .draw {
    font-size: 3rem;
  }
`;

export default AnchorComponent;
