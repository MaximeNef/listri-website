import { useEffect } from "react";
import Container from "../../shared/composers/container";
import Flex from "../../shared/composers/flex";
import MyImage from "../../shared/composers/myimage";

const TeamCard = ({ team, key }) => {
  const { lastName, firstName, activite, mail, phone, src } = team;
  return (
    <Container>
      <Flex justify='center' className='w-full p-10  ' key={key}>
        <Container className='mx-auto border-[2px] border-orange-400 w-fit  rounded-[20px] bg-white px-10'>
          <Container className='border-[2px] border-orange-400   rounded-full  w-[200px] h-[200px] m-auto mt-[-100px] '>
            <MyImage
              source={team.src}
              w={200}
              h={200}
              className={"rounded-full"}
            />
          </Container>
          <Flex
            type='col'
            align='center'
            justify='center'
            className='space-y-5 my-10 bg-white'
          >
            <Flex type='col' align='center'>
              <Flex className='space-x-1 '>
                <p className='text-bold text-[19px]'> {team.lastName}</p>
                <p className='text-bold text-[19px]'> {team.firstName}</p>
              </Flex>
              <Container justify='center'>
                <p className='font-light text-center'> {team.activite}</p>
              </Container>{" "}
            </Flex>

            <Container className='space-y-1 text-center'>
              <Container>{team.mail}</Container>
              <Container>{team.phone}</Container>
            </Container>
            <Flex justify='center' className=' space-x-16 w-full pt-6'>
              <Container>
                <a href={`tel:${team.phone}`}>
                  <MyImage source='/assets/logo/phoneTeam.svg' w={30} h={30} />{" "}
                </a>
              </Container>
              <Container>
                <a href={`mailto:${team.mail}`}>
                  <MyImage source='/assets/logo/email.svg' w={30} h={30} />
                </a>
              </Container>
            </Flex>
          </Flex>
        </Container>
      </Flex>{" "}
    </Container>
  );
};
export default TeamCard;
