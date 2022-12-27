import Container from "../../../../shared/composers/container";
import MyImage from "../../../../shared/composers/myimage";

const SliderExpCard = ({ etape }) => {
  return (
    <Container className=' snap-center flex-shrink-0  relative h-[450px] w-[309px] mr-5'>
      <Container className='p-[25px] text-white bg-[#252525]/20 rounded-[18px]  w-full h-full z-10'>
        <p className=' font-bold text-[12px] tracking-[-0.12px] leading-[16px]'>
          {etape.text}
        </p>
        <p className='mt-[13px] font-bold text-[19px] tracking-[0.23px] leading-[25px]'>
          {etape.title}
        </p>
      </Container>

      <MyImage
        source={etape.img}
        layout={"fill"}
        objectFit={"contain"}
        className='rounded-[18px]'
      />
    </Container>
  );
};
export default SliderExpCard;
