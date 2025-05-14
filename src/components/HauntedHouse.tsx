'use client';

import { Grave, Floor, Bush, Wall, Door, Roof, Window } from '@/components';
import { GeometryProps } from '@/lib';

const HauntedHouse = () => {
  const gravesMapped: GeometryProps[] = new Array(30).fill({}).map(() => {
    // Coordinates
    const angle = Math.random() * Math.PI * 2;
    const radius = 3 + Math.random() * 4;
    const positionX = Math.sin(angle) * radius;
    const positionY = Math.random() * 0.4;
    const positionZ = Math.cos(angle) * radius;

    const rotationX = (Math.random() - 0.5) * 0.4;
    const rotationY = (Math.random() - 0.5) * 0.4;
    const rotationZ = (Math.random() - 0.5) * 0.4;

    return {
      position: [positionX, positionY, positionZ],
      rotation: [rotationX, rotationY, rotationZ],
    };
  });

  return (
    <>
      <Floor />
      <group>
        {gravesMapped.map((grave, index) => (
          <Grave key={'Grave' + (index + 1)} position={grave.position} rotation={grave.rotation} />
        ))}
      </group>
      <group>
        <Bush position={[1.2, 0.3, 2.2]} scale={[0.5, 0.5, 0.5]} />
        <Bush position={[1.8, 0.2, 2.1]} scale={[0.25, 0.25, 0.25]} />
        <Bush position={[-1.2, 0.2, 2.2]} scale={[0.4, 0.4, 0.4]} />
        <Bush position={[-1.4, 0.1, 2.6]} scale={[0.15, 0.15, 0.15]} />
        <Door />
        <Roof />
        <Wall />
        <Window />
      </group>
    </>
  );
};

export default HauntedHouse;
