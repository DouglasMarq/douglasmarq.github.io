import useParticles from "../../hooks/useParticles";
import * as Lib from "@tsparticles/react";

const Particles = () => {
  const { options } = useParticles();

  return (
    <Lib.Particles
      id="tsparticles"
      // @ts-ignore
      options={options}
    />
  );
};

export default Particles;
