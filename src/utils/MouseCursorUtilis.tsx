"use client";
import React, { useState, useEffect } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

const UseMousePointer: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {cursorPosition && (
        <>
          <div
            className="mouseCursor cursor-outer"
            style={{
              transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
              visibility: "visible",
            }}
          ></div>
          <div
            className="mouseCursor cursor-inner"
            style={{
              transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
              visibility: "visible",
            }}
          ></div>
        </>
      )}
    </>
  );
};

export default UseMousePointer;
