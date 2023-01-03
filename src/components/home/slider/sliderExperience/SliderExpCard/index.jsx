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
  const svg = `<svg
  width="27"
  height="27"
  viewBox="0 0 27 27"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_1_8476)">
    <path
      d="M13.5 27C20.9566 27 27 20.9566 27 13.5C27 6.04336 20.9566 0 13.5 0C6.04336 0 0 6.04336 0 13.5C0 20.9566 6.04336 27 13.5 27ZM12.2344 18.1406V14.7656H8.85938C8.15801 14.7656 7.59375 14.2014 7.59375 13.5C7.59375 12.7986 8.15801 12.2344 8.85938 12.2344H12.2344V8.85938C12.2344 8.15801 12.7986 7.59375 13.5 7.59375C14.2014 7.59375 14.7656 8.15801 14.7656 8.85938V12.2344H18.1406C18.842 12.2344 19.4062 12.7986 19.4062 13.5C19.4062 14.2014 18.842 14.7656 18.1406 14.7656H14.7656V18.1406C14.7656 18.842 14.2014 19.4062 13.5 19.4062C12.7986 19.4062 12.2344 18.842 12.2344 18.1406Z"

      fill=white
    />
  </g>
  <defs>
    <clipPath id="clip0_1_8476">
      <rect width="27" height="27" fill="white" />
    </clipPath>
  </defs>
</svg>`;
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
      <div
        dangerouslySetInnerHTML={{
          __html: svg,
        }}
        className={`absolute bottom-[20px] z-30 right-[20px] ${
          popup == true ? "transform rotate-45 " : ""
        }`}
      />
    </Container>
  );
};
export default SliderExpCard;
