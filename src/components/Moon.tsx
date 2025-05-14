import { useTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three'

const Moon = () => {
  const moonPosition: [number, number, number] = [6, 10, -10]

  const {
    map,
    aoMap,
    roughnessMap,
    normalMap,
    displacementMap
  } = useTexture({
    map: './assets/moon/Moon_002_basecolor.webp',
    displacementMap: '/assets/moon/Moon_002_height.webp',
    aoMap: './assets/moon/Moon_002_ambientOcclusion.webp',
    normalMap: './assets/moon/Moon_002_normal.png',
    roughnessMap: './assets/moon/Moon_002_roughness.webp',
  });

  const meshRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    if (meshRef.current) {
      const geometry = meshRef.current.geometry
      geometry.setAttribute('uv2', geometry.attributes.uv)
    }
  }, [])

  map.colorSpace = THREE.SRGBColorSpace

  return (
    <>
      <directionalLight
          castShadow
          position={moonPosition}
          intensity={0.7}
          color="#aaccff"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={30}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <mesh ref={meshRef} position={moonPosition} rotation={[-0.3, 0, 0]}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            emissive="#ddeeff" emissiveIntensity={0.04}
            fog={false}
            transparent
            map={map}
            displacementMap={displacementMap}
            displacementScale={0.05}
            metalness={0.0}
            aoMap={aoMap}
            roughnessMap={roughnessMap}
            normalMap={normalMap}
            side={THREE.DoubleSide}
            />
        </mesh>
      </>
    );
  }
  
  export default Moon;
  