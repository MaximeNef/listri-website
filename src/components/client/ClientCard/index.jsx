import Link from 'next/link';
import Container from '../../shared/composers/container';
import Flex from '../../shared/composers/flex';
import MyImage from '../../shared/composers/myimage';

const ClientCard = () => {
  return (
    <Container className="mx-5">
      <MyImage
        source={'/assets/logo/card_placeholder.png'}
        w={375}
        h={250}
        className="object-contain rounded-"
      />
      <p className="mt-8 mb-2 text-[#747A96]">CLIENT</p>
      <p className="mb-6 font-semibold text-xl">Description</p>
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
