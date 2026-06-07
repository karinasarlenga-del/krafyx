import { motion } from 'motion/react';
import React, { useRef, useState } from 'react';

export function MagneticButton({ 
  children, 
  className = '', 
  as: Component = 'button',
  ...props 
}: any) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={`transition-transform duration-300 ease-out hover:-translate-y-1 block ${className}`}
      style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
      {...props}
    >
      {children}
    </Component>
  );
}
