import Link from "next/link";
import Flex from "../../flex";
import MyImage from "../../myimage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ServiceHeroV2 = ({
  title,
  subtitle,
  linkText,
  href,
  textWhite,
  subtitle2,
}) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <Flex className={"flex-col justify-center"}>
      <div
        className={`${textWhite ? "text-[#FBFBFD]" : "text-darkBlue"} ${
          title == "Création de site web" ? "px-[20%]" : ""
        } text-[32px] md:text-6xl tracking-[.004em] text-center font-bold leading-9 overflow-hidden `}
      >
        <h3
          data-aos='fade-up'
          data-aos-offset='50'
          data-aos-duration='700'
          data-aos-easing='ease-in-out'
        >
          {title}
        </h3>
      </div>
      <div
        className={`${
          textWhite ? "text-[#FBFBFD]" : "text-darkBlue"
        } text-center text-[17px] md:text-3xl mt-[5px] mb-[0.7em] overflow-hidden `}
      >
        <p
          data-aos='fade-up'
          data-aos-offset='50'
          data-aos-delay='50'
          data-aos-duration='700'
          data-aos-easing='ease-in-out'
        >
          {subtitle}
        </p>
        <p
          data-aos='fade-up'
          data-aos-offset='50'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
        >
          {" "}
          {subtitle2}
        </p>
      </div>
      <div className='text-[#FF7E00] text-center flex justify-center space-x-5'>
        <Link href={href}>
          <a className='flex justify-center items-center'>
            <div className='mr-1 md:text-xl'>{linkText}</div>
            <div>
              <MyImage
                source={"/assets/logoV2/arrowRightServices.svg"}
                w={15}
                h={9}
              />
            </div>
          </a>
        </Link>
        <Link href={"/contactus"}>
          <a className='flex justify-center items-center'>
            <div className='mr-1 md:text-xl'>{"Commencer"}</div>
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
