import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PcgamingModel } from "./PcgamingModel"; 
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const PcgamingModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
          <PcgamingModel scale={[0.4, 0.4, 0.4]} />
        </Stage>
        <OrbitControls enableZoom={true} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default PcgamingModelContainer;