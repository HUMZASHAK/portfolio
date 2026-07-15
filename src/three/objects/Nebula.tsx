import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type NebulaCloud = {
  position: [number, number, number];
  scale: number;
  color: string;
  opacity: number;
  speed: number;
};

export default function Nebula() {
  const groupRef = useRef<THREE.Group>(null);

  const clouds = useMemo<NebulaCloud[]>(() => [
    { position: [-7, 2.2, -10], scale: 5.8, color: "#4f46e5", opacity: 0.14, speed: 0.25 },
    { position: [7.8, -2.6, -11], scale: 4.7, color: "#0ea5e9", opacity: 0.16, speed: 0.17 },
    { position: [0.8, 6.2, -9.5], scale: 4.2, color: "#f472b6", opacity: 0.12, speed: 0.13 },
    { position: [-2.5, -5.7, -10.8], scale: 4.8, color: "#fb923c", opacity: 0.13, speed: 0.2 },
  ], []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.013;
      groupRef.current.rotation.x = Math.sin(delta * 0.3) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {clouds.map((cloud, index) => (
        <mesh key={index} position={cloud.position} scale={cloud.scale}>
          <sphereGeometry args={[1.3, 48, 48]} />
          <meshBasicMaterial color={cloud.color} transparent opacity={cloud.opacity} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}
