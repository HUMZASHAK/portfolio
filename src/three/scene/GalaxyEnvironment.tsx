import Nebula from "../objects/Nebula";
import ParticleSystem from "../objects/ParticleSystem";
import Starfield from "../objects/Starfield";

export default function GalaxyEnvironment() {
  return (
    <>
      <Nebula />
      <ParticleSystem />
      <Starfield />
    </>
  );
}
