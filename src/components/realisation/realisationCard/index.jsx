import Link from 'next/link';
import Container from '../../shared/composers/container';
import Flex from '../../shared/composers/flex';
import MyImage from '../../shared/composers/myimage';

const RealisationCard = ({ realisation }) => {
  return (
    <Link href={`/realisations/${realisation.uid}`}>
      <Container
        className="mx-5 mb-20 md:w-[33%] cursor-pointer"
        onMouseEnter={(e) => {
          setStyle('transform transition duration-500 scale-110  ');
        }}
        onMouseLeave={(e) => {
          setStyle('');
        }}
      >
        <Container className="relative">
          <Container className="z-40 absolute w-44 h-44   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <MyImage
              source={
                realisation.data.slices[0].primary.clientLogo?.url
                  ? realisation.data.slices[0].primary.clientLogo?.url
                  : '/assets/logo/Logo.svg'
              }
              w={170}
              h={170}
            />
          </Container>

          <MyImage
            source={
              realisation.data.slices[0].primary.clientImage?.url
                ? realisation.data.slices[0].primary.clientImage?.url
                : '/assets/logo/logolistri.svg'
            }
            w={375}
            h={250}
            className={`rounded-t-[10px] ${
              realisation.data.slices[0].primary.clientImage?.url
                ? `object-cover `
                : `object-contain `
            }`}
          />

          <Container className=" bg-black/[35%] z-30 h-full w-full absolute rounded-t-[10px] "></Container>
        </Container>

        <Container className="bg-lightGrey">
          <p className="mt-[30px] mb-[20px] mx-1 font-light">
            {realisation.data.slices[0].primary.serviceCategorie}
          </p>
          <p className=" mb-3 h-[40px]  overflow-hidden mx-1 font-medium text-[15px]">
            {realisation.data.slices[0].primary.clientDescription[0]?.text}
          </p>
          <Link href={`/realisations/${realisation.uid}`}>
            <a className="color-[#FF7E00] mx-1">
              <Flex>
                <p className="text-[#FF7E00] mr-2 text-">Découvrir</p>
                <MyImage
                  source={'/assets/logo/arrow_right_orange.svg'}
                  w={10}
                  h={10}
                />
              </Flex>
            </a>
          </Link>
        </Container>
      </Container>
    </Link>
  );
};

export default RealisationCard;
