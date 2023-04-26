import Link from "next/link";
import Container from "../../../shared/composers/container";
import Flex from "../../../shared/composers/flex";
import { motion } from "framer-motion";
import MyImage from "../../../shared/composers/myimage";

const MenuDesktop = ({ link, current }) => {
  return (
    <Container className=' w-full '>
      <Flex align='center' className='fixed z-90 bg-white w-full   py-2  px-24'>
        {" "}
        <Flex className=' m-auto    max-h-12  '>
          <Link href='/' passHref>
            <div className='max-h-12 cursor-pointer'>
              <MyImage source='/assets/logo/listri.svg' w={100} h={48} />
            </div>
          </Link>{" "}
        </Flex>
        <Flex type='row' justify='between' align='start' className='md:  '>
          {link.map((p) => {
            return (
              <Link href={p.href} key={p.href} passHref>
                {p.page == current ? (
                  <Container
                    type='col'
                    align='center'
                    justify=''
                    className='pt-4 '
                  >
                    <Flex
                      type='col'
                      align='center'
                      justify='start'
                      className=' hover:transform hover:-translate-y-1.5 hover:duration-700 duration-500 '
                    >
                      <a className='mb-2  text-[17px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] min-w-[38px] font-semibold cursor-pointer'>
                        {p.page}
                      </a>
                    </Flex>
                    <motion.div layoutId='barrette'>
                      <Container className='border-b-4 border-[#FF7E00] mx-3 rounded-[4px] min-w-[24px] mt-[2px] '></Container>
                    </motion.div>
                  </Container>
                ) : (
                  <a className=' pt-4  font-normal text-[17px] text-center text-[#37474F] min-w-[38px] hover:transform hover:-translate-y-1 hover:duration-700 duration-500	 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#FF7E00] to-[#FFB873]'>
                    {p.page}
                  </a>
                )}
              </Link>
            );
          })}

          <Link href='/contactus' passHref>
            <div>
              <Container className=' cursor-pointer text-center rounded-[50px]  bg-gradient-to-r from-[#FF7E00] to-[#FDBB7E] text-white text-[17px] font-normal m-auto p-2 px-6 mt-[6px]'>
                Contact
              </Container>
            </div>
          </Link>
        </Flex>
      </Flex>{" "}
    </Container>
  );
};
export default MenuDesktop;
