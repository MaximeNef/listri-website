import Link from 'next/link';
import Flex from '../../flex';
import MyImage from '../../myimage';

const ServiceHeroV2 = ({ title, subtitle, linkText, href, textWhite }) => {
  return (
    <Flex className={'flex-col justify-center'}>
      <div
        className={`${
          textWhite ? 'text-[#FBFBFD]' : 'text-darkBlue'
        } text-3xl text-center font-bold leading-9`}
      >
        {title}
      </div>
      <p
        className={`${
          textWhite ? 'text-[#FBFBFD]' : 'text-darkBlue'
        } text-center text-[17px] mt-[3px] mb-[7px]`}
      >
        {subtitle}
      </p>
      <div className="text-[#FF7E00] text-center underline">
        <Link href={href}>
          <a className="flex justify-center items-center">
            <div className="mr-1">{linkText}</div>
            <div>
              <MyImage source={'/assets/logoV2/arrow.svg'} w={15} h={9} />
            </div>
          </a>
        </Link>
      </div>
    </Flex>
  );
};

export default ServiceHeroV2;
