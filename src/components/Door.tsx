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
    map: './assets/door/wooden_garage_door_1k/wooden_garage_door_diff_1k.jpg',
    normalMap: './assets/door/wooden_garage_door_1k/wooden_garage_door_nor_gl_1k.jpg',
    aoMap: './assets/door/wooden_garage_door_1k/wooden_garage_door_arm_1k.jpg',
    metalnessMap: './assets/door/wooden_garage_door_1k/wooden_garage_door_arm_1k.jpg',
    roughnessMap: './assets/door/wooden_garage_door_1k/wooden_garage_door_arm_1k.jpg',
    displacementMap: './assets/door/wooden_garage_door_1k/wooden_garage_door_disp_1k.jpg',
  });

  map.colorSpace = THREE.SRGBColorSpace

  return (
    <mesh position={[0, 1, 2 + 0.01]} ref={meshRef}>
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
  