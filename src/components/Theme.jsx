export const lightTheme = {
  body: "#FDEFEF",
  text: "#000000",
  fontFamily: "'Work Sans', sans-serif",
  bodyRgba: "252, 246, 244",
  textRgba: "0,0,0",
};
export const darkTheme = {
  body: "#071C21",
  text: "white",
  fontFamily: "'Work Sans', sans-serif",
  textRgba: "252, 246, 244",
  bodyRgba: "0,0,0",
};

export const breakpoints = {
  sm: 20, //em
  md: 30,
  lg: 45,
  xl: 60,
  xxl: 75,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${key}em) { ${style} }`;
};
