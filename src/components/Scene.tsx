import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GuiProvider from './GuiProvider';
import HauntedHouse from './HauntedHouse';
import Ghosts from './Ghosts';
import * as THREE from 'three'
import { Sky } from '@react-three/drei'

const Scene = () => {
  const sunPosition: [number, number, number] = [0.3, -0.038, -0.95]

    return (
      <GuiProvider>
        <Canvas
          camera={{ position: [4, 2, 5], fov: 75 }}
          shadows
          gl={{
            outputColorSpace: THREE.SRGBColorSpace,
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.0,
            shadowMapEnabled: true,
            shadowMapType: THREE.PCFSoftShadowMap
          }}
        >
          <ambientLight intensity={0.75} color={'#86cdff'}/>
          <directionalLight castShadow intensity={1.5} position={sunPosition} color={'#86cdff'}  
            shadow-mapSize-width={256}
            shadow-mapSize-height={256}
            shadow-camera-right={8}
            shadow-camera-left={-8}
            shadow-camera-top={8}
            shadow-camera-bottom={-8} 
            shadow-camera-near={1}
            shadow-camera-far={20}
          />
          
          <HauntedHouse />
          <Ghosts />
          <Sky
            sunPosition={sunPosition}
            distance={450000}
            turbidity={10}
            rayleigh={3}
            mieCoefficient={0.1}
            mieDirectionalG={0.95}
          />
  
          <OrbitControls enableDamping />
        </Canvas>
      </GuiProvider>
    );
  }
  
  export default Scene;
  