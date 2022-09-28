import Link from "next/link";
import Container from "../../../shared/composers/container";

const BtnServiceHero = () => {
  return (
    <>
      <Container className='mx-14 mt-14 lg:mt-0 text-center rounded-[50px]    text-white font-semibold py-4 lg:mx-20 '>
        <Link href='/services' passHref>
          <a className='relative inline-flex items-center mx-auto w-fit px-12 py-3 overflow-hidden text-lg font-semibold text-[#FF7E00] border-2 border-[#FF7E00] rounded-full hover:text-white group hover:bg-gray-50 shadow-realisationCard'>
            <span className='absolute left-0 block w-full h-0 transition-all bg-gradient-to-r from-[#FF7E00] to-[#FF7E00]/50 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
            <span className='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                ></path>
              </svg>
            </span>
            <span className='relative'>Découvrez nos services</span>
          </a>
        </Link>
      </Container>{" "}
    </>
  );
};
export default BtnServiceHero;
