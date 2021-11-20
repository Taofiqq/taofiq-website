import GlobalStyle from "./globalStyles";
import { Route, Switch, useLocation } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
