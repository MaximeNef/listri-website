import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function MotionBottomCard({
  id,
  children,
  fitHeight,
  style,
  onClick,
  animate,
  initial,
  transition,
  variants,
}) {
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
        className='sm:hidden inline-flex'
      >
        {children}
      </motion.div>
    </>
  );
}
