import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Timer } from 'three/addons/misc/Timer.js'
import * as THREE from 'three'

const Ghosts= () => {
  const timer = new Timer()
  const ghosts1_ref = useRef<THREE.PointLight>(null)
  const ghosts2_ref = useRef<THREE.PointLight>(null)
  const ghosts3_ref = useRef<THREE.PointLight>(null)

  useFrame(({}) => {
    const elapsedTime = timer.getElapsed()

    if (ghosts1_ref.current) {
      const ghost1Angle = elapsedTime * 0.5
      ghosts1_ref.current.position.x = Math.cos(ghost1Angle) * 4
      ghosts1_ref.current.position.y = Math.sin(ghost1Angle) * Math.sin(ghost1Angle * 2.34) * Math.sin(ghost1Angle * 3.45)
      ghosts1_ref.current.position.z = Math.sin(ghost1Angle) * 4
    }
    if (ghosts2_ref.current) {
      const ghost2Angle = - elapsedTime * 0.38
      ghosts2_ref.current.position.x = Math.cos(ghost2Angle) * 5
      ghosts2_ref.current.position.y = Math.sin(ghost2Angle) * Math.sin(ghost2Angle * 2.34) * Math.sin(ghost2Angle * 3.45)
      ghosts2_ref.current.position.z = Math.sin(ghost2Angle) * 5
    }
    if (ghosts3_ref.current) {
      const ghost3Angle = elapsedTime * 0.23
      ghosts3_ref.current.position.x = Math.cos(ghost3Angle) * 6
      ghosts3_ref.current.position.y = Math.sin(ghost3Angle) * Math.sin(ghost3Angle * 2.34) * Math.sin(ghost3Angle * 3.45)
      ghosts3_ref.current.position.z = Math.sin(ghost3Angle) * 6
    }

    // Timer
    timer.update()
  });
 
  return (
    <>
      <pointLight ref={ghosts1_ref} castShadow intensity={6} color={'#8800ff'} 
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={10}
      />
      <pointLight ref={ghosts2_ref} castShadow intensity={6} color={'#ff0088'} 
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={10}
      />
      <pointLight ref={ghosts3_ref} castShadow intensity={6} color={'#ff0000'} 
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={10}
      />
    </>
  )
}
  export default Ghosts;
  