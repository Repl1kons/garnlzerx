"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text, Environment, Float, Sphere, Box } from "@react-three/drei"
import type * as THREE from "three"

function FloatingCode() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Box ref={meshRef} args={[1, 1, 1]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#3B82F6" transparent opacity={0.8} />
      </Box>
    </Float>
  )
}

function FloatingTech({ position, color, text }: { position: [number, number, number]; color: string; text: string }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        <Sphere args={[0.3]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
        </Sphere>
        <Text font="/fonts/Inter-Bold.ttf" fontSize={0.2} position={[-0.5, 0, 0]}>
          {text}
          <meshStandardMaterial color="white" />
        </Text>
      </group>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} />

      <FloatingCode />
      <FloatingTech position={[-2, 1, 0]} color="#10B981" text="API" />
      <FloatingTech position={[0, -1, 2]} color="#8B5CF6" text="DB" />
      <FloatingTech position={[-1, 0, -2]} color="#F59E0B" text="JWT" />

      <Environment preset="night" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  )
}

export function ThreeComponents() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Scene />
    </Canvas>
  )
}
