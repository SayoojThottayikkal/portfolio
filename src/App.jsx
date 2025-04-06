import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routing/AppRoute";
import BubbleCursorEffect from "./components/BubbleCursorEffect";
import "./App.css";
const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles container loaded:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#120229",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -10000,
          width: "100%",
          height: "100%",
          opacity: 0.3,
        }}
      />

      <BubbleCursorEffect />
      <div className="z-1 relative">
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
