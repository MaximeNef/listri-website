import Link from 'next/link';
import Flex from '../../shared/composers/flex';

const serviceHeroV2 = ({ title, subtitle, linkText, href, textWhite }) => {
  return (
    <Flex className={'flex-col justify-center'}>
      <div
        className={`${
          textWhite ? 'text-[#FBFBFD]' : ''
        } text-3xl text-center font-bold leading-9`}
      >
        {title}
      </div>
      <p
        className={`${
          textWhite ? 'text-[#FBFBFD]' : ''
        } text-center text-[17px] mt-[3px] mb-[7px]`}
      >
        {subtitle}
      </p>
      <div className="text-[#FF7E00] text-center underline">
        <Link href={href}>
          <a>{linkText}</a>
        </Link>
      </div>
    </Flex>
  );
};

export default serviceHeroV2;
