import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GuiProvider from './GuiProvider';
import HauntedHouse from './HauntedHouse';
import Ghosts from './Ghosts';
import Moon from './Moon';
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
          <color attach="background" args={['#0a0a0f']} />
          <ambientLight intensity={0.2} color="#8899aa" />
          

          <Moon />
          <HauntedHouse />
          <Ghosts />
  
          <OrbitControls enableDamping />
        </Canvas>
      </GuiProvider>
    );
  }
  
  export default Scene;
  