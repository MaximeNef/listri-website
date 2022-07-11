import React from "react";
import { PrismicRichText } from "@prismicio/react";

import Container from "../../src/components/shared/composers/container";
import MyImage from "../../src/components/shared/composers/myimage";

const BlogsTest = ({ slice, current }) => {
  console.log(current, "current");
  return (
    <Container className=''>
      <section>
        <Container className='font-medium text-[40px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF7E00] to-[#FFB873] '>
          {slice?.items?.map(
            (
              item,
              i /* import { PrismicRichText } from '@prismicio/react' */
            ) => (
              <PrismicRichText field={item.title} key={i} />
            )
          )}
        </Container>
        <Container className='font-light  leading-6 text-[17px] mx-5 mt-5 text-center'>
          {slice?.items?.map(
            (
              item,
              i /* import { PrismicRichText } from '@prismicio/react' */
            ) => (
              <PrismicRichText field={item.description} key={i} />
            )
          )}
        </Container>
        <Container className='relative mx-5 my-10  md:min-h-[500px]'>
          {slice?.items?.map((item, i) => (
            <MyImage
              source={item.img.url}
              key={i}
              h='300'
              w='100'
              objectFit={"cover"}
              className='rounded-tr-[50px] rounded-bl-[50px] rounded-tl-[10px] rounded-br-[10px] w-fit '
            />
            // <img src={item.img.url} alt={item.img.alt} key={i} />
          ))}{" "}
        </Container>
      </section>
    </Container>
  );
};

export default BlogsTest;
