import Container from '../../shared/composers/container';
import Flex from '../../shared/composers/flex';
import RealisationLabelCard from './RealisationLabelCard';

const RealisationLabelSlider = () => {
  const realisations = [
    {
      source: '/assets/logoV2/siteWeb.svg',
      text: 'Site-web',
      ancre: '#Site-web',
    },
    {
      source: '/assets/logoV2/brand.svg',
      text: 'Marketing',
      ancre: '#Marketing',
    },
    {
      source: '/assets/logoV2/referencement.svg',
      text: 'référencement',
      ancre: '#Site-web',
    },
    {
      source: '/assets/logoV2/opti.svg',
      text: 'Optimisation',
      ancre: '#Site-web',
    },
    {
      source: '/assets/logoV2/digitalCard.svg',
      text: 'Digital Card',
      ancre: '#Site-web',
    },
  ];
  return (
    <Container>
      <Flex className="snap-mandatory snap-x overflow-scroll mx-[-25px] pl-2">
        <Container className={'min-w-[25px] '} />
        {realisations.map((realisation, i) => {
          return (
            <a key={i} href={realisation.ancre}>
              <RealisationLabelCard
                source={realisation.source}
                text={realisation.text}
              />
            </a>
          );
        })}
        <Container className={'min-w-[20px]'} />
      </Flex>
    </Container>
  );
};
export default RealisationLabelSlider;
