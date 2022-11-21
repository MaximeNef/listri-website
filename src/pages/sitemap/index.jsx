import Head from "next/head";

const Sitemap = ({ blogs }) => {
  return (
    <div>
      <Head>
        <meta charset='utf-8' />
        <title>listri.digital Site Map</title>
        <meta
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
          name='viewport'
        />
      </Head>

      <body>
        <div id='top'>
          <nav>listri.digital HTML Site Map</nav>
          <h3>
            <span>
              Last updated: 2022, October 21
              <br />
              Total pages: 16
            </span>
            <a href='https://listri.digital'>listri.digital Homepage</a>
          </h3>
        </div>
        <div id='cont'>
          <ul className='level-0'>
            <li className='lhead'>
              / <span className='lcount'>6 pages</span>
            </li>

            <li className='lpage'>
              <a
                href='https://listri.digital/'
                title='Listri Agence Digitale - Home'
              >
                Listri Agence Digitale - Home
              </a>
            </li>
            <li className='lpage'>
              <a
                href='https://listri.digital/services'
                title='Listri Agence Digitale - Service'
              >
                Listri Agence Digitale - Service
              </a>
            </li>
            <li className='lpage'>
              <a
                href='https://listri.digital/realisations'
                title='Listri Agence Digitale - Réalisations'
              >
                Listri Agence Digitale - Réalisations
              </a>
            </li>
            <li className='lpage'>
              <a
                href='https://listri.digital/blogs'
                title='Listri Agence Digitale - Blog '
              >
                Listri Agence Digitale - Blog
              </a>
            </li>
            <li className='lpage'>
              <a
                href='https://listri.digital/team'
                title='Listri Agence Digitale - Team '
              >
                Listri Agence Digitale - Team
              </a>
            </li>
            <li className='lpage last-page'>
              <a
                href='https://listri.digital/contactus'
                title='Listri Agence Digitale '
              >
                Listri Agence Digitale
              </a>
            </li>
            <li>
              <ul className='level-1'>
                <li className='lhead'>
                  blogs/ <span className='lcount'>3 pages</span>
                </li>
                {blogs.map((blog) => {
                  <li className='lpage'>
                    <a
                      href={`https://listri.digital/blogs/${blog.uid}`}
                      title={`https://listri.digital/blogs/${blog.data.slices[0].items[0].metatitle[0].text}`}
                    >
                      https://listri.digital/blogs/{blog.uid}
                    </a>
                  </li>;
                })}
              </ul>
              <ul className='level-1'>
                <li className='lhead'>
                  services/ <span className='lcount'>7 pages</span>
                </li>

                <li className='lpage'>
                  <a
                    href='https://listri.digital/services/creation-de-contenu'
                    title='https://listri.digital/services/creation-de-contenu'
                  >
                    https://listri.digital/services/creation-de-contenu
                  </a>
                </li>
                <li className='lpage'>
                  <a
                    href='https://listri.digital/services/website'
                    title='https://listri.digital/services/website'
                  >
                    https://listri.digital/services/website
                  </a>
                </li>
                <li className='lpage'>
                  <a
                    href='https://listri.digital/services/referencement'
                    title='https://listri.digital/services/referencement'
                  >
                    https://listri.digital/services/referencement
                  </a>
                </li>
                <li className='lpage'>
                  <a
                    href='https://listri.digital/services/social-media'
                    title='https://listri.digital/services/social-media'
                  >
                    https://listri.digital/services/social-media
                  </a>
                </li>
                <li className='lpage'>
                  <a
                    href='https://listri.digital/services/Digital-business-card'
                    title='https://listri.digital/services/Digital-business-card'
                  >
                    https://listri.digital/services/Digital-business-card
                  </a>
                </li>
                <li className='lpage'>
                  <a
                    href='https://listri.digital/services/Optimisation-Web'
                    title='https://listri.digital/services/Optimisation-Web'
                  >
                    https://listri.digital/services/Optimisation-Web
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </body>
    </div>
  );
};
export default Sitemap;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const blogs = await client.getAllByType("BlogPost", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: {
      blogs,
    },
  };
}
