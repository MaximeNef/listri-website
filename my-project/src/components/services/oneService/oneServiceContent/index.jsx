import Image from "next/image";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import { useState } from "react";
import MotionBottom from "../../../shared/composers/motion-textBottom";

const OneServiceContent = ({ Contents }) => {
  return (
    <Container>
      {Contents.map((content, id) => {
        return (
          <Container className='m-2 my-10' key={id}>
            <MotionBottom
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.2 }}
            >
              <Flex type='col' justify='start' align='center' className=''>
                <Container className=''>
                  <Image
                    src={content.src}
                    alt='Picture of the author'
                    width={50}
                    height={50}
                    className='absolute'
                  />
                </Container>
                <Flex
                  justify='center'
                  className=' text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] font-medium text-[32px]'
                >
                  {content.title}
                </Flex>
              </Flex>
            </MotionBottom>
            <MotionBottom
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.5 }}
            >
              <Container className='text-left mt-6 text-[17px]  leading-7'>
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
