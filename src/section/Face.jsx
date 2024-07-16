import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import ManFace from "../assets/models/ManFace";
import MovingLight from "../assets/Lights/MovingLight";
// import { Loader } from "@react-three/drei";
import Loader from "../components/Loader";

const Face = () => {
  return (
    <div className="bg-black h-screen w-screen overflow-hidden">
      <div className="max-w-[1200px] h-full m-auto flex flex-col gap-10">
        <div className="h-[700px]">
          <Suspense fallback={<Loader />}>
            <Canvas className="">
              <MovingLight />
              <ambientLight intensity={2} />
              <ManFace scale={[18, 18, 18]} position={[0, -3.5, 0]} />
            </Canvas>
          </Suspense>
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
