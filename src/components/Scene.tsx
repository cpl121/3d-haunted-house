import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GuiProvider from './GuiProvider';
import HauntedHouse from './HauntedHouse';

const Scene = () => {
    return (
      <GuiProvider>
        <Canvas
          camera={{ position: [4, 2, 5], fov: 75 }}
        >
          <ambientLight intensity={0.75} color={'#86cdff'}/>
          <directionalLight intensity={1.5} position={[3, 2, -8]} color={'#86cdff'} />
          
          <HauntedHouse />
  
          <OrbitControls enableDamping />
        </Canvas>
      </GuiProvider>
    );
  }
  
  export default Scene;
  