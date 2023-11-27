// Import necessary dependencies
import { useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useLoader, useThree } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

// Create a Text component
const Text = ({ children, ...props }: any) => {
  const { size = 1, color = '#000000', ...restProps } = props;

  const { camera } = useThree();

  // Load a font (you can replace 'path/to/your/font.json' with the actual path)
  const font = useLoader(FontLoader, '/fonts/KimjungchulGothic.json');

  // Calculate size based on camera position
  const calculatedSize = useMemo(() => {
    const distance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));
    return (size * distance) / 1000; // Adjust the divisor as needed
  }, [size, camera.position]);

  // Create text geometry
  const geometry = useMemo(() => {
    const textGeometry = new TextGeometry(children, {
      font,
      size: calculatedSize,
      height: 0.1, // Adjust as needed
      curveSegments: 12,
      bevelEnabled: false,
    });
    textGeometry.center();
    return textGeometry;
  }, [children, font, calculatedSize]);

  return (
    <mesh {...restProps} geometry={geometry}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Text;
