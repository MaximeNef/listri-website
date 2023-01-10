import { useState } from "react";
import Container from "../../../shared/composers/container";
import MyImage from "../../../shared/composers/myimage";
import SvgSliderItems from "../labelSliderSvg";

const RealisationLabelCard = ({ text, filterRealisation, filtre }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Container className=' flex flex-col items-center   mr-7 w-[80px]'>
      <div
        className={`relative  ${
          text == "Optimisation" ? "h-[65px] w-[50px]" : "h-[65px] w-[65px]"
        }`}
        onClick={() => {
          console.log(text, "text");
          setIsSelected(!isSelected);
        }}
      >
        <SvgSliderItems
          text={text}
          isSelected={isSelected}
          filterRealisation={filterRealisation}
          filtre={filtre}
        />
      </div>
      <p
        className={`text-[14px] font-bold tracking-[-0.22px] leading-[20px] text-center ${
          filterRealisation == filtre ? " text-orangeLight" : "text-darkBlue"
        }  mt-[18px]`}
      >
        {text}
      </p>
    </Container>
  );
};
export default RealisationLabelCard;
