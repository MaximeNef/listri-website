import Image from "next/image";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import BlogHeroBtn from "../blogHeroBtn";

const BlogHeroEnd = () => {
  return (
    <Container>
      <Flex align='center' className='mb-6 px-5 py-8 w-full'>
        <Image
          src='/assets/logo/blogging.svg'
          alt='Picture of the author'
          width={250}
          height={250}
          className=''
        />
        <Container className=' max-w-[50%] pl-5'>
          <p className='  text-center font-light text-[#37474F] '>
            {"Découvrez et comprennez le monde digital "}
          </p>

          <Container className='mt-4'>
            {" "}
            <BlogHeroBtn />
          </Container>
        </Container>
      </Flex>
    </Container>
  );
};
export default BlogHeroEnd;
