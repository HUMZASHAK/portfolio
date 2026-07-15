import { Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type OrbitSystemProps = {
  radius: number;
  height?: number;
  color?: string;
  speed?: number;
  inclination?: number;
};

export default function OrbitSystem({ radius, height = 0.35, color = "#38bdf8", speed = 0.12, inclination = 0.2 }: OrbitSystemProps) {
  const groupRef = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    const values: THREE.Vector3[] = [];
    for (let i = 0; i <= 160; i += 1) {
      const t = (i / 160) * Math.PI * 2;
      values.push(new THREE.Vector3(Math.cos(t) * radius, Math.sin(t * 0.45) * height, Math.sin(t) * radius * inclination));
    }
    return values;
  }, [radius, height, inclination]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed;
    }
  });

  return (
    <group ref={groupRef}>
      <Line points={points} color={color} lineWidth={1} transparent opacity={0.22} />
    </group>
  );
}
