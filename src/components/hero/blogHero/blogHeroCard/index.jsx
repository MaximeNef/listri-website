import Image from "next/image";
import Link from "next/link";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";

const BlogHeroCard = ({ blogs }) => {
  return (
    <Container className=''>
      <Flex
        justify='start'
        className='container-snap snap-x mx-auto snap-mandatory h-[400px] flex w-full overflow-scroll px-[33%]  pt-3 '
      >
        {blogs.map((blog, i) => (
          <Container
            key={i}
            className='snap-center w-[300px] flex-shrink-0 h-[350px] flex items-center justify-center relative '
          >
            <Link href={`/blogs/${blog.uid}`} key={blog.uid} passHref>
              <a key={blog.uid}>
                <Container className=' m-5 mb-20 min-h-[280px]  '>
                  <Container className='absolute  '>
                    <Image
                      src={blog.data.slices[0].items[0].img.url}
                      alt='Picture of the author'
                      width={250}
                      height={250}
                      className='rounded-tl-[20px] rounded-br-[20px] rounded-tr-[80px] rounded-bl-[80px] '
                    />
                    <Container className='h-full w-full bg-gradient-to-t from-black/80 absolute m-auto rounded-tl-[20px] rounded-br-[20px] rounded-tr-[80px] rounded-bl-[80px] shadow-ServiceCard' />
                  </Container>
                  <Flex
                    type='col'
                    justify='center'
                    align='center'
                    className='z-10 '
                  >
                    <Container className=' text-[#FFFAF5] text-[40px] font-medium text-center'>
                      {blog.data.slices[0].items[0].title[0].text}{" "}
                    </Container>

                    <Container className=' text-[#FFFAF5] text-[17px] font-light text-center    mx-6  '>
                      {blog.data.slices[0].items[0].description[0].text}

                      <Flex
                        justify='end'
                        className=' text-[#FFFAF5] text-[17px]  mx-6 pb-5  text-center font-medium text-ellipsis overflow-hidden'
                      >
                        {"suite ..."}
                      </Flex>
                    </Container>
                  </Flex>
                </Container>
              </a>
            </Link>
          </Container>
        ))}
        {/* <Container className='snap-center bg-[#FFFAF5] w-[220px] flex-shrink-0 h-[220px] flex items-center justify-center shadow-ServiceCard rounded-[20px]'> */}

        {/* </Container> */}

        <Container className='  w-[200px] flex-shrink-0 h-[200px] flex items-center justify-center mx-10  '></Container>
      </Flex>
    </Container>
  );
};
export default BlogHeroCard;
