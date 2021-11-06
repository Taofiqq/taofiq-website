import styled from "styled-components";
import Particles from "react-particles-js";

import configLight from "../particlesjsconfig/particlesjs-config-light.json";
import configDark from "../particlesjsconfig/particlesjs-config.json";

const ParticlesComponent = (props) => {
  return (
    <Box>
      <Particles
        style={{ position: "absolute", top: 0 }}
        params={props.theme === "light" ? configLight : configDark}
      />
    </Box>
  );
};

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;
export default ParticlesComponent;
