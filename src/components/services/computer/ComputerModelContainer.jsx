import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { ComputerModel } from "./ComputerModel"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const ComputerModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback="loading...">
            <Stage environment="night" intensity={0.5}>
            <ComputerModel scale={[0.4, 0.4, 0.4]}/>
            </Stage>
            <OrbitControls enableZoom={true} autoRotate/>
            <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
        </Suspense>
    </Canvas>
  )
}

export default ComputerModelContainer