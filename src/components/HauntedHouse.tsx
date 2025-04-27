'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Timer } from 'three/addons/misc/Timer.js'
// import useGui from '@/hooks/useGui';

type BushGeometryProps = {
  position?: [number, number, number];
  scale?: [number, number, number];
}

const BushGeometry= ({ position = [0, 0, 0], scale = [0, 0, 0] }: BushGeometryProps) => {
  return (
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial />
    </mesh>
  )
}

const HauntedHouse = () => {
  const timer = new Timer()
  const ref = useRef<THREE.Mesh>(null);
  // const gui = useGui()

  // useEffect(() => {
  // if (!gui) return
  // const folder = gui.addFolder('Sphere')

  // folder.addColor(sphereValues, 'color').onChange((value: string) => {
  //   sphereMaterialRef.current?.color.set(value)
  // })
  // folder.open()

  // }, [gui])

  useFrame(({ }) => {

    // Timer
    timer.update()
  });

  return (
    <>
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial />
      </mesh>
      <group>
        <BushGeometry position={[0.8, 0.2, 2.2]} scale={[0.5, 0.5, 0.5]} />
        <BushGeometry position={[1.4, 0.1, 2.1]} scale={[0.25, 0.25, 0.25]} />
        <BushGeometry position={[-0.8, 0.1, 2.2]} scale={[0.4, 0.4, 0.4]} />
        <BushGeometry position={[-1, 0.05, 2.6]} scale={[0.15, 0.15, 0.15]} />
        <mesh position={[0, 1, 2 + 0.01]}>
          <planeGeometry args={[2.2, 2.2]} />
          <meshStandardMaterial />
        </mesh>
        <mesh position={[0, 3.25, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[3.5, 1.5, 4]} />
          <meshStandardMaterial />
        </mesh>
        <mesh position={[0, 1.25, 0]}>
          <boxGeometry args={[4, 2.5, 4]} />
          <meshStandardMaterial />
        </mesh>
      </group>
    </>
  );
}

export default HauntedHouse;
