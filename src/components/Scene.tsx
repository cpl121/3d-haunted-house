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
          camera={{ position: [4, 2, 10], fov: 75 }}
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
          <ambientLight intensity={0.75} color="#445566" />
          <fog attach="fog" args={['#101520', 6, 15]} />

          <Moon />
          <HauntedHouse />
          <Ghosts />
  
          <OrbitControls 
            enableDamping 
            enablePan={false} 
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.05}  
            minDistance={7}
            maxDistance={14}
          />
        </Canvas>
      </GuiProvider>
    );
  }
  
  export default Scene;
  