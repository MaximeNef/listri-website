import { useState } from "react";
import Container from "../../../shared/composers/container";
import Image from "next/image";
import { motion } from "framer-motion";
import MyImage from "../../../shared/composers/myimage";
const OneServiceImg = ({ src }) => {
  return (
    <Container>
      <motion.div animate={{ scale: [0.7, 1] }} transition={{ duration: 1 }}>
        <MyImage source={src} w={400} h={450} />
        {/* <Image
          src={src}
          alt='Picture of the author'
          width={400}
          height={450}
          className=''
        />{" "} */}
      </motion.div>
    </Container>
  );
};
export default OneServiceImg;
