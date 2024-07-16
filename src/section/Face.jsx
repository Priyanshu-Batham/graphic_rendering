import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import ManFace from '../assets/models/ManFace'
import MovingLight from '../assets/Lights/MovingLight'

const Face = () => {
  return (
    <div className="bg-black h-screen w-screen overflow-hidden">
      <div className="max-w-[1200px] h-full m-auto flex flex-col gap-10">
        <div className="h-[700px]">
          <Canvas className="">
            {/* <OrbitControls /> */}
            <MovingLight />
            <ambientLight intensity={2} />
            <Suspense fallback={"Loading"}>
              {/* <Box position={[0, 0, 0]} /> */}
              {/* <Face /> */}
              <ManFace scale={[18, 18, 18]} position={[0, -3.5, 0]} />
            </Suspense>
          </Canvas>
        </div>

        <div>
          <h1 className="text-gray-300 text-center text-8xl font-bold">
            Imagine Yourself Here
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Face;
