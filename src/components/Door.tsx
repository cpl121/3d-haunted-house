const Door = () => {
  return (
    <mesh position={[0, 1, 2 + 0.01]}>
      <planeGeometry args={[2.2, 2.2]} />
      <meshStandardMaterial />
    </mesh>
    );
  }
  
  export default Door;
  