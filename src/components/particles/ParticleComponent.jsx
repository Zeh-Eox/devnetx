import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { particlesColors } from "../../utils";

const ParticleComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Engine Loaded");
  };

  const options = useMemo(
    () => ({
      key: "bubble",
      name: "Bubble",
      particles: {
        number: {
          value: 9,
          density: {
            enable: true,
          },
        },
        color: {
          value: particlesColors.particle,
        },
        shape: {
          type: "polygon",
          options: {
            polygon: {
              sides: 6,
            },
          },
        },
        opacity: {
          value: {
            min: 0.3,
            max: 0.5,
          },
        },
        size: {
          value: {
            min: 50,
            max: 80,
          },
        },
        links: {
          enable: false,
          distance: 200,
          color: particlesColors.black,
          opacity: 1,
          width: 2,
        },
        move: {
          enable: true,
          speed: 8,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          onClick: {
            enable: false,
            mode: "push",
          },
        },
        modes: {
          grab: {
            distance: 400,
            links: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            duration: 2,
            size: 20,
            opacity: 0.8,
            mix: true,
          },
          repulse: {
            distance: 200,
          },
          push: {
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
        },
      },
      background: {
        color: particlesColors.background,
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticleComponent;
