import Container from "../../shared/composers/container";

const Optionform = ({ state, handleClick, name }) => {
  console.log(state);
  return (
    <Container className='w-full m-2 '>
      {state ? (
        <Container
          className='rounded-[10px] bg-white text-center p-[2px] w-full h-[60px] bg-gradient-to-r from-[#FF7E00] to-[#FFB873] shadow-cardinfo cursor-pointer'
          onClick={handleClick}
        >
          <h3 className=' 	  text-[20px] md:text-[24px]  font-semibold leading-[26px] text-center flex flex-col items-start justify-center text-white px-2  m-auto'>
            {name}{" "}
          </h3>
        </Container>
      ) : (
        <Container className='p-[2px] bg-gradient-to-r from-[#FF7E00] to-[#FFB873] rounded-[12px]   '>
          <Container
            className='rounded-[10px] bg-white text-center  h-[60px]  cursor-pointer hover:bg-[#FF7E00] hover:text-white'
            onClick={handleClick}
          >
            <h3 className='px-2 hover:text-white	w-full h-full  text-[20px] md:text-[24px]  font-semibold leading-[26px] text-center flex flex-col items-center justify-center text-transparent text-[#FF7E00] mx-auto'>
              {name}
            </h3>
          </Container>
        </Container>
      )}
    </Container>
  );
};
export default Optionform;
