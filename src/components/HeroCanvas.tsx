import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null!);
  const count = 1200;

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      // Accent color (warm red/orange) mixed with white
      const mix = Math.random();
      colors[i * 3] = 0.9 + mix * 0.1;       // R
      colors[i * 3 + 1] = 0.25 + mix * 0.5;  // G
      colors[i * 3 + 2] = 0.15 + mix * 0.5;  // B
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.04;
      meshRef.current.rotation.x = Math.sin(t * 0.02) * 0.1;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingRings() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.z = t * 0.08;
      group.current.rotation.x = Math.sin(t * 0.05) * 0.3;
    }
  });

  return (
    <group ref={group}>
      {[3.5, 5, 6.8].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / (2 + i * 0.5), i * 0.8, 0]}>
          <torusGeometry args={[r, 0.015, 16, 120]} />
          <meshBasicMaterial
            color={i === 0 ? "#e84b3a" : i === 1 ? "#c0392b" : "#5a7ab5"}
            transparent
            opacity={0.3 - i * 0.05}
          />
        </mesh>
      ))}
    </group>
  );
}

function WaveMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const geo = meshRef.current.geometry as THREE.PlaneGeometry;
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      pos.setZ(i, Math.sin(x * 0.5 + t * 0.8) * 0.2 + Math.cos(y * 0.5 + t * 0.6) * 0.15);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -3, -2]}>
      <planeGeometry args={[20, 12, 60, 40]} />
      <meshBasicMaterial
        color="#1a3a6e"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

const HeroCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <Particles />
      <FloatingRings />
      <WaveMesh />
    </Canvas>
  );
};

export default HeroCanvas;
