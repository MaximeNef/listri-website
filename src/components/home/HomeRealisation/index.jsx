import React from "react";
import Container from "../../shared/composers/container";
import BtnPrimaire from "../../shared/composers/ListriV2/btnPrimaire";
import SubtitleV2 from "../../shared/composers/ListriV2/subtitleV2";
import RealisationLoop from "./RealisationLoop";

const HomeRealisation = () => {
  const svg = `<svg width="100%" height="100%"  viewBox="0 0 390 98" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0C0 24 18 48 48.5405 49H341C368.062 49 390 70.938 390 98V98H0V0Z" fill="#283445"/>`;

  const svgBottom = `<svg width="100%" height="100%"  viewBox="0 0 390 98" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 98C0 74 18 50 48.5405 49H341C368.062 49 390 27.062 390 0H0V98Z" fill="#283445"/>
  </svg>`;
  return (
    <Container className='ml-[-25px] mr-[-25px] '>
      <div
        className='mb-[-1px]'
        dangerouslySetInnerHTML={{
          __html: svg,
        }}
      />
      <div className='px-[25px]  bg-darkBlue '>
        <div className='md:ml-[72px] mb-[10px]'>
          <SubtitleV2
            TextWhite={true}
            subtitle1={"Nos réalisations."}
            subtitle2={"Innovantes & uniques tout comme vous. "}
          />{" "}
        </div>

        <RealisationLoop />
        <Container className='mt-[70px] relative'>
          <BtnPrimaire
            text={"Découvrez nos réalisations"}
            href={"/realisations"}
          />
        </Container>
      </div>

      <div
        className='mt-[-1px]'
        dangerouslySetInnerHTML={{
          __html: svgBottom,
        }}
      />
    </Container>
  );
};

export default HomeRealisation;
