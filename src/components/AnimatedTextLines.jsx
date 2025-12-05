import React, { useRef } from "react";

function AnimatedTextLines({ text, className }) {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          className="block leading-relaxed tracking-wide text-pretty"
          ref={(el) => (lineRefs.current[index] = el)}
        >
          {line}
        </span>
      ))}
    </div>
  );
}

export default AnimatedTextLines;
