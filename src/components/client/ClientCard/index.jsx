import Link from "next/link";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import MyImage from "../../shared/composers/myimage";

const ClientCard = () => {
  return (
    <Container className=''>
      <MyImage source={"/assets/logo/avatar.png"} w={40} h={40} />
      <p></p>
      <p></p>
      <Link href={"/"}>
        <a className='color-[#FF7E00]'>
          <Flex>
            Découvrir{" "}
            <MyImage source={"/assets/logo/arrow_right.svg"} w={40} h={40} />
          </Flex>
        </a>
      </Link>
    </Container>
  );
};
export default ClientCard;
