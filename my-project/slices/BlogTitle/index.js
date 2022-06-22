import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Container from "../../src/components/shared/composers/container";

const BlogTitle = ({ slice }) => (
  <section>
    {slice?.items?.map(
      (item, i /* import { PrismicRichText } from '@prismicio/react' */) => (
        <PrismicRichText field={item.BlogTitle} />
      )
    )}
  </section>
);

export default BlogTitle;
