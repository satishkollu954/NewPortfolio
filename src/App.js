import { useState } from "react";
import "./App.css";
import Home from "./components/HomePage/HomePage";
import Navbar, { NavElements } from "./containers/Navbar/Navbar";
import About from "./containers/AboutPage/About";
import { Parallax } from "react-scroll-parallax";
import Skills from "./components/Skills/Skills";
import ThemeContext from "./themeContext";
import {
  BrowserRouter,
  useLocation,
  useParams,
  useResolvedPath,
} from "react-router-dom";
import Projects from "./containers/Projects/Projects";
import Contact from "./containers/Contact/Contact";
import Comments from "./containers/comments/comments";

function App() {
  const [addDiv, setAddDiv] = useState("light");
  const [homeback, setHomeback] = useState(true);
  const [navScroll, setNavScroll] = useState(false);
  return (
    <BrowserRouter>
      <ThemeContext.Provider
        value={{ addDiv, setAddDiv, navScroll, setNavScroll }}>
        <div className={`App ${addDiv}`}>
          <Navbar />
          {/* <NavElements /> */}
          <Home />
          <About />
          <Skills />
          <Projects />
          {/* <Comments /> */}
          <Contact />
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
