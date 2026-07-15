import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type StarLayer = {
  count: number;
  size: number;
  color: string;
  opacity: number;
  spread: number;
  speed: number;
};

type ShootingStar = {
  id: number;
  start: [number, number, number];
  end: [number, number, number];
  speed: number;
};

export default function Starfield() {
  const groupRef = useRef<THREE.Group>(null);
  const materialRefs = useRef<THREE.PointsMaterial[]>([]);
  const cometRefs = useRef<THREE.Mesh[]>([]);

  const layers = useMemo<StarLayer[]>(() => [
    { count: 9000, size: 0.025, color: "#f8fafc", opacity: 0.92, spread: 74, speed: 0.45 },
    { count: 6000, size: 0.043, color: "#38bdf8", opacity: 0.78, spread: 68, speed: 0.7 },
    { count: 3200, size: 0.062, color: "#f0abfc", opacity: 0.6, spread: 60, speed: 0.95 },
  ], []);

  const shootingStars = useMemo<ShootingStar[]>(() => [
    { id: 1, start: [-24, 12, -40], end: [26, -8, 12], speed: 0.74 },
    { id: 2, start: [18, 8, -34], end: [-20, -4, 10], speed: 0.56 },
    { id: 3, start: [-10, 16, -46], end: [14, -5, 18], speed: 0.9 },
  ], []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.006;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.03;
    }

    materialRefs.current.forEach((material, index) => {
      if (material) {
        const layer = layers[index];
        material.opacity = layer.opacity * (0.8 + Math.sin(state.clock.elapsedTime * layer.speed) * 0.16);
      }
    });

    cometRefs.current.forEach((mesh, index) => {
      if (!mesh) return;
      const star = shootingStars[index];
      const elapsed = (state.clock.elapsedTime * star.speed + index * 1.35) % 8;
      const progress = Math.max(0, Math.min(1, elapsed / 4));
      const x = star.start[0] + (star.end[0] - star.start[0]) * progress;
      const y = star.start[1] + (star.end[1] - star.start[1]) * progress;
      const z = star.start[2] + (star.end[2] - star.start[2]) * progress;
      mesh.position.set(x, y, z);
      mesh.visible = progress > 0.02 && progress < 0.98;
      mesh.scale.setScalar(0.8 + Math.sin(state.clock.elapsedTime * 5 + index) * 0.15);
    });
  });

  return (
    <group ref={groupRef}>
      {layers.map((layer, index) => {
        const positions = new Float32Array(layer.count * 3);
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] = (Math.random() - 0.5) * layer.spread;
          positions[i + 1] = (Math.random() - 0.5) * layer.spread;
          positions[i + 2] = (Math.random() - 0.5) * layer.spread * 1.1;
        }

        return (
          <points key={index}>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial
              ref={(material) => {
                if (material) materialRefs.current[index] = material;
              }}
              size={layer.size}
              color={layer.color}
              sizeAttenuation
              transparent
              opacity={layer.opacity}
              depthWrite={false}
            />
          </points>
        );
      })}

      {shootingStars.map((star, index) => (
        <mesh key={star.id} ref={(node) => {
          if (node) cometRefs.current[index] = node;
        }} position={star.start}>
          <boxGeometry args={[0.02, 0.02, 0.8]} />
          <meshBasicMaterial color="#f8fafc" transparent opacity={0.95} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}
