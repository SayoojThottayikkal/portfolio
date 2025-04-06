import { useEffect } from "react";
import { bubbleCursor } from "../components/utils/bubbleCursor";

const BubbleCursorEffect = () => {
  useEffect(() => {
    const cursor = bubbleCursor(); // Full body use, no options needed

    return () => {
      cursor.destroy(); // Clean up on unmount
    };
  }, []);

  return null; // It just adds a canvas directly to <body>
};

export default BubbleCursorEffect;
