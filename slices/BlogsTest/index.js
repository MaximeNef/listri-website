import React from "react";
import { PrismicRichText } from "@prismicio/react";

import Container from "../../src/components/shared/composers/container";

const BlogsTest = ({ slice, current }) => {
  console.log(current, "current");
  return (
    <Container>
      <section>
        <Container className='text-2xl'>
          {slice?.items?.map(
            (
              item,
              i /* import { PrismicRichText } from '@prismicio/react' */
            ) => (
              <PrismicRichText field={item.title} />
            )
          )}
        </Container>
        {slice?.items?.map(
          (
            item,
            i /* import { PrismicRichText } from '@prismicio/react' */
          ) => (
            <PrismicRichText field={item.description} />
          )
        )}
        {slice?.items?.map((item, i) => (
          <img src={item.img.url} alt={item.img.alt} />
        ))}{" "}
      </section>
    </Container>
  );
};

export default BlogsTest;
