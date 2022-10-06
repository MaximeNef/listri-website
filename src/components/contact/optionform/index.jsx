import Container from "../../shared/composers/container";

const Optionform = ({ state, handleClick, name }) => {
  console.log(state);
  return (
    <Container className='w-full m-2 '>
      {state ? (
        <Container
          className='rounded-[10px] bg-white text-center p-[2px] w-full bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] shadow-cardinfo cursor-pointer'
          onClick={handleClick}
        >
          <h3 className=' 	  text-[20px] md:text-[24px]  font-semibold leading-[26px] text-center flex flex-col items-start justify-center text-white px-8 py-4 mx-auto'>
            {name}{" "}
          </h3>
        </Container>
      ) : (
        <Container className='p-[2px] bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[12px]   '>
          <Container
            className='rounded-[10px] bg-white text-center  h-[58px] cursor-pointer hover:bg-[#41B8B8] hover:text-white'
            onClick={handleClick}
          >
            <h3 className=' hover:text-white	w-full h-full  text-[20px] md:text-[24px]  font-semibold leading-[26px] text-center flex flex-col items-center justify-center text-transparent text-[#41B8B8] mx-auto'>
              {name}
            </h3>
          </Container>
        </Container>
      )}
    </Container>
  );
};
export default Optionform;
