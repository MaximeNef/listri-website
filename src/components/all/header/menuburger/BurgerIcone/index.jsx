import Container from "../../../../shared/composers/container";

const BurgerIcone = ({ handelClick, isOpen }) => {
  return (
    <Container className=' left-2 z-20 fixed  mt-1'>
      <input
        type='checkbox'
        id='checkbox'
        onClick={handelClick}
        name='burger'
      />
      <label className='burger' htmlFor='checkbox'>
        <div className='container top'>
          <div className='line top'></div>
        </div>
        <div className='container bottom'>
          <div className='line bottom'></div>
        </div>
      </label>
      <style jsx>{`
        .container.top {
          transform: translateY(-3px) scaleX(0.88235);
        }

        .container.bottom {
          transform: translateY(3px) scaleX(0.88235);
        }

        input:checked + label .container .line.bottom {
          transform: rotateZ(45deg);
        }

        input:checked + label .container .line.top {
          transform: rotateZ(-45deg);
        }

        input:checked + label .container.bottom {
          transform: none;
        }

        input:checked + label .container.top {
          transform: none;
        }

        input:checked + label .line.bottom {
          transform: none;
          transition-delay: 0.1s;
        }

        input:checked + label .line.top {
          transform: none;
          transition-delay: 0.1s;
        }

        .container {
          transition: transform 0.2s ease-in-out 0.1s;
        }

        input:checked + label .container {
          transition-delay: 0s;
        }

        .line {
          transition: transform 0.2s ease-in-out;
        }

        /* The boilerplate stuff */
        button {
          all: unset;
          cursor: pointer;
          display: block;
        }

        button * {
          pointer-events: none;
        }

        .burger {
          height: 31px;
          width: 31px;
          display: block;
          position: relative;
        }

        .container {
          position: absolute;
          left: 7px;
          top: 15px;
        }

        .line {
          height: 3px;
          border-radius: 3px;
          background: #ffb873;
          width: 25px;
        }

        input {
          display: none;
        }
      `}</style>
    </Container>

    // <Container className=' left-2 z-20 fixed  mt-1 '>
    //   <input
    //     type='checkbox'
    //     id='checkboxBurger'
    //     className='hidden '
    //     onClick={handelClick}
    //   />
    //   <label
    //     className='burger h-[31px] w-[31px] block relative '
    //     htmlFor='checkboxBurger'
    //   >
    //     {/* <button> */}
    //     <div
    //       className={`container top absolute left-[7px] top-[15px]${
    //         isOpen ? "transform-none " : ""
    //       }`}
    //     >
    //       <div
    //         className={`line top h-[2px] rounded-[3px] bg-black w-[17px ${
    //           isOpen ? " transform-none delay-[100ms] rotate-[-45deg]" : ""
    //         }`}
    //       ></div>
    //     </div>
    //     <div
    //       className={`container bottom absolute left-[7px] top-[15px]${
    //         isOpen ? "transform-none" : ""
    //       }`}
    //     >
    //       <div
    //         className={`line bottom h-[2px] rounded-[3px] bg-black w-[17px ${
    //           isOpen ? " transform-none delay-[100ms] rotate-[45deg]" : ""
    //         }`}
    //       ></div>
    //     </div>
    //     {/* </button> */}
    //   </label>
    // </Container>
  );
};
export default BurgerIcone;
