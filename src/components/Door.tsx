import { useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from 'three'

const Door = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  const {
    map,
    aoMap,
    roughnessMap,
    normalMap,
    metalnessMap
  } = useTexture({
    map: './assets/door/large_castle_door_1k/large_castle_door_diff_1k.jpg',
    aoMap: './assets/door/large_castle_door_1k/large_castle_door_ao_1k.jpg',
    normalMap: './assets/door/large_castle_door_1k/large_castle_door_nor_gl_1k.jpg',
    roughnessMap: './assets/door/large_castle_door_1k/large_castle_door_rough_1k.jpg',
    metalnessMap: './assets/door/large_castle_door_1k/large_castle_door_metal_1k.jpg'
  });

  map.colorSpace = THREE.SRGBColorSpace

  // map.repeat.set(3,1)
  // normalMap.repeat.set(3,1)
  // aoMap.repeat.set(3,1)
  // roughnessMap.repeat.set(3,1)

  useEffect(() => {
    if (meshRef.current) {
      const geometry = meshRef.current.geometry;
      geometry.setAttribute('uv2', geometry.attributes.uv);
    }
  }, []);

  return (
    <mesh position={[0, 1, 2 + 0.01]} ref={meshRef}>
      <planeGeometry args={[2.2, 2.2, 100, 100]} />
      <meshStandardMaterial 
          normalScale={[1.5, 1.5]}
          map={map}
          aoMap={aoMap}
          roughnessMap={roughnessMap}
          normalMap={normalMap}
          metalnessMap={metalnessMap}
          transparent
        />
    </mesh>
    );
  }
  
  export default Door;
  