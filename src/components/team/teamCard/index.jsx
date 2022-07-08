import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import MyImage from "../../shared/composers/myimage";

const TeamCard = ({ team }) => {
  const { lastName, firstName, activite, mail, phone, src } = team;
  return (
    <Flex justify='center' className='w-full p-10  '>
      <Container className='mx-auto border-[2px] border-orange-400 w-fit  rounded-[20px] bg-white px-10'>
        <Container className='border-[2px] border-orange-400   rounded-full  w-[200px] h-[200px] m-auto mt-[-100px] '>
          <MyImage source={src} w={200} h={200} className={"rounded-full"} />
        </Container>
        <Flex
          type='col'
          align='center'
          justify='center'
          className='space-y-4 my-10 bg-white'
        >
          <Flex className='space-x-1 '>
            <p className='text-bold text-[19px]'> {lastName}</p>
            <p className='text-bold text-[19px]'> {firstName}</p>
          </Flex>
          <Flex justify='center'>
            <p className='font-light text-center'> {activite}</p>
          </Flex>
          <Container className='space-y-1 text-center'>
            <p> {mail}</p>
            <p> {phone}</p>
          </Container>
          <Flex justify='center' className=' space-x-20 w-full'>
            <Container>
              <MyImage source='/assets/logo/phoneTeam.svg' w={30} h={30} />
            </Container>
            <Container>
              <MyImage source='/assets/logo/email.svg' w={30} h={30} />
            </Container>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
export default TeamCard;
