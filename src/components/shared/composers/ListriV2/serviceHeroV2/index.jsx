import Link from "next/link";
import Flex from "../../flex";
import MyImage from "../../myimage";
import BtnPrimaire from "../btnPrimaire";

const ServiceHeroV2 = ({ title, subtitle, linkText, href, textWhite }) => {
  return (
    <Flex className={"flex-col justify-center"}>
      <div
        className={`${textWhite ? "text-[#FBFBFD]" : "text-darkBlue"} ${
          title == "Création de site web" ? "px-[20%]" : ""
        } text-[32px] tracking-[.004em] text-center font-bold leading-9`}
      >
        {title}
      </div>
      <p
        className={`${
          textWhite ? "text-[#FBFBFD]" : "text-darkBlue"
        } text-center text-[17px] mt-[5px] mb-[0.7em]`}
      >
        {subtitle}
      </p>
      <div className='text-[#FF7E00] text-center '>
        <Link href={href}>
          <a className='flex justify-center items-center'>
            <div className='mr-1'>{linkText}</div>
            <div>
              <MyImage
                source={"/assets/logoV2/arrowRightServices.svg"}
                w={15}
                h={9}
              />
            </div>
          </a>
        </Link>
      </div>
    </Flex>
  );
};

export default ServiceHeroV2;
