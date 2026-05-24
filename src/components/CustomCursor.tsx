"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener("mousemove", updatePosition);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (typeof window === "undefined") return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * {
          cursor: none !important;
        }
      `}} />
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 bg-[#4d87e0] rounded-full pointer-events-none z-[10000] shadow-[0_0_10px_#4d87e080]"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          opacity: hidden ? 0 : 1,
          scale: hidden ? 0.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
          mass: 0.5,
        }}
      />
    </>
  );
}
