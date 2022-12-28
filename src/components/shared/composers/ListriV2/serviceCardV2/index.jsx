import MyImage from '../../myimage';
import ServiceHeroV2 from '../serviceHeroV2';
import Flex from '../../flex';

const ServiceCardV2 = ({ title, subtitle, linkText, href, imgSrc, blueBg }) => {
  const svg = `<svg width="390" height="78" viewBox="0 0 390 78" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0C3.26948 21.2196 12.176 27.4104 39.5 29H341C368.062 29 390 50.938 390 78H0V0Z" fill="${
    blueBg ? '#283445' : ''
  }"/>
  </svg>`;
  const svgBottom = `<svg width="390" height="78" viewBox="0 0 390 78" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 78C3.26948 56.7804 12.176 50.5896 39.5 49H341C368.062 49 390 27.062 390 0H0V78Z" fill="${
    blueBg ? '#283445' : ''
  }"/>
  </svg>`;

  return (
    <div className="ml-[-25px] mr-[-25px]">
      <div
        dangerouslySetInnerHTML={{
          __html: svg,
        }}
      />

      <Flex
        className={`${blueBg ? 'bg-darkBlue ' : ''} flex-col py-[90px] px-5 `}
      >
        <ServiceHeroV2
          title={title}
          subtitle={subtitle}
          linkText={linkText}
          href={href}
          textWhite={blueBg}
        />
        <div className="mx-auto mt-8">
          <MyImage source={imgSrc} h={500} w={500} />
        </div>
      </Flex>
      <div
        className="mt-[-1px]"
        dangerouslySetInnerHTML={{
          __html: svgBottom,
        }}
      />
    </div>
  );
};

export default ServiceCardV2;
