import Container from "../../../shared/composers/container";
import { useState } from "react";
import MotionBottom from "../../../shared/composers/motion-textBottom";
const OneServiceTitle = ({ title, description }) => {
  return (
    <Container className='md:max-w-[500px] md:mx-auto'>
      <MotionBottom
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.2 }}
      >
        <Container className='text-center  my-6'>
          <h1 className='font-medium text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
            {title}
          </h1>
        </Container>
      </MotionBottom>
      <MotionBottom
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.5 }}
      >
        <Container className='  p-[18px] text-center font-light  leading-6 text-[17px]'>
          {description}
        </Container>{" "}
      </MotionBottom>
    </Container>
  );
};
export default OneServiceTitle;
