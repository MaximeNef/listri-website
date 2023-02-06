import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import MyImage from "../../shared/composers/myimage";

const Cardblog = ({ src, timing, category, title, subtitle, i }) => {
  return (
    <>
      {i === 0 ? (
        <Flex
          className={
            "my-5 rounded-[10px] shadow-realisationCard  md:border-0 flex-col md:flex-row"
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
              </Container>
              <Container className=' absolute bottom-2 right-2 '>
                <MyImage
                  source={"/assets/logoV2/orange-circle-arrow.svg"}
                  alt='Picture of the author'
                  w={50}
                  h={50}
                  objectFit={"contain"}
                  className=''
                />
              </Container>
            </Flex>
          </Container>
        </Flex>
      ) : (
        <Container
          className={"my-5 rounded-[10px] shadow-realisationCard  md:border-0"}
        >
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
                  className={`  font-semibold text-[21px] mt-3 md:w-full overflow-hidden h-[99px]  ${
                    i == 0 ? "md:max-h-fit" : " md:h-[90px] "
                  }`}
                >
                  {title}
                </h2>{" "}
              </Container>
              <Container className=' absolute bottom-2 right-2 '>
                <MyImage
                  source={"/assets/logoV2/orange-circle-arrow.svg"}
                  alt='Picture of the author'
                  w={50}
                  h={50}
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
