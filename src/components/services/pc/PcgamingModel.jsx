import { useGLTF } from '@react-three/drei'; 

export function PcgamingModel(props) {
  const { nodes, materials } = useGLTF('/pcgamingModel.glb');
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.003}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube_PC_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Cube_LightMat_0.geometry} material={materials.LightMat} />
            <mesh geometry={nodes.Cube_Screen_0.geometry} material={materials.Screen} />
            <mesh geometry={nodes.Cube_Keyboard_0.geometry} material={materials.Keyboard} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/pcgamingModel.glb'); // Preload model