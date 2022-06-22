import Image from "next/image";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";

const OneServiceContent = ({ contents }) => {
  console.log(contents);
  return (
    <Container>
      {contents.map((content) => {
        return (
          <Container className='m-2 my-10'>
            <Flex justify='start' align='center' className=''>
              <Container className=''>
                <Image
                  src={content.src}
                  alt='Picture of the author'
                  width={50}
                  height={50}
                  className='absolute'
                />
              </Container>
              <Flex
                justify='center'
                className=' text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] font-medium text-[30px]'
              >
                {content.title}
              </Flex>
            </Flex>

            <Container className='text-left mt-6'>{content.text}</Container>
          </Container>
        );
      })}
    </Container>
  );
};
export default OneServiceContent;
