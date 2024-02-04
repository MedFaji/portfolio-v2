import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
