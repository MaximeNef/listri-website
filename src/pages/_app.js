import "../styles/globals.css";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver } from "../../prismicio";
import { repositoryName } from "../../prismicio";
import { useEffect, useState } from "react";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [state, setState] = useState(() => {
    return "state";
  });

  return (
    <>
      {/* <!-- Start cookieyes banner --> */}
      <Script
        id='cookieyes'
        type='text/javascript'
        src='https://cdn-cookieyes.com/client_data/17dc236a34b2a9bb808870a7/script.js'
      ></Script>
      {/* <!-- End cookieyes banner -->  */}
      {/* GOOGLE ANALYTICS script  */}
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy='lazyOnload' id='my-script'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Script src='https://www.googleoptimize.com/optimize.js?id=OPT-M2K9QMP'></Script>
      {/* <!-- Google Tag Manager --> */}
      {/* <script>
        {`
   (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5HHRB8L')
  `}
      </script> */}
      {/* <!-- End Google Tag Manager --> */}
      {/* UXWIZZ script update script */}
      <Script id='uxwizz'>
        UST_CT = []; UST = "
        {"s: Date.now(), addTag: function(tag) {UST_CT.push(tag)} "}
        ";UST.addEvent = UST.addTag;
      </Script>
      <Script
        src='https://stats.listri.digital/server/ust.min.js?v=4.5.0'
        async
      ></Script>
      {/* FIN UXWIZZ script  */}
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href} passHref>
            <a {...props}>{children}</a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>{" "}
    </>
  );
}
