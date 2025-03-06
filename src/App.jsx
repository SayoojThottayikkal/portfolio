import "./App.css";
import "tailwindcss";
import Header from "./components/Header";
import Spotlight from "./pages/Spotlight";
import Experience from "./pages/Experience";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
function App() {
  return (
    <>
      <Header />
      <Spotlight />
      <Experience />
      <Skill />
      <Project />
    </>
  );
}
export default App;
