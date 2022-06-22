import Link from "next/link";
import Container from "../../../shared/composers/container";

const BlogHeroBtn = () => {
  return (
    <Container className='mx-4 py-2 text-center rounded-[50px]  bg-gradient-to-r from-[#FF7E00] to-[#FF7E00]/50  text-white font-normal '>
      <Link href='/blogs'>
        <a>Nos articles</a>
      </Link>
    </Container>
  );
};
export default BlogHeroBtn;
