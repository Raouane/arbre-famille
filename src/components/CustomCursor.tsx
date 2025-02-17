
import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);
  const [trailCount, setTrailCount] = useState(0);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add new trail point
      setTrailCount((prev) => prev + 1);
      setTrails((prevTrails) => [
        ...prevTrails,
        { x: e.clientX, y: e.clientY, id: trailCount },
      ].slice(-5)); // Keep only the last 5 trail points
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      setIsPointer(
        window.getComputedStyle(hoveredElement || document.body).cursor === 'pointer'
      );
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateCursorType);
    };
  }, [position, trailCount]);

  return (
    <>
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail animate-cursor-sparkle"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: 0.2 * (index + 1),
          }}
        />
      ))}
      <div
        className={`custom-cursor ${
          isPointer ? 'scale-125' : 'scale-100'
        }`}
        style={{
          backgroundImage: "url('/cursor-fox.png')",
          left: position.x - 16,
          top: position.y - 16,
        }}
      />
    </>
  );
};
