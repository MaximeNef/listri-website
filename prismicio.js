import * as prismic from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';
import * as prismicNext from '@prismicio/next';

import sm from './sm.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = new URL(sm.apiEndpoint).hostname.split('.')[0];

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
export const linkResolver = (doc) => {
  if (doc.type === 'BlogPost') {
    return `/blogs/${doc.uid}`;
  }

  if (doc.type === 'realisation-client') {
    return `/realisations/${doc.uid}`;
  }

  // if (doc.type === "page") {
  //   return `/${doc.uid}`;
  // }

  //return `/blogs/${doc.uid}`;
};

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint);

  prismicNext.enableAutoPreviews({
    client,
    context: config?.context,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
