import React, { Suspense } from "react";
import EarthModel from "../assets/models/Earth";
import MovingLight from "../assets/Lights/MovingLight";
import ManFace from "../assets/models/ManFace";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Earth = () => {
  return (
    <div className="h-screen w-screen realtive overflow-hidden">
      <div className="absolute w-[800px] mt-[300px]">
          <h1 className="text-center text-8xl font-bold">
            Our Earth
          </h1>
          <p className="text-2xl font-bold text-gray-600 text-center">In 360 degree view</p>
          <p className="text-2xl font-bold text-gray-600 text-center">
            You can rotate the earth by dragging your mouse
          </p>
    
      </div>
      <div className="h-full w-full translate-x-[35%]">
        <Canvas>
          <OrbitControls enableZoom={false} />

          <ambientLight intensity={3} />
          <Suspense fallback={"Loading"}>
            {/* <Face /> */}
            <EarthModel scale={[3, 3, 3]} position={[0, 0, 0]} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Earth;
