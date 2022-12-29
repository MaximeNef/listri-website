import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import SliderServicesCard from "./SliderServicesCard";

const SliderServices = () => {
  const services = [
    {
      source: "/",
      text: "",
    },
    {
      source: "/",
      text: "",
    },
    {
      source: "/",
      text: "",
    },
    {
      source: "/",
      text: "",
    },
    {
      source: "/",
      text: "",
    },
  ];
  return (
    <Container>
      <Flex className='snap-mandatory snap-x overflow-scroll mx-[-25px] pl-2'>
        <Container className={"min-w-[25px]"} />
        {blogs.map((blog) => {
          return (
            <a key={blog.uid}>
              <SliderServicesCard />
            </a>
          );
        })}
        <Container className={"min-w-[20px]"} />
      </Flex>
    </Container>
  );
};
export default SliderServices;
