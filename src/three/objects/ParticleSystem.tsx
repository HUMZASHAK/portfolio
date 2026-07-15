import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleSystem() {
  const pointsRef = useRef<THREE.Points>(null);

  const data = useMemo(() => {
    const count = 2600;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const palette = [
      [0.95, 0.97, 1],
      [0.24, 0.73, 0.96],
      [0.56, 0.27, 0.96],
      [0.98, 0.58, 0.12],
      [0.97, 0.47, 0.72],
      [0.14, 0.95, 0.84],
    ];

    for (let i = 0; i < count; i += 1) {
      const radius = 18 + Math.random() * 24;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi) * 0.65;
      const z = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const [r, g, b] = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
    }

    return { positions, colors };
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.006;
      pointsRef.current.rotation.x += delta * 0.0015;
    }
  });

  return (
    <points ref={pointsRef} frustumCulled>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[data.positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[data.colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} transparent opacity={0.95} vertexColors depthWrite={false} sizeAttenuation />
    </points>
  );
}
