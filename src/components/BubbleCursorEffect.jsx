import { useEffect } from "react";
import { bubbleCursor } from "../components/utils/bubbleCursor";

const BubbleCursorEffect = () => {
  useEffect(() => {
    const cursor = bubbleCursor();

    return () => {
      cursor.destroy();
    };
  }, []);

  return null;
};

export default BubbleCursorEffect;
