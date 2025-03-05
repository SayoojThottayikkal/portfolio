import "./App.css";
import "tailwindcss";
import Header from "./components/Header";
import Spotlight from "./pages/Spotlight";
import Experience from "./pages/Experience";
import Skill from "./pages/Skill";
function App() {
  return (
    <>
      <Header />
      <Spotlight />
      <Experience />
      <Skill />
    </>
  );
}
export default App;
