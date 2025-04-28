import { useTexture } from '@react-three/drei';
import * as THREE from 'three'

const Wall = () => {
  const {
    map,
    aoMap,
    roughnessMap,
    normalMap
  } = useTexture({
    map: './assets/wall/PaintedPlaster010_1K/PaintedPlaster010_1K-JPG_Color.jpg',
    normalMap: './assets/wall/PaintedPlaster010_1K/PaintedPlaster010_1K-JPG_NormalGL.jpg',

    aoMap: './assets/wall/PaintedPlaster010_1K/PaintedPlaster010_1K-JPG_AmbientOcclusion.jpg',
    roughnessMap: './assets/wall/PaintedPlaster010_1K/PaintedPlaster010_1K-JPG_Roughness.jpg',
  });

  map.colorSpace = THREE.SRGBColorSpace

  return (
    <mesh position={[0, 1.25, 0]}>
      <boxGeometry args={[4, 2.5, 4]} />
      <meshStandardMaterial 
        map={map}
        aoMap={aoMap}
        roughnessMap={roughnessMap}
        normalMap={normalMap}
        metalness={0.5}
        />
    </mesh>
    );
  }
  
  export default Wall;
  