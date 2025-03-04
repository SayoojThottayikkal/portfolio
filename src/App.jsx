import "./App.css";
import "tailwindcss";
import Header from "./components/Header";
import Spotlight from "./pages/Spotlight";
import Experience from "./pages/Experience";
function App() {
  return (
    <>
      <Header />
      <Spotlight />
      <Experience />
    </>
  );
}
export default App;
