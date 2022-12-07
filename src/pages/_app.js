import "../styles/globals.css";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver } from "../../prismicio";
import { repositoryName } from "../../prismicio";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  console.log("render");

  const [state, setState] = useState(() => {
    console.log("state initialize");
    return "state";
  });

  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <>
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
      {/* UXWIZZ script  */}
      <Script id='id'>
        UST_CT = [];UST = s: Date.now(), addTag: function(tag){" "}
        {UST_CT.push(tag)} ;UST.addEvent = UST.addTag;
      </Script>
      <Script
        src='https://stats.listri.digital/server/ust.min.js?v=4.5.0'
        async
      ></Script>
      {/* UXWIZZ script  */}
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
