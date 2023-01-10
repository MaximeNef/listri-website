import { useState } from "react";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import MotionBottomCard from "../../../shared/composers/motion- bottomcard";
import MyImage from "../../../shared/composers/myimage";
import ModalService from "./modalService";

const ServiceDetailCard = ({
  blueBg,
  title,
  subTitle,
  src,
  description1,
  description2,
  description3,
  description4,
  description5,
}) => {
  const svg = `<svg
  width="27"
  height="27"
  viewBox="0 0 27 27"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_1_8476)">
    <path
      d="M13.5 27C20.9566 27 27 20.9566 27 13.5C27 6.04336 20.9566 0 13.5 0C6.04336 0 0 6.04336 0 13.5C0 20.9566 6.04336 27 13.5 27ZM12.2344 18.1406V14.7656H8.85938C8.15801 14.7656 7.59375 14.2014 7.59375 13.5C7.59375 12.7986 8.15801 12.2344 8.85938 12.2344H12.2344V8.85938C12.2344 8.15801 12.7986 7.59375 13.5 7.59375C14.2014 7.59375 14.7656 8.15801 14.7656 8.85938V12.2344H18.1406C18.842 12.2344 19.4062 12.7986 19.4062 13.5C19.4062 14.2014 18.842 14.7656 18.1406 14.7656H14.7656V18.1406C14.7656 18.842 14.2014 19.4062 13.5 19.4062C12.7986 19.4062 12.2344 18.842 12.2344 18.1406Z"

      fill=${blueBg ? "white" : "black"}
    />
  </g>
  <defs>
    <clipPath id="clip0_1_8476">
      <rect width="27" height="27" fill="white" />
    </clipPath>
  </defs>
</svg>`;

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <Container className='fixed top-0 right-0 w-screen h-screen z-[99] !mt-[0px] bg-white ml-[-25px] '>
          <ModalService
            title={title}
            description1={description1}
            description2={description2}
            description3={description3}
            description4={description4}
            description5={description5}
            setShowModal={setShowModal}
          />{" "}
        </Container>
      )}
      <div className='mx-[25px] my-[12px]' onClick={handleShowModal}>
        <Flex
          className={`flex-col justify-center text-center ${
            blueBg ? "bg-darkBlue" : "bg-lightGrey"
          } rounded-3xl relative`}
        >
          <div className='mt-[50px] mb-[70px]'>
            <p
              className={`font-bold text-[38px] ${
                blueBg ? "text-white" : "text-black"
              } leading-[42px]`}
            >
              {title}
            </p>
            <p className=' mt-[10px] mx-[70px] font-bold text-[19px] text-transparent bg-clip-text bg-gradient-to-r via-orangeLight from-rougeLight to-saumon'>
              {subTitle}
            </p>
            <div className='mt-[9px]'>
              <MyImage source={src} h={"200"} w={"200"} />
            </div>
          </div>
          <div className='absolute h-[27px] w-[27px] bottom-[20px] right-[20px] '>
            <div
              dangerouslySetInnerHTML={{
                __html: svg,
              }}
            />
          </div>
        </Flex>
      </div>
    </>
  );
};

export default ServiceDetailCard;
