import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const MovingLight = () => {
  const lightRef = useRef();

  useFrame((state) => {
    if (lightRef.current) {
      // Get the mouse position from state
      const { mouse } = state;
      console.log(mouse);
      console.log("Hello");
      // Convert mouse coordinates from [-1, 1] range to the appropriate range for your scene
      lightRef.current.position.x = mouse.x * 2; // Adjust the multiplier as needed
      lightRef.current.position.y = mouse.y * 2; // Adjust the multiplier as needed
    }
  });

  return (
    <spotLight
      ref={lightRef}
      position={[0, 0, 2.5]} // Initial position
      intensity={5}
      color="white"
    />
  );
};

export default MovingLight;
