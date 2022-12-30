import React from 'react';
import Container from '../../../shared/composers/container';
import CardEncorePlus from './CardEncorePlus';

const EncorePlus = ({ EncorePlus }) => {
  return (
    <Container>
      <p className="text-[37px] mb-[40px] font-bold leading-[44px] text-darkBlue text-center">
        Encore +{' '}
      </p>
      {EncorePlus.map((encore, i) => {
        return <CardEncorePlus key={i} i={i} encore={encore} />;
      })}
    </Container>
  );
};

export default EncorePlus;
