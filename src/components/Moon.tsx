import { useTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three'

const Moon = () => {
  const moonPosition: [number, number, number] = [6, 10, -20]
  // const moonPosition: [number, number, number] = [0, 10, 0]

  const {
    map,
    aoMap,
    roughnessMap,
    normalMap,
    displacementMap
  } = useTexture({
    map: './assets/moon/Moon_002_basecolor.png',
    displacementMap: '/assets/moon/Moon_002_height.png',
    aoMap: './assets/moon/Moon_002_ambientOcclusion.png',
    normalMap: './assets/moon/Moon_002_normal.png',
    roughnessMap: './assets/moon/Moon_002_roughness.png',
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
          intensity={0.6}
          color="#aaccff"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={30}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <mesh ref={meshRef} position={moonPosition} rotation={[-0.75, 0, 0]}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            emissive="#ddeeff" emissiveIntensity={0.0275}
            transparent
            map={map}
            displacementMap={displacementMap}
            displacementScale={0.05}
            metalness={0.0}
            aoMap={aoMap}
            roughnessMap={roughnessMap}
            normalMap={normalMap}
            
            />
        </mesh>
      </>
    );
  }
  
  export default Moon;
  