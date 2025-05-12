import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GuiProvider from './GuiProvider';
import HauntedHouse from './HauntedHouse';
import Ghosts from './Ghosts';
import * as THREE from 'three'

const Scene = () => {
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
          <directionalLight castShadow intensity={1.5} position={[3, 2, -8]} color={'#86cdff'}  
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
  
          <OrbitControls enableDamping />
        </Canvas>
      </GuiProvider>
    );
  }
  
  export default Scene;
  