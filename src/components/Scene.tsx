import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GuiProvider from './GuiProvider';
import HauntedHouse from './HauntedHouse';

const Scene = () => {
    return (
      <GuiProvider>
        <Canvas
          camera={{ position: [4, 2, 5], fov: 75 }}
        //   style={{ width: '100vw', height: '100vh' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1.5} position={[3, 2, -8]} />
          
          <HauntedHouse />
  
          <OrbitControls enableDamping />
        </Canvas>
      </GuiProvider>
    );
  }
  
  export default Scene;
  