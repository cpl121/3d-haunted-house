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

  return (
    <mesh position={[0, 1, 2 + 0.01]} ref={meshRef}>
      <pointLight position={[0, 1.35, 0.5]} intensity={5} color={'#ffaf38'} />
      <planeGeometry args={[2.2, 2.2, 100, 100]} />
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
  