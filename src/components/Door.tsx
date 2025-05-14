import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three'

const Door = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  const {
    map,
    aoMap,
    roughnessMap,
    normalMap,
    metalnessMap,
    displacementMap,
  } = useTexture({
    map: './assets/door/wooden_garage_door_1k/wooden_garage_door_diff_1k.webp',
    normalMap: './assets/door/wooden_garage_door_1k/wooden_garage_door_nor_gl_1k.jpg',
    aoMap: './assets/door/wooden_garage_door_1k/wooden_garage_door_arm_1k.webp',
    metalnessMap: './assets/door/wooden_garage_door_1k/wooden_garage_door_arm_1k.webp',
    roughnessMap: './assets/door/wooden_garage_door_1k/wooden_garage_door_arm_1k.webp',
    displacementMap: './assets/door/wooden_garage_door_1k/wooden_garage_door_disp_1k.webp',
  });

  map.colorSpace = THREE.SRGBColorSpace

  map.repeat.set(1,2)
  normalMap.repeat.set(1,2)
  displacementMap.repeat.set(1,2)
  aoMap.repeat.set(1,2)
  roughnessMap.repeat.set(1,2)

  map.wrapS = map.wrapT = THREE.RepeatWrapping
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping
  displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping
  aoMap.wrapS = aoMap.wrapT = THREE.RepeatWrapping
  roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping

  return (
    <mesh position={[0, 1, 2 + 0.01]} ref={meshRef}>
       <group position={[0, 2.5, 0.1]}>
          <mesh position={[0, 0, -0.05]}>
            <boxGeometry args={[0.35, 0.4, 0.02]} />
            <meshStandardMaterial color="#333" metalness={0.7} roughness={0.4} />
          </mesh>

          <mesh position={[0, 0.075, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.2, 8]} />
            <meshStandardMaterial color="#222" metalness={1} roughness={0.3} />
          </mesh>

          <mesh position={[0, -0.025, 0.375]}>
            <cylinderGeometry args={[0.25, 0.25, 0.3, 16]} />
            <meshPhysicalMaterial
              color="#ffffff"
              transparent
              opacity={0.5}
              transmission={1}
              roughness={0.4}
              thickness={0.6}
            />
          </mesh>

          <mesh position={[0, -0.025, 0.375]}>
            <sphereGeometry args={[0.09, 32, 32]} />
            <meshStandardMaterial
              emissive="#ffaf38"
              emissiveIntensity={6}
              color="#ffaf38"
              toneMapped={false}
            />
          </mesh>
        </group>
      <pointLight position={[0, 2.45, 0.65]} intensity={10} color={'#ffaf38'} />
      <planeGeometry args={[2.2, 3.7, 20, 20]} />
      <meshStandardMaterial 
          normalScale={[2, 2]}
          map={map}
          aoMap={aoMap}
          roughnessMap={roughnessMap}
          normalMap={normalMap}
          metalnessMap={metalnessMap}
          transparent
          displacementMap={displacementMap}
          displacementScale={0.25}
          displacementBias={-0.085}
        />
    </mesh>
    );
  }
  
  export default Door;
  