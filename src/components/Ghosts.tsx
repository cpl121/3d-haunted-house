'use client'

import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const Ghosts = () => {
  const ghost1Ref = useRef<THREE.Group>(null)
  const ghost2Ref = useRef<THREE.Group>(null)
  const ghost3Ref = useRef<THREE.Group>(null)

  const visibility = useRef(1)
  const nextSwitch = useRef(0)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

     if (t > nextSwitch.current) {
      visibility.current = Math.random() > 0.5 ? 1 : 0
      nextSwitch.current = t + 2 + Math.random() * 3
    }

    if (ghost1Ref.current) {
      const angle = t * 0.5
      ghost1Ref.current.position.set(
        Math.cos(angle) * 4,
        1 + Math.sin(angle * 3) * 0.5,
        Math.sin(angle) * 4
      )

      const ghost1Mesh = ghost1Ref.current?.children.filter((c) => c.type === 'Mesh') as THREE.Mesh[]
      for (let i = 0; i < ghost1Mesh.length; i++) {
        (ghost1Mesh[i].material as THREE.MeshPhysicalMaterial).opacity = visibility.current ? 0.3 : 0.0;
        (ghost1Mesh[i].material as THREE.MeshPhysicalMaterial).depthWrite = visibility.current === 1;
        (ghost1Mesh[i].material as THREE.MeshPhysicalMaterial).emissiveIntensity  = visibility.current ? 1 : 0;
      }
    }

    if (ghost2Ref.current) {
      const angle = -t * 0.38
      ghost2Ref.current.position.set(
        Math.cos(angle) * 5,
        1.2 + Math.sin(angle * 2.5) * 0.4,
        Math.sin(angle) * 5
      )

      const ghost2Mesh = ghost2Ref.current?.children.filter((c) => c.type === 'Mesh') as THREE.Mesh[]
      for (let i = 0; i < ghost2Mesh.length; i++) {
        (ghost2Mesh[i].material as THREE.MeshPhysicalMaterial).opacity = visibility.current ? 0.3 : 0.0;
        (ghost2Mesh[i].material as THREE.MeshPhysicalMaterial).depthWrite = visibility.current === 1;
        (ghost2Mesh[i].material as THREE.MeshPhysicalMaterial).emissiveIntensity  = visibility.current ? 1 : 0;
      }
    }

    if (ghost3Ref.current) {
      const angle = t * 0.23
      ghost3Ref.current.position.set(
        Math.cos(angle) * 6 + Math.sin(t * 0.7),
        1.5 + Math.sin(angle * 3.1) * 0.5,
        Math.sin(angle) * 6
      )

      const ghost3Mesh = ghost3Ref.current?.children.filter((c) => c.type === 'Mesh') as THREE.Mesh[]
      for (let i = 0; i < ghost3Mesh.length; i++) {
        (ghost3Mesh[i].material as THREE.MeshPhysicalMaterial).opacity = visibility.current ? 0.3 : 0.0;
        (ghost3Mesh[i].material as THREE.MeshPhysicalMaterial).depthWrite = visibility.current === 1;
        (ghost3Mesh[i].material as THREE.MeshPhysicalMaterial).emissiveIntensity  = visibility.current ? 1 : 0;
      }
    }
  })

  return (
    <>
      <group ref={ghost1Ref}>
        <pointLight
          castShadow
          color="#aaddff"
          shadow-mapSize-width={256}
          shadow-mapSize-height={256}
          shadow-camera-far={10}
          intensity={6}
          distance={4}
          decay={2}
        />

        <group>
          <mesh position={[0, 0.2, 0]}>
            <sphereGeometry args={[0.2, 8, 8]} />
            <meshPhysicalMaterial
            color="#aaddff"
            transmission={1}
            roughness={0.6}
            thickness={0.4}
            ior={1.1}
            transparent
            opacity={0.3}
          />
          </mesh>
          <mesh position={[0, -0.1, 0]}>
            <coneGeometry args={[0.15, 0.5, 5]} />
            <meshPhysicalMaterial
            color="#aaddff"
            transmission={1}
            roughness={0.6}
            thickness={0.4}
            ior={1.1}
            transparent
            opacity={0.3}
          />
          </mesh>
        </group>
      </group>

      <group ref={ghost2Ref}>
        <pointLight
          castShadow
          color="#44ddbb"
          shadow-mapSize-width={256}
          shadow-mapSize-height={256}
          shadow-camera-far={10}
          intensity={6}
          distance={4}
          decay={2}
        />
        <group>
          <mesh position={[0, 0.2, 0]}>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshPhysicalMaterial
            color="#44ddbb"
            transmission={1}
            roughness={0.6}
            thickness={0.4}
            ior={1.1}
            transparent
            opacity={0.3}
          />
          </mesh>
          <mesh position={[0, -0.1, 0]}>
            <coneGeometry args={[0.15, 0.5, 32]} />
            <meshPhysicalMaterial
            color="#44ddbb"
            transmission={1}
            roughness={0.6}
            thickness={0.4}
            ior={1.1}
            transparent
            opacity={0.3}
          />
          </mesh>
        </group>
      </group>

      <group ref={ghost3Ref}>
        <pointLight
          castShadow
          color="#9966ff"
          shadow-mapSize-width={256}
          shadow-mapSize-height={256}
          shadow-camera-far={10}
          intensity={6}
          distance={4}
          decay={2}
        />
        <group>
          <mesh position={[0, 0.2, 0]}>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshPhysicalMaterial
            color="#9966ff"
            transmission={1}
            roughness={0.6}
            thickness={0.4}
            ior={1.1}
            transparent
            opacity={0.3}
          />
          </mesh>
          <mesh position={[0, -0.1, 0]}>
            <coneGeometry args={[0.15, 0.5, 32]} />
            <meshPhysicalMaterial
            color="#9966ff"
            transmission={1}
            roughness={0.6}
            thickness={0.4}
            ior={1.1}
            transparent
            opacity={0.3}
          />
          </mesh>
        </group>
      </group>
    </>
  )
}

export default Ghosts
