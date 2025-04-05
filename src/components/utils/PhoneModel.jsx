import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";

function PhoneModel({ scrollPosition }) {
  // Calculate the visibility based on scroll position
  const showContactInfo = scrollPosition > 100;
  const textOpacity = Math.min(scrollPosition / 200, 1);

  return (
    <group>
      {/* Body of the phone - made more iPhone-like with rounded corners */}
      <mesh>
        <boxGeometry args={[1, 2, 0.1]} />
        <meshStandardMaterial color="#f5f5f7" metalness={0.2} roughness={0.2} />

        {/* Rounded corners effect through bevel */}
        <mesh position={[0, 0, 0.05]}>
          <boxGeometry args={[0.96, 1.96, 0.02]} />
          <meshStandardMaterial
            color="#f5f5f7"
            metalness={0.2}
            roughness={0.2}
          />
        </mesh>
      </mesh>
      {/* Screen - green color */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[0.85, 1.7]} />
        <meshStandardMaterial
          color="#000"
          emissive="#000"
          emissiveIntensity={0.2}
        />
      </mesh>
      Contact Information Text on the screen
      {showContactInfo && (
        <>
          <Text
            position={[0, 0.5, 0.07]}
            fontSize={0.09}
            color="white"
            anchorX="center"
            anchorY="middle"
            opacity={textOpacity}
            fontWeight="bold"
          >
            Contact Info
          </Text>

          <Text
            position={[0, 0.3, 0.07]}
            fontSize={0.06}
            color="white"
            anchorX="center"
            anchorY="middle"
            opacity={textOpacity}
          >
            sayoojt99@gmail.com
          </Text>

          <Text
            position={[0, 0.1, 0.07]}
            fontSize={0.06}
            color="white"
            anchorX="center"
            anchorY="middle"
            opacity={textOpacity}
          >
            +916238268561
          </Text>

          <Text
            position={[0, -0.2, 0.07]}
            fontSize={0.05}
            color="white"
            anchorX="center"
            anchorY="middle"
            opacity={textOpacity}
          >
            Let's connect!
          </Text>
        </>
      )}
      {/* Camera notch */}
      <mesh position={[0, 0.8, 0.07]}>
        <boxGeometry args={[0.2, 0.03, 0.01]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      {/* Home button (for older iPhone models) */}
      <mesh position={[0, -0.8, 0.07]}>
        <cylinderGeometry args={[0.08, 0.08, 0.01, 32]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      {/* Side buttons */}
      <mesh position={[0.52, 0.3, 0]}>
        <boxGeometry args={[0.02, 0.1, 0.03]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      <mesh position={[-0.52, 0.3, 0]}>
        <boxGeometry args={[0.02, 0.1, 0.03]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      <mesh position={[-0.52, 0.15, 0]}>
        <boxGeometry args={[0.02, 0.1, 0.03]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
    </group>
  );
}

export function Phone3D() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Canvas style={{ height: 500, width: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <spotLight position={[0, 0, 5]} intensity={0.8} />
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        autoRotate={scrollPosition > 50} // Start auto-rotation when scrolling
        autoRotateSpeed={scrollPosition > 150 ? 0 : 2} // Stop rotation when fully scrolled
      />
      <PhoneModel scrollPosition={scrollPosition} />
    </Canvas>
  );
}
