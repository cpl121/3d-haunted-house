import useGui from "@/hooks/useGui";
import { useTexture } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from 'three'

const Floor = () => {
  const gui = useGui()
  const [displacementScale, setDisplacementScale] = useState(0.25);
  const [displacementBias, setDisplacementBias] = useState(-0.075);

  const {
      map,
      alphaMap,
      aoMap,
      roughnessMap,
      normalMap,
      displacementMap
    } = useTexture({ 
    alphaMap: './assets/floor/alpha.jpg',
    normalMap: './assets/floor/Tiles088_1K-JPG/Tiles088_1K-JPG_NormalGL.jpg',
    displacementMap: './assets/floor/Tiles088_1K-JPG/Tiles088_1K-JPG_Displacement.webp',
    map: './assets/floor/Tiles088_1K-JPG/Tiles088_1K-JPG_Color.webp',
    aoMap: './assets/floor/Tiles088_1K-JPG/Tiles088_1K-JPG_AmbientOcclusion.webp',
    roughnessMap: './assets/floor/Tiles088_1K-JPG/Tiles088_1K-JPG_Roughness.webp',
  });

  map.colorSpace = THREE.SRGBColorSpace

  map.repeat.set(8,8)
  normalMap.repeat.set(8,8)
  displacementMap.repeat.set(8,8)
  aoMap.repeat.set(8,8)
  roughnessMap.repeat.set(8,8)

  map.wrapS = map.wrapT = THREE.RepeatWrapping
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping
  displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping
  aoMap.wrapS = aoMap.wrapT = THREE.RepeatWrapping
  roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping

    useEffect(() => {
      if (!gui) return
      const folder = gui.addFolder('Sphere')

      folder.add({ displacementScale }, 'displacementScale').min(0).max(1).step(0.001).name('floorDisplacementScale').onChange((value: number) => {
        setDisplacementScale(value)
      })
      folder.add({ displacementBias }, 'displacementBias').min(-1).max(1).step(0.001).name('floorDisplacementBias').onChange((value: number) => {
        setDisplacementBias(value)
      })
      folder.open()

  }, [gui])

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 20, 100, 100]} />
      <meshStandardMaterial 
        map={map}
        alphaMap={alphaMap}
        transparent
        aoMap={aoMap}
        roughnessMap={roughnessMap}
        metalness={0.25}
        normalMap={normalMap}
        displacementMap={displacementMap}
        displacementScale={displacementScale}
        displacementBias={displacementBias}
        />
    </mesh>
    );
  }
  
  export default Floor;
  