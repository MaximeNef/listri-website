import Image from "next/image";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import { useState } from "react";
import MotionBottom from "../../../shared/composers/motion-textBottom";
import MyImage from "../../../shared/composers/myimage";

const OneServiceContent = ({ Contents }) => {
  return (
    <Container className='md:flex md:flex-row md:flex-wrap md:justify-start md:w-[100%] md:ml-[5vw]'>
      {Contents.map((content, id) => {
        return (
          <Container className='m-2 my-10 md:mx-32 ' key={id}>
            <MotionBottom
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.2 }}
            >
              <Flex
                type='col'
                justify='start'
                align='start'
                className='md:items-start'
              >
                <Container className=''>
                  <MyImage source={content.src} w={50} h={50} />
                </Container>
                <Flex justify='center' className=' text-left'>
                  <p className=' text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] font-medium text-[32px]'>
                    {content.title}
                  </p>
                </Flex>
              </Flex>
            </MotionBottom>
            <MotionBottom
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.5 }}
            >
              <Container className='text-left mt-6 text-[17px]  leading-7 md:max-w-[500px] md:mx-auto'>
                {content.text}
              </Container>
            </MotionBottom>
          </Container>
        );
      })}
    </Container>
  );
};
export default OneServiceContent;
