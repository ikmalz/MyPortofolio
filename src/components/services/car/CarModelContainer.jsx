import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CarModel } from "./CarModel"; 
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const CarModelContainer = () => { 
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
          <CarModel scale={[0.4, 0.4, 0.4]} />
        </Stage>
        <OrbitControls enableZoom={true} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default CarModelContainer;