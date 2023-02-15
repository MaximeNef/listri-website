import Container from "../../../shared/composers/container";
import MyImage from "../../../shared/composers/myimage";

const SliderServicesCard = ({ source, text }) => {
  return (
    <Container className=' flex flex-col items-center   mr-7 w-[80px] md:mr-32'>
      <div
        className={`relative  ${
          text == "Optimisation" ? "h-[65px] w-[50px]" : "h-[65px] w-[65px]"
        }`}
      >
        <MyImage
          source={source}
          layout={"fill"}
          objectFit={"contain"}
          className={""}
        />
      </div>
      <p className='text-[14px] font-bold tracking-[-0.22px] leading-[20px] text-center text-darkBlue mt-[18px] '>
        {text}
      </p>
    </Container>
  );
};
export default SliderServicesCard;
