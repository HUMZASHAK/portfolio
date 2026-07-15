import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import GalaxyEnvironment from "./GalaxyEnvironment";

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null);
  const { camera, pointer } = useThree();
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 5));

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.006;
      groupRef.current.position.x = pointer.x * 0.07;
      groupRef.current.position.y = -pointer.y * 0.05;
    }
    const nextTarget = new THREE.Vector3(0, 0, 5);
    cameraTarget.current.lerp(nextTarget, 0.06);
    camera.position.copy(cameraTarget.current);
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      <GalaxyEnvironment />
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="absolute inset-0 h-full w-full">
      <color attach="background" args={["#050816"]} />
      <fog attach="fog" args={["#050816", 8, 20]} />
      <ambientLight intensity={1.25} />
      <pointLight position={[6, 4, 6]} intensity={18} color="#38bdf8" />
      <pointLight position={[-8, -4, -6]} intensity={14} color="#8b5cf6" />
      <pointLight position={[2, -2, 2]} intensity={9} color="#f59e0b" />
      <Environment preset="night" />
      <SceneContent />
    </Canvas>
  );
}
