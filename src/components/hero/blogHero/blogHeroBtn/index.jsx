import Link from "next/link";
import Container from "../../../shared/composers/container";

const BlogHeroBtn = () => {
  return (
    <Container className=' z-20  px-[24px] py-[12px] text-center rounded-[30px]  bg-gradient-to-r from-[#FF7E00] to-[#F9CCA6]  text-white font-medium  shadow-realisationCard'>
      <Link href='/blogs' passHref>
        <a>{" Découvrez nos articles"}</a>
      </Link>
    </Container>
  );
};
export default BlogHeroBtn;
