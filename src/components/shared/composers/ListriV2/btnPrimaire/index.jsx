import Link from "next/link";
import Container from "../../container";

const BtnPrimaire = ({ text, href }) => {
  return (
    <Container>
      <Link href={href}>
        <a className=' text-center bg-black w-fit mx-auto bg-gradient-to-r from-rougeLight to-[#FF7E00]  text-white py-[15px] px-[30px] rounded-[50px] font-semibold text-[22px]'>
          {text}
        </a>
      </Link>
    </Container>
  );
};
export default BtnPrimaire;
