import { Html } from "@react-three/drei";
import { useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

type PlanetInfo = {
  label: string;
  subtitle: string;
  description: string;
};

type PlanetProps = {
  scale?: number;
  speed?: number;
  color?: string;
  emissive?: string;
  ringColor?: string;
  showRing?: boolean;
  position?: [number, number, number];
  label?: string;
  subtitle?: string;
  description?: string;
  onSelect?: (planet: PlanetInfo & { targetPosition: [number, number, number] }) => void;
  onHoverChange?: (hovered: boolean, planet: PlanetInfo) => void;
};

export default function Planet({
  scale = 1,
  speed = 0.35,
  color = "#38bdf8",
  emissive = "#0f172a",
  ringColor = "#8b5cf6",
  showRing = true,
  position = [0, 0, 0],
  label = "Planet",
  subtitle = "Discover",
  description = "A cosmic companion",
  onSelect,
  onHoverChange,
}: PlanetProps) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  const { camera, pointer } = useThree();

  const planetInfo = useMemo(
    () => ({ label, subtitle, description }),
    [description, label, subtitle],
  );
  const projected = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;

    projected.set(position[0], position[1], position[2]);
    projected.project(camera);
    const distance = Math.hypot(projected.x - pointer.x, projected.y - pointer.y);
    const proximity = Math.max(0, 1 - distance / 1.55);

    const desiredX = position[0] + (hovered ? 0.16 : 0) + (proximity > 0.02 ? pointer.x * 0.08 * proximity : 0);
    const desiredY = position[1] + (hovered ? 0.09 : 0) - (proximity > 0.02 ? pointer.y * 0.06 * proximity : 0);
    const desiredZ = position[2] + (hovered ? 0.08 : 0) + (proximity > 0.02 ? proximity * 0.03 : 0);

    group.position.x = THREE.MathUtils.damp(group.position.x, desiredX, 0.16, delta * 60);
    group.position.y = THREE.MathUtils.damp(group.position.y, desiredY, 0.16, delta * 60);
    group.position.z = THREE.MathUtils.damp(group.position.z, desiredZ, 0.16, delta * 60);

    group.rotation.y += delta * speed * (hovered ? 1.7 : 1.05 + proximity * 0.4);
    group.rotation.x = THREE.MathUtils.damp(group.rotation.x, hovered ? 0.16 : 0.04 + proximity * 0.03, 0.12, delta * 60);
    group.rotation.z = THREE.MathUtils.damp(group.rotation.z, hovered ? -0.08 : 0.02, 0.12, delta * 60);

    const targetScale = scale * (selected ? 1.15 : hovered ? 1.12 : 1 + proximity * 0.06);
    group.scale.setScalar(THREE.MathUtils.damp(group.scale.x, targetScale, 0.12, delta * 60));

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * (hovered ? 0.35 : 0.16);
      ringRef.current.scale.setScalar(THREE.MathUtils.damp(ringRef.current.scale.x, hovered ? 1.16 : 1, 0.12, delta * 60));
    }

    if (haloRef.current) {
      haloRef.current.scale.setScalar(THREE.MathUtils.damp(haloRef.current.scale.x, hovered ? 1.45 : 1.15 + proximity * 0.1, 0.12, delta * 60));
    }

    if (sphereRef.current) {
      const material = sphereRef.current.material as THREE.MeshPhysicalMaterial;
      material.emissiveIntensity = THREE.MathUtils.damp(material.emissiveIntensity ?? 0.8, hovered ? 1.7 : 0.9 + proximity * 0.3, 0.12, delta * 60);
    }
  });

  const handleHover = (value: boolean, event?: ThreeEvent<PointerEvent>) => {
    event?.stopPropagation();
    setHovered(value);
    onHoverChange?.(value, planetInfo);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("portfolio-cursor-mode", { detail: { mode: value ? "planet" : "default" } }));
    }
  };

  return (
    <group ref={groupRef}>
      <mesh ref={sphereRef} onPointerOver={(event) => handleHover(true, event)} onPointerOut={(event) => handleHover(false, event)} onClick={(event) => {
        event.stopPropagation();
        setSelected(true);
        onSelect?.({ ...planetInfo, targetPosition: position });
      }}>
        <sphereGeometry args={[1.1, 128, 128]} />
        <meshPhysicalMaterial
          color={color}
          emissive={emissive}
          roughness={0.24}
          metalness={0.12}
          clearcoat={1}
          clearcoatRoughness={0.12}
        />
      </mesh>

      <mesh ref={haloRef}>
        <sphereGeometry args={[1.22, 64, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.13} depthWrite={false} />
      </mesh>

      {showRing ? (
        <mesh ref={ringRef} rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[1.55, 0.025, 16, 140]} />
          <meshBasicMaterial color={ringColor} />
        </mesh>
      ) : null}

      {(hovered || selected) ? (
        <Html position={[0, 1.5, 0]} center distanceFactor={8} transform={false}>
          <div className="rounded-full border border-white/20 bg-slate-950/70 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-slate-100 shadow-[0_0_30px_rgba(34,211,238,0.24)] backdrop-blur">
            <div className="font-semibold text-cyan-200">{label}</div>
            <div className="mt-1 text-[8px] text-slate-400">{subtitle}</div>
          </div>
        </Html>
      ) : null}
    </group>
  );
}
