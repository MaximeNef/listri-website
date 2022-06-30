import Image from "next/image";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import ClientCardDesktop from "./clientCardDesktop";
import ClientHeroCard from "./clientHeroCard";
import ClientHeroDescription from "./clientHeroDescription";
import ClientHeroDesktop from "./ClientHeroDesktop";
const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
const ClientHero = () => {
  return (
    <Container>
      <Container className='lg:hidden'>
        <ClientHeroDescription />
        <Container>
          {" "}
          <h2 className='mx-auto font-medium text-[34px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
            {"COMING SOON "}
          </h2>
        </Container>{" "}
        {/* <ClientHeroCard /> */}
        <Container className='mb-6 p-5'>
          <Image
            loader={myLoader}
            src='/assets/logo/clientHero.svg'
            alt='Picture of the author'
            width={250}
            height={250}
            className=''
          />
        </Container>
      </Container>
      <Container className='hidden lg:inline-flex'>
        <ClientHeroDesktop />
        <ClientCardDesktop />
      </Container>
    </Container>
  );
};
export default ClientHero;
