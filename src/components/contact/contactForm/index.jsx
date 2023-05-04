import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";

const ContactForm = ({
  handleSubmit,
  lastName,
  firstName,
  email,
  phone,
  buttonText,
  errors,
  showFailureMessage,
  showSuccessMessage,
}) => {
  return (
    <Container>
      <form onSubmit={handleSubmit()}>
        <Container className='mx-6'>
          <h1 className='text-[28px] font-medium mx-auto'>
            Finalisez votre demande
          </h1>
          <Flex className='   mb-4 w-full' justify='between'>
            <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[3px] rounded-[15px] w-[48%] shrink '>
              <input
                type='text'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                name='lastName'
                className='focus:outline-none rounded-[14px] text-center font-light h-16 shrink '
                placeholder='Nom'
              />
            </Container>

            <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[3px] rounded-[15px] w-[48%] shrink '>
              <input
                type='text'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                name='firstName'
                className='focus:outline-none rounded-[14px]  text-center font-light h-16 shrink'
                placeholder='Prénom'
              />
            </Container>
          </Flex>
          {errors?.lastName && (
            <p className='text-red-500'>tell us who you are </p>
          )}
          {errors?.lastName && (
            <p className='text-red-500'>{"don't be affreid"}</p>
          )}
          <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[3px] rounded-[15px] mb-4'>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className='focus:outline-none rounded-[14px] h-16 text-center font-light'
              placeholder='Mail'
            />
          </Container>

          {errors?.lastName && (
            <p className='text-red-500'>name cannot be empty.</p>
          )}

          <Container className='bg-gradient-to-r from-[#FF7E00] to-[#FFB873] p-[3px] rounded-[15px]'>
            <input
              type='tel'
              name='phone'
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className='focus:outline-none rounded-[14px] h-16 text-center font-light'
              placeholder='Téléphone'
            />
          </Container>

          {errors?.lastName && (
            <p className='text-red-500'>name cannot be empty.</p>
          )}

          <div className='flex flex-row items-center justify-center'>
            <button
              type='submit'
              className='px-10 mt-8 py-2 bg-gradient-to-r from-[#FF7E00] to-[#FFB873] text-gray-50 font-light rounded-[25px] text-lg flex flex-row items-center'
            >
              {buttonText}
            </button>
          </div>
          <div className='text-left'>
            {showSuccessMessage && (
              <p className='text-green-500 font-semibold text-sm my-2'>
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className='text-red-500'>
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </Container>
      </form>
    </Container>
  );
};
export default ContactForm;
