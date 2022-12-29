import Container from "../../../shared/composers/container";
import MyImage from "../../../shared/composers/myimage";

const SliderServicesCard = ({ source, text }) => {
  return (
    <Container>
      <div className='relative h-[65px] w-[65px]'>
        <MyImage
          source={source}
          layout={"fill"}
          objectFit={"cover"}
          className={"rounded-t-[18px]"}
        />
      </div>
      <p>{text}</p>
    </Container>
  );
};
export default SliderServicesCard;
