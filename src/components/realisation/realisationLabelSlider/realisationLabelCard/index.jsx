import Container from "../../../shared/composers/container";
import SvgSliderItems from "../labelSliderSvg";

const RealisationLabelCard = ({ text, filterRealisation, filtre, onClick }) => {
  
  const handleClick = () => {
    if (typeof onClick === 'function') {
      if (filterRealisation === filtre) {
        onClick('all');
      } else {
        onClick(filtre);
      }
    }
  };
  
  return (
    <Container className=' flex flex-col items-center mr-7 w-[80px] md:mr-[90px] lg:mr-32  cursor-pointer'>
      <div
        className={`relative ${
          text == "Optimisation" ? "h-[65px] w-[50px]" : "h-[65px] w-[65px]"
        }`}
        onClick={handleClick}
      >
        <SvgSliderItems
          text={text}
          isSelected={filterRealisation === filtre}
          filterRealisation={filterRealisation}
          filtre={filtre}
        />
      </div>
      <p
        className={`text-[14px] font-bold tracking-[-0.22px] leading-[20px] text-center ${
          filterRealisation == filtre ? "text-orangeLight" : "text-darkBlue"
        } mt-[18px]`}
      >
        {text}
      </p>
    </Container>
  );
};

export default RealisationLabelCard;