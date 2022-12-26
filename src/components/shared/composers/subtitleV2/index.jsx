import Container from "../container";

const SubtiltV2 = ({ subtitle1, subtitle2, TextWhite }) => {
  return (
    <Container className='font-bold text-[24px] leading-7 tracking-[0.22px]'>
      <h2 className='text-transparent bg-clip-text bg-gradient-to-r via-orangeLight from-rougeLight to-saumon'>
        {subtitle1}
      </h2>
      <h2 className={`${TextWhite ? "text-white " : ""}`}> {subtitle2}</h2>
    </Container>
  );
};
export default SubtiltV2;
