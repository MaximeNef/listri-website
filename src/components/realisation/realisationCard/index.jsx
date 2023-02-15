import Link from "next/link";
import { useState } from "react";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import MyImage from "../../shared/composers/myimage";

const RealisationCard = ({ realisation }) => {
  const [style, setStyle] = useState("rounded-[10px]");

  return (
    <Link href={`/realisations/${realisation.uid}`}>
      <Container
        className='my-[13px] md:w-[50%] cursor-pointer shadow-realisationCard rounded-[10px] '
        onMouseEnter={(e) => {
          setStyle("transform transition duration-500 scale-110   ");
        }}
        onMouseLeave={(e) => {
          setStyle("");
        }}
      >
        <Container className='relative'>
          <Container className='z-40 absolute w-44 h-44   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
            <MyImage
              source={
                realisation.data.slices[0].primary.clientLogo?.url
                  ? realisation.data.slices[0].primary.clientLogo?.url
                  : "/assets/logo/Logo.svg"
              }
              w={170}
              h={170}
            />
          </Container>

          <MyImage
            source={
              realisation.data.slices[0].primary.clientImage?.url
                ? realisation.data.slices[0].primary.clientImage?.url
                : "/assets/logo/logolistri.svg"
            }
            w={375}
            h={250}
            className={`rounded-t-[10px] ${
              realisation.data.slices[0].primary.clientImage?.url
                ? `object-cover `
                : `object-contain `
            }`}
          />

          <Container className=' bg-black/[35%] z-30 h-full w-full absolute rounded-t-[10px] '></Container>
        </Container>

        <Container className='bg-lightGrey rounded-b-[10px] relative'>
          <Container className='mx-5 mb-6'>
            <p className='mt-[30px] mb-[20px]  font-light'>
              {realisation.data.slices[0].primary.serviceCategorie}
            </p>
            <p className=' mb-3 h-[40px] overflow-hidden  font-medium text-[15px] mr-20'>
              {realisation.data.slices[0].primary.clientDescription[0]?.text}
            </p>
            <Link href={`/realisations/${realisation.uid}`}>
              <Container className='absolute bottom-6 right-5'>
                <a className='color-[#FF7E00] mx-1'>
                  <Flex>
                    <MyImage
                      source={"/assets/logoV2/orange-circle-arrow.svg"}
                      w={50}
                      h={50}
                    />
                  </Flex>
                </a>
              </Container>
            </Link>
          </Container>
        </Container>
      </Container>
    </Link>
  );
};

export default RealisationCard;
