import { useState } from "react";
import Container from "../../../shared/composers/container";
import Image from "next/image";
import { motion } from "framer-motion";
const OneServiceImg = ({ src }) => {
  return (
    <Container>
      <motion.div animate={{ scale: [0.7, 1] }} transition={{ duration: 1 }}>
        <Image
          src={src}
          alt='Picture of the author'
          width={400}
          height={450}
          className=''
        />{" "}
      </motion.div>
    </Container>
  );
};
export default OneServiceImg;
