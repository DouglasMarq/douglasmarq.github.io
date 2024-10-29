import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { loadParticlesLinksInteraction } from "@tsparticles/interaction-particles-links";
import { ISourceOptions } from "tsparticles-engine";

const useParticles = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine, false);
      await loadParticlesLinksInteraction(engine);
      await engine.refresh(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 120,
          enable: true,
          opacity: 0.4,
          width: 0.8,
        },
        move: {
          direction: "none",
          enable: true,
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          value: 80,
        },
        size: {
          value: 1,
        },
      },
    }),
    []
  );

  return {
    options,
  };
};

export default useParticles;
