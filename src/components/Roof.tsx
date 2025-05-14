import { useTexture } from '@react-three/drei';
import * as THREE from 'three'

const Roof = () => {
  const {
    map,
    aoMap,
    roughnessMap,
    normalMap,
    alphaMap
  } = useTexture({
    map: './assets/roof/RoofingTiles014D_1K-JPG/RoofingTiles014D_1K-JPG_Color.webp',
    normalMap: './assets/roof/RoofingTiles014D_1K-JPG/RoofingTiles014D_1K-JPG_NormalGL.jpg',
    aoMap: './assets/roof/RoofingTiles014D_1K-JPG/RoofingTiles014D_1K-JPG_AmbientOcclusion.webp',
    roughnessMap: './assets/roof/RoofingTiles014D_1K-JPG/RoofingTiles014D_1K-JPG_Roughness.webp',
    alphaMap: './assets/roof/RoofingTiles014D_1K-JPG/RoofingTiles014D_1K-JPG_Opacity.webp'
  });

  map.colorSpace = THREE.SRGBColorSpace

  map.repeat.set(3,1)
  normalMap.repeat.set(3,1)
  aoMap.repeat.set(3,1)
  roughnessMap.repeat.set(3,1)
  alphaMap.repeat.set(3,1)

  map.wrapS = THREE.RepeatWrapping
  normalMap.wrapS = THREE.RepeatWrapping
  aoMap.wrapS = THREE.RepeatWrapping
  roughnessMap.wrapS = THREE.RepeatWrapping
  alphaMap.wrapS = THREE.RepeatWrapping

  return (
      <mesh position={[0, 3.2501, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[3.5, 1.5, 4]} />
        <meshStandardMaterial 
          transparent
          map={map}
          alphaMap={alphaMap}
          aoMap={aoMap}
          roughnessMap={roughnessMap}
          metalness={0.1}
          normalMap={normalMap}
          side={THREE.DoubleSide}
        />
      </mesh>
    );
  }
  
  export default Roof;
  