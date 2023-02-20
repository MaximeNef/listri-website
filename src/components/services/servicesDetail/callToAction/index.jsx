import React from "react";
import Container from "../../../shared/composers/container";
import BtnPrimaire from "../../../shared/composers/ListriV2/btnPrimaire";

const CallToAction = () => {
  return (
    <Container className='text-center text-[37px] md:text-6xl font-bold leading-[42px] tracking-[0.22px] '>
      <div className='overflow-hidden'>
        <p
          data-aos='fade-up'
          data-aos-offset='50'
          data-aos-duration='700'
          data-aos-easing='ease-in-out'
          className='mx-auto w-fit text-transparent bg-clip-text bg-gradient-to-r via-orangeLight from-rougeLight to-saumon'
        >
          Chaque projet est unique.
        </p>
        <p
          data-aos='fade-up'
          data-aos-offset='50'
          data-aos-duration='700'
          data-aos-easing='ease-in-out'
          className='mb-[50px]'
        >
          Le vôtre aussi.
        </p>
      </div>
      <BtnPrimaire text={"Devis gratuit"} href={"/contact"} />
    </Container>
  );
};

export default CallToAction;
