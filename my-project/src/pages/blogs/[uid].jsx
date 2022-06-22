import { createClient, linkResolver } from "../../../prismicio";
import { PrismicLink, PrismicText } from "@prismicio/react";
import Container from "../../components/shared/composers/container";
import { SliceZone } from "@prismicio/react";
import { BlogsTest, components } from "../../../slices";
import * as prismicH from "@prismicio/helpers";

export default function Blog({ doc }) {
  console.log(doc, "blog");

  return (
    <Container>
      <SliceZone slices={doc.data.slices} components={components} />
    </Container>
  );
}

// export async function getStaticProps({ params, previewData }) {
//   const client = createClient({ previewData });
//   const uid = context.params.uid[params.uid.length - 1];
//   /*
//    * `params.uid` contains an array of each part of the URL separated by a `/`.
//    * In this example, the last part is the document's UID.
//    */

//   const doc = (await client.getByUID("blogs", uid)) || {};

//   return {
//     props: {
//       slices: doc.data.body,
//     },
//   };
// }

export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("BlogPost");
  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: true,
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
