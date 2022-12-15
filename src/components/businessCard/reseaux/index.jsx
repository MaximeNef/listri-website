import Flex from "../../shared/composers/flex";
import MyImage from "../../shared/composers/myimage";

const Reseaux = () => {
  return (
    <div className='mx-[25px]'>
      <Flex align='center'>
        <h2 className='text-[20px] font-light '>réseaux</h2>
        <div className='w-full h-[1px] ml-1 bg-[#B4B4B4]' />
      </Flex>
      <div className='space-x-[32px] my-[22px] flex'>
        <div>
          <MyImage
            source='/assets/logo/linkedinBusiness.svg'
            w={"40px"}
            h={"40px"}
          />{" "}
        </div>
        <div>
          {" "}
          <MyImage
            source='/assets/logo/instagramBusiness.svg'
            w={"40px"}
            h={"40px"}
          />
        </div>
        <div>
          {" "}
          <MyImage
            source='/assets/logo/facebookBusiness.svg'
            w={"40px"}
            h={"40px"}
          />{" "}
        </div>
      </div>
    </div>
  );
};
export default Reseaux;
