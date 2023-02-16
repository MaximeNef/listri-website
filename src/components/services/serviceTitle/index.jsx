import Container from "../../shared/composers/container";

const ServiceTitle = ({ subtitle1, subtitle2, TextWhite }) => {
  return (
    <Container className='font-bold text-[24px] md:text-4xl leading-[36px] tracking-[0.16px] '>
      <h2 className='w-fit mb-1 text-transparent bg-clip-text bg-gradient-to-r via-orangeLight from-rougeLight to-saumon md:w-fit'>
        {subtitle1}
      </h2>
      <h2 className={`${TextWhite ? "text-white " : ""}`}> {subtitle2}</h2>
    </Container>
  );
};
export default ServiceTitle;
