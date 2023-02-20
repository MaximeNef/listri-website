import MyImage from "../../../../shared/composers/myimage";

const SliderBlogCard = ({ source, timing, category, title }) => {
  return (
    <div
      data-aos='fade-in'
      data-aos-offset='100'
      data-aos-duration='700'
      data-aos-easing='ease-in-out'
      className='rounded-[18px] w-[311px] md:w-[500px]   snap-center flex-shrink-0 mr-5 my-10'
    >
      <div className=''>
        <MyImage
          source={source}
          h={300}
          w={500}
          objectFit={"cover"}
          className={"rounded-[18px]"}
        />
      </div>
      <div className='mx-[20px] mt-2 md:mt-5 '>
        <p className='text-xs font-bold uppercase'>
          {timing} min de lecture • {category}
        </p>
        <p className='mt-[13px] text-xl text-darkBlue font-bold leading-[25px] tracking-[0.231px] overflow-hidden h-[75px]'>
          {title}
        </p>
      </div>
    </div>
  );
};

export default SliderBlogCard;
