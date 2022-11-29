import Link from "next/link";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import MyImage from "../../shared/composers/myimage";

const ClientCard = ({ realisation }) => {
  return (
    <Container className='mx-5 mb-20 md:w-[45%]'>
      <Container className='relative'>
        <Container className='absolute w-44 h-44  z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
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
            realisation.data.slices[0].primary.clientLogo?.url
              ? realisation.data.slices[0].primary.clientImage?.url
              : "/assets/logo/logolistri.svg"
          }
          w={375}
          h={250}
          className={` ${
            realisation.data.slices[0].primary.clientLogo?.url
              ? "object-cover rounded-t-xl"
              : "object-contain rounded-t-xl"
          }`}
        />
        <Container className=' bg-black/[35%] h-full w-full absolute rounded-t-xl'></Container>
      </Container>
      <p className='mt-8 mb-2 text-[#747A96]'>
        {realisation.data.slices[0].primary.client[0]?.text}
      </p>
      <p className='mb-6 font-semibold text-xl'>
        {realisation.data.slices[0].primary.clientDescription[0]?.text}
      </p>
      <Link href={`/realisations/${realisation.uid}`}>
        <a className='color-[#FF7E00]'>
          <Flex>
            <p className='text-[#FF7E00] mr-2 text-'>Découvrir</p>
            <MyImage
              source={"/assets/logo/arrow_right_orange.svg"}
              w={10}
              h={10}
            />
          </Flex>
        </a>
      </Link>
    </Container>
  );
};
export default ClientCard;
