import MyImage from "../../../../shared/composers/myimage";

const SliderBlogCard = ({ source, timing, category, title }) => {
  return (
    <div className='rounded-[18px] w-[311px] md:w-[500px] h-[385px] shadow-slider snap-center flex-shrink-0 mr-5 my-10'>
      <div className='relative h-[225px]'>
        <MyImage
          source={source}
          layout={"fill"}
          objectFit={"cover"}
          className={"rounded-t-[18px]"}
        />
      </div>
      <div className='mx-[30px] mt-[29px]'>
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
