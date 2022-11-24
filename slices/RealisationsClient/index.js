import React from 'react';
import { PrismicRichText } from '@prismicio/react';

const RealisationsClient = ({ slices }) => (
  <section>{slices[0].primary.client[0].text}</section>
);

export default RealisationsClient;
