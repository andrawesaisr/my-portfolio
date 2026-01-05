import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const MagneticButton = ({
  children,
  className = "",
  style = {},
  strength = 0.4,  // How strongly the element follows cursor (0-1)
  radius = 100,    // Distance in pixels where magnetic effect starts
  ...props
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Calculate distance from center
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Only apply effect within radius
    if (distance < radius) {
      setPosition({
        x: deltaX * strength,
        y: deltaY * strength
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 15,
        mass: 0.5
      }}
      className={className}
      style={{ display: "inline-block", ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
