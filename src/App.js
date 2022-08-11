import "./App.css";
import Nav from "./component/nav/Nav";
import Hero from "./component/hero/Hero";
import About from "./component/about/About";
import Project from "./component/project/Project";
import Contact from "./component/contact/Contact";
import Service from "./component/service/Service";
import Footer from "./component/footer/Footer";
// import Line from "./component/line/Line";
// import Player from "./component/videoPlayer/Player";
import "./fonts/Centauri.otf";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />

      <About />
      {/* <Player /> */}
      <Project />
      <Service />
      <Contact />
      {/* <Line /> */}
      <Footer />
    </div>
  );
}

export default App;
