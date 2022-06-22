import Link from "next/link";
import Container from "../../../shared/composers/container";

const BtnServiceHero = () => {
  return (
    <Container className='mx-14 mt-14 text-center rounded-[50px]  bg-gradient-to-r from-[#FF7E00] to-[#FF7E00]/50  text-white font-semibold py-4 lg:mx-20'>
      <Link href='/services'>
        <a>Découvrez tous nos services</a>
      </Link>
    </Container>
  );
};
export default BtnServiceHero;
