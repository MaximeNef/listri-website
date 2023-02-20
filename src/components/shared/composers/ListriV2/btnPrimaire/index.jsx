import Link from "next/link";
import Container from "../../container";

const BtnPrimaire = ({ text, href }) => {
  return (
    <Container>
      <Link href={href}>
        <a className='transform transition duration-500 hover:scale-110 hover:shadow-lg hover:shadow-rougeLight/50 text-center bg-black w-fit mx-auto bg-gradient-to-br from-rougeLight to-[#FF7E00]  text-white py-[15px] px-[30px] rounded-[50px] font-semibold text-[22px]  '>
          {text}
        </a>
      </Link>
    </Container>
  );
};
export default BtnPrimaire;
