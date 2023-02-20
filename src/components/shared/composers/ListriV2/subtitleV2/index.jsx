import Container from "../../container";

const SubtitleV2 = ({ subtitle1, subtitle2, TextWhite }) => {
  return (
    <Container className='font-bold text-[24px] md:text-4xl leading-7 tracking-[0.22px] overflow-hidden'>
      <h2
        data-aos='fade-up'
        data-aos-offset='50'
        data-aos-duration='700'
        data-aos-easing='ease-in-out'
        className='text-transparent bg-clip-text bg-gradient-to-r via-orangeLight from-rougeLight to-saumon w-fit'
      >
        {subtitle1}
      </h2>
      <h2
        data-aos='fade-up'
        data-aos-offset='50'
        data-aos-duration='700'
        data-aos-easing='ease-in-out'
        className={`${TextWhite ? "text-white " : ""}`}
      >
        {" "}
        {subtitle2}
      </h2>
    </Container>
  );
};
export default SubtitleV2;
