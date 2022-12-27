import { useState } from "react";
import Container from "../../../../shared/composers/container";
import MotionBottomCard from "../../../../shared/composers/motion- bottomcard";
import MyImage from "../../../../shared/composers/myimage";
import { motion, useAnimation } from "framer-motion";
const SliderExpCard = ({ etape }) => {
  const [popup, setpopup] = useState(false);
  const slideUpMotion = {
    visible: {
      y: 0,
      transition: {
        stiffness: 600,
      },
    },
    hidden: {
      y: 500,
      transition: {
        stiffness: 600,
      },
    },
  };

  return (
    <Container
      className=' snap-center flex-shrink-0  relative h-[450px] w-[309px] mr-5'
      onClick={() => {
        setpopup((popup) => !popup);
      }}
    >
      <Container className='p-[25px] text-white bg-[#252525]/20 rounded-[18px]  w-full h-full z-10  '>
        {popup ? (
          <motion.div
            initial='hidden'
            animate='visible'
            variants={slideUpMotion}
            className=' font-bold text-[19px] tracking-[0.23px] leading-[25px] bg-gradient-to-b from-darkBlue/0 to-darkBlue absolute top-0 left-0 h-full w-full  rounded-[18px]'
          >
            <p className='m-[28px] mt-[130px] '>{etape.description}</p>
          </motion.div>
        ) : (
          <></>
        )}
        <p className=' font-bold text-[12px] tracking-[-0.12px] leading-[16px] z-20'>
          {etape.text}
        </p>
        <p className='mt-[13px] font-bold text-[19px] tracking-[0.23px] leading-[25px] z-20'>
          {etape.title}
        </p>
      </Container>

      <MyImage
        source={etape.img}
        layout={"fill"}
        objectFit={"cover"}
        className='rounded-[18px]'
      />
    </Container>
  );
};
export default SliderExpCard;
