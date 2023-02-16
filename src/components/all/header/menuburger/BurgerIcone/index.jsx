import Container from "../../../../shared/composers/container";

const BurgerIcone = ({ handelClick }) => {
  return (
    <Container className=''>
      <>
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
            width: 26px;
          }

          input {
            display: none;
          }
        `}</style>
      </>
    </Container>
  );
};
export default BurgerIcone;
