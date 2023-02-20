import MyImage from "../../../../shared/composers/myimage";

const SliderIdentityCard = ({
  logo,
  color,
  blackText1,
  colorText2,
  blackText3,
}) => {
  return (
    <div
      data-aos='fade-in'
      data-aos-offset='100'
      data-aos-duration='700'
      data-aos-easing='ease-in-out'
      className='h-[215px] max-w-[270px] rounded-[18px]  snap-center flex-shrink-0 mr-5 my-10 md:min-w-[25%]  shadow-slider  md:hover:shadow-xl  '
    >
      <div className='py-4 px-7 transform transition duration-500 hover:scale-110 z-50 '>
        <MyImage source={logo} h={"50"} w={"50"} />
        <div className='mt-3'>
          <p className='text-lg font-bold leading-[25px] tracking-[0.231px] text-[#1D1D1F]'>
            {blackText1} <span className={`${color}`}>{colorText2}</span>{" "}
            {blackText3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderIdentityCard;
