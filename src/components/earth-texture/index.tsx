'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

import earthTexture from '@/assets/earth/earth_texture.jpg';

function Earth() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [colorMap] = useLoader(THREE.TextureLoader, [earthTexture.src]);
  // 自轉動畫
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0005; // 控制旋轉速度
    }
  });

  return (
    <mesh ref={meshRef} scale={2}>
      <sphereGeometry args={[1, 1024, 1024]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

function Earth3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1.2} />
      <Earth />
      <OrbitControls enableZoom enablePan />
    </Canvas>
  );
}

export default Earth3D;
