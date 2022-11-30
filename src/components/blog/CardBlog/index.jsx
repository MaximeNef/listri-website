import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import MyImage from "../../shared/composers/myimage";

const Cardblog = ({ src, timing, category, title, subtitle, i }) => {
  return (
    <>
      {i === 0 ? (
        <Flex
          className={
            "m-5 rounded-[10px] border-[1px] md:border-0 flex-col md:flex-row"
          }
        >
          <Container className='w-full'>
            {" "}
            <MyImage
              source={`${src}`}
              alt='Picture of the author'
              w={500}
              h={300}
              objectFit={"cover"}
              className={` rounded-t-[9px] md:rounded-[10px] `}
            />
          </Container>
          <Container className=' bg-slate-100/30 md:bg-transparent relative md:ml-10'>
            <Flex className='justify-between m-[10px]'>
              <Container className='w-[80%] md:w-full'>
                <p className=' font-light text-[14px] md:text-[18px]'>
                  {timing} min de lecture • {category}
                </p>
                <h2
                  className={`  font-semibold text-[21px] mt-3 md:w-full  ${
                    i == 0 ? "md:max-h-fit" : " md:h-[90px] "
                  }`}
                >
                  {title}
                </h2>{" "}
                <h3 className=' font-[285] text-[14px] w-fit  overflow-hidden  max-h-[40px] mt-2 md:w-[80%]'>
                  {subtitle}
                </h3>
              </Container>
              <Container className='flex justify-end mb-1 p-2 rounded-full bg-[#FEA249] h-fit w-fit absolute bottom-2 right-3 md:left-0 '>
                <MyImage
                  source='/assets/logo/arrow_right.svg'
                  alt='Picture of the author'
                  w={25}
                  h={25}
                  objectFit={"contain"}
                  className=''
                />
              </Container>
            </Flex>
          </Container>
        </Flex>
      ) : (
        <Container className={"m-5 rounded-[10px] border-[1px] md:border-0"}>
          <Container>
            {" "}
            <MyImage
              source={`${src}`}
              alt='Picture of the author'
              w={500}
              h={300}
              objectFit={"cover"}
              className=' rounded-t-[9px] md:rounded-[10px] transform transition duration-500 hover:scale-110 '
            />
          </Container>
          <Container className=' bg-slate-100/30 md:bg-transparent relative'>
            <Flex className='justify-between m-[10px] md:ml-1'>
              <Container className='w-[80%] md:w-full'>
                <p className=' font-light text-[14px] md:text-[18px]'>
                  {timing} min de lecture • {category}
                </p>
                <h2
                  className={`  font-semibold text-[21px] mt-3 md:w-full  ${
                    i == 0 ? "md:max-h-fit" : " md:h-[90px] "
                  }`}
                >
                  {title}
                </h2>{" "}
                <h3 className=' font-[285] text-[14px] w-fit  overflow-hidden  max-h-[40px] mt-2 md:w-[80%]'>
                  {subtitle}
                </h3>
              </Container>
              <Container className='flex justify-end mb-1 p-2 rounded-full bg-[#FEA249] h-fit w-fit absolute bottom-2 right-3 '>
                <MyImage
                  source='/assets/logo/arrow_right.svg'
                  alt='Picture of the author'
                  w={25}
                  h={25}
                  objectFit={"contain"}
                  className=''
                />
              </Container>
            </Flex>
          </Container>
        </Container>
      )}
    </>
  );
};
export default Cardblog;
