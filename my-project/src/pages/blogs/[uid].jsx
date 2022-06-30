import { createClient, linkResolver } from "../../../prismicio";
import { PrismicLink, PrismicText } from "@prismicio/react";
import Container from "../../components/shared/composers/container";
import { SliceZone } from "@prismicio/react";
import { BlogsTest, components } from "../../../slices";
import * as prismicH from "@prismicio/helpers";
import { useState } from "react";

export default function Blog({ doc }) {
  console.log(doc, "blog");

  return (
    <Container>
      <SliceZone slices={doc.data.slices} components={components} />
    </Container>
  );
}

export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("BlogPost");
  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),

    fallback: false,
  };
}
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const doc = (await client.getByUID("BlogPost", params.uid)) || {};

  return {
    props: {
      doc,
    },
  };
}
