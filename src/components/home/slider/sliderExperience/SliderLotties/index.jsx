import Container from "../../../../shared/composers/container";
import MyImage from "../../../../shared/composers/myimage";
import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "react-lottie";
import burgerMenu from "./../../../../../../public/rocket.json";
const SliderLotties = () => {
  const [animationVisible, setAnimationVisible] = useState(false);
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setAnimationVisible(true);
    }
  }, [inView]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: burgerMenu,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      data-aos='fade-in'
      data-aos-offset='100'
      data-aos-duration='700'
      data-aos-easing='ease-in-out'
    >
      <Container className=' snap-center flex-shrink-0  relative h-[450px] w-[309px]  mr-5'>
        <div ref={ref} className='z-20 mx-auto '>
          {animationVisible && (
            <Lottie options={defaultOptions} height={450} width={309} />
          )}
        </div>
        <Container className='p-[25px] text-white  w-full h-full z-30 absolute '>
          <p className=' font-bold text-[12px] tracking-[-0.12px] leading-[16px] z-20'>
            ETAPE 5
          </p>
          <p className='mt-[13px] font-bold text-[19px] tracking-[0.23px] leading-[25px] z-20'>
            Votre projet décole
          </p>
        </Container>
        <MyImage
          source={"/assets/logoV2/ExpSlider5.jpg"}
          layout={"fill"}
          objectFit={"cover"}
          className='rounded-[18px]'
        />
      </Container>
    </div>
  );
};
export default SliderLotties;
