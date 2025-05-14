const Window = () => {
  return (
    <>
      <group position={[2.025, 2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <mesh>
          <boxGeometry args={[1.85, 1.5, 0.05]} />
          <meshStandardMaterial color="#362210" roughness={0.9} metalness={0.2} />
        </mesh>

        {[-0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75].map((x, i) => (
          <mesh key={i} position={[x, 0, 0.07]}>
            <cylinderGeometry args={[0.04, 0.04, 1.45, 12]} />
            <meshStandardMaterial color="#111" metalness={0.6} roughness={0.6} />
          </mesh>
        ))}

        {[-0.25, 0.25].map((x, i) => (
          <mesh key={i} position={[x, 0, 0.08]}>
            <planeGeometry args={[0.85, 1.]} />
            <meshStandardMaterial
              color="#3d2c1e"
              roughness={0.85}
              metalness={0.1}
            />
          </mesh>
        ))}
      </group>
    </>
  );
};

export default Window;
