import { GeometryProps } from "@/lib";
import { useTexture } from "@react-three/drei";
import * as THREE from 'three'

const Grave = ({ position = [0, 0, 0], scale = [1, 1, 1], rotation = [0, 0, 0]  }: GeometryProps) => {
  const {
    map,
    aoMap,
    roughnessMap,
    normalMap
  } = useTexture({
    map: './assets/grave/Rock015_1K-JPG/Rock015_1K-JPG_Color.webp',
    normalMap: './assets/grave/Rock015_1K-JPG/Rock015_1K-JPG_NormalGL.jpg',
    aoMap: './assets/grave/Rock015_1K-JPG/Rock015_1K-JPG_AmbientOcclusion.webp',
    roughnessMap: './assets/grave/Rock015_1K-JPG/Rock015_1K-JPG_Roughness.webp',
  });

  map.colorSpace = THREE.SRGBColorSpace

  
  map.repeat.set(0.3,0.4)
  normalMap.repeat.set(0.3,0.4)
  aoMap.repeat.set(0.3,0.4)
  roughnessMap.repeat.set(0.3,0.4)
  
  return (
      <mesh position={position} scale={scale} rotation={rotation} castShadow receiveShadow>
        <boxGeometry args={[0.6, 0.8, 0.2]} />
        <meshStandardMaterial 
          map={map}
          aoMap={aoMap}
          roughnessMap={roughnessMap}
          normalMap={normalMap}
          metalness={0}
        />
      </mesh>
    );
  }
  
  export default Grave;
  