import { GeometryProps } from "@/lib";
import { useTexture } from "@react-three/drei";
import * as THREE from 'three'

const Bush= ({ position = [0, 0, 0], scale = [0, 0, 0] }: GeometryProps) => {
  const {
    map,
    aoMap,
    roughnessMap,
    metalnessMap,
    normalMap
  } = useTexture({
    map: './assets/bush/forest_leaves_03_1k/forest_leaves_03_diff_1k.jpg',
    normalMap: './assets/bush/forest_leaves_03_1k/forest_leaves_03_nor_gl_1k.jpg',
    aoMap: './assets/bush/forest_leaves_03_1k/forest_leaves_03_arm_1k.jpg',
    roughnessMap: './assets/bush/forest_leaves_03_1k/forest_leaves_03_arm_1k.jpg',
    metalnessMap: './assets/bush/forest_leaves_03_1k/forest_leaves_03_arm_1k.jpg',
  });

  map.colorSpace = THREE.SRGBColorSpace

  return (
    <mesh position={position} scale={scale} rotation={[-0.75, 0, 0]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        map={map}
        aoMap={aoMap}
        roughnessMap={roughnessMap}
        metalnessMap={metalnessMap}
        normalMap={normalMap}
        />
    </mesh>
  )
}
  export default Bush;
  