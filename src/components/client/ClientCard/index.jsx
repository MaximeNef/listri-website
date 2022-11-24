import Link from 'next/link';
import Container from '../../shared/composers/container';
import Flex from '../../shared/composers/flex';
import MyImage from '../../shared/composers/myimage';

const ClientCard = ({ realisation }) => {
  return (
    <Container className="mx-5 mb-20">
      <Container className="relative">
        <Container className="absolute w-44 h-44 bg-black z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <MyImage
            source={realisation.data.slices[0].primary.clientLogo.url}
            w={170}
            h={170}
            className="rounded-t-xl"
          />
        </Container>
        <MyImage
          source={realisation.data.slices[0].primary.clientImage.url}
          w={375}
          h={250}
          className="object-cover rounded-t-xl"
        />
        <Container className=" bg-[#FF7E00]/[15%] h-full w-full absolute rounded-t-xl"></Container>
      </Container>
      <p className="mt-8 mb-2 text-[#747A96]">
        {realisation.data.slices[0].primary.client[0].text}
      </p>
      <p className="mb-6 font-semibold text-xl">
        {realisation.data.slices[0].primary.clientDescription[0].text}
      </p>
      <Link href={'/'}>
        <a className="color-[#FF7E00]">
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
  );
};
export default ClientCard;
