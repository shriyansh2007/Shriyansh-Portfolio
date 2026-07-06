import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Wireframe icosahedron acting as a stylised "signal node" — slowly
// rotates and gently reacts to pointer position for depth.
function SignalCore() {
  const meshRef = useRef()
  const groupRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.08
      meshRef.current.rotation.y = t * 0.12
    }
    if (groupRef.current) {
      const { pointer } = state
      groupRef.current.rotation.y += (pointer.x * 0.4 - groupRef.current.rotation.y) * 0.02
      groupRef.current.rotation.x += (-pointer.y * 0.3 - groupRef.current.rotation.x) * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      <Icosahedron ref={meshRef} args={[2.1, 1]}>
        <meshBasicMaterial color="#5eead4" wireframe transparent opacity={0.55} />
      </Icosahedron>
      <Icosahedron args={[2.1, 1]} scale={1.35}>
        <meshBasicMaterial color="#e8a33d" wireframe transparent opacity={0.12} />
      </Icosahedron>
    </group>
  )
}

// Ambient particle field — like noise on an oscilloscope screen.
function ParticleField() {
  const ref = useRef()
  const count = 900
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 16
    positions[i * 3 + 1] = (Math.random() - 0.5) * 16
    positions[i * 3 + 2] = (Math.random() - 0.5) * 16
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.015
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#5eead4"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  )
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <SignalCore />
        <ParticleField />
        <fog attach="fog" args={[new THREE.Color('#0a0e13'), 5, 12]} />
      </Suspense>
    </Canvas>
  )
}
