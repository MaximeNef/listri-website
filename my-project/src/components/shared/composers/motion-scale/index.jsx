import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function MotionScale({
  id,
  children,
  fitHeight,
  style,
  onClick,
  animate,
  initial,
  transition,
}) {
  const variants = {
    hidden: { opacity: 0.5, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        onClick={onClick}
        id={id}
        style={{
          ...(fitHeight && { height: "fit-content" }),
          ...style,
        }}
        initial={initial}
        animate={controls}
        transition={transition}
        variants={variants}
      >
        {children}
      </motion.div>
    </>
  );
}
