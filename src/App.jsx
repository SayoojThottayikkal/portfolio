import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "tailwindcss";
import AppRoute from "./routing/AppRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </>
  );
}
export default App;
