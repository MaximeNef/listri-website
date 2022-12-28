import React from 'react';
import { PrismicRichText } from '@prismicio/react';

import Container from '../../src/components/shared/composers/container';
import MyImage from '../../src/components/shared/composers/myimage';

const BlogsTest = ({ slice, current }) => {
  return (
    <Container className="">
      <section className="">
        <h1 className="font-medium text-[40px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] md:mx-[20%]">
          {slice?.items?.map(
            (
              item,
              i /* import { PrismicRichText } from '@prismicio/react' */
            ) => (
              <PrismicRichText field={item.title} key={i} />
            )
          )}
        </h1>

        <Container className="font-light  leading-6 text-[17px]  mt-5 text-center mx-5 md:mx-20 md:mb-10 md:mx-[20%]">
          {slice?.items?.map(
            (
              item,
              i /* import { PrismicRichText } from '@prismicio/react' */
            ) => (
              <PrismicRichText field={item.description} key={i} />
            )
          )}
        </Container>
        <Container className=" mt-[-80px] mb-[-50px] md:mb-10 md:mt-0  ">
          {slice?.items?.map((item, i) => (
            <MyImage
              source={item.img.url}
              key={i}
              h="500"
              w="100"
              objectFit={'contain'}
              className=""
            />
          ))}{' '}
        </Container>
      </section>
    </Container>
  );
};

export default BlogsTest;
