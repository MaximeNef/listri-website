import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import MyImage from "../../shared/composers/myimage";

const Cardblog = ({ src, timing, category, title, subtitle }) => {
  return (
    <Container className='m-5 rounded-[10px] border-[1px] '>
      <Container>
        {" "}
        <MyImage
          source={`${src}`}
          alt='Picture of the author'
          w={500}
          h={300}
          objectFit={"cover"}
          className=' rounded-t-[10px] '
        />
      </Container>
      <Container className=' bg-slate-100/30'>
        <Flex className='justify-between m-[10px]'>
          <Container className='w-[80%]'>
            <p className=' font-light text-[14px]'>
              {timing} min de lecture • {category}
            </p>
            <h2 className=' font-semibold text-[21px] mt-3 '>{title}</h2>

            <h3 className=' font-[285] text-[14px] w-fit  overflow-hidden  max-h-[40px] mt-2'>
              {subtitle}
            </h3>
          </Container>
          <Container className='flex justify-end mb-1 '>
            <MyImage
              source='/assets/logo/arrow_right.svg'
              alt='Picture of the author'
              w={50}
              h={40}
              objectFit={"contain"}
              className=''
            />
          </Container>
        </Flex>
      </Container>
    </Container>
  );
};
export default Cardblog;
