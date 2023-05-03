import Container from "../../shared/composers/container";

const ServiceTitle = ({ subtitle1, subtitle2, TextWhite }) => {
  return (
    <Container className=' font-bold text-[24px] md:text-4xl leading-[36px] tracking-[0.16px] overflow-hidden '>
      <h1
        data-aos='fade-up'
        data-aos-offset='50'
        data-aos-duration='700'
        data-aos-easing='ease-in-out'
        className='w-fit mb-1 text-transparent bg-clip-text bg-gradient-to-r via-orangeLight from-rougeLight to-saumon md:w-fit'
      >
        {subtitle1}
      </h1>
      <h1
        data-aos='fade-up'
        data-aos-offset='50'
        data-aos-duration='700'
        data-aos-delay='50'
        data-aos-easing='ease-in-out'
        className={`${TextWhite ? "text-white " : ""}`}
      >
        {" "}
        {subtitle2}
      </h1>
    </Container>
  );
};
export default ServiceTitle;
