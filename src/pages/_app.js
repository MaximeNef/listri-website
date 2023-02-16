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

  // useEffect(() => {
  //   tarteaucitron.init({
  //     privacyUrl: "" /* Privacy policy url */,
  //     bodyPosition:
  //       "bottom" /* or top to bring it as first element for accessibility */,

  //     hashtag: "#tarteaucitron" /* Open the panel with this hashtag */,
  //     cookieName: "tarteaucitron" /* Cookie name */,

  //     orientation: "middle" /* Banner position (top - bottom) */,

  //     groupServices: false /* Group services by category */,
  //     serviceDefaultState: "wait" /* Default state (true - wait - false) */,

  //     showAlertSmall: false /* Show the small banner on bottom right */,
  //     cookieslist: false /* Show the cookie list */,

  //     closePopup: false /* Show a close X on the banner */,

  //     showIcon: true /* Show cookie icon to manage cookies */,
  //     //"iconSrc": "", /* Optionnal: URL or base64 encoded image */
  //     iconPosition:
  //       "BottomRight" /* BottomRight, BottomLeft, TopRight and TopLeft */,

  //     adblocker: false /* Show a Warning if an adblocker is detected */,

  //     DenyAllCta: true /* Show the deny all button */,
  //     AcceptAllCta: true /* Show the accept all button when highPrivacy on */,
  //     highPrivacy: true /* HIGHLY RECOMMANDED Disable auto consent */,

  //     handleBrowserDNTRequest: false /* If Do Not Track == 1, disallow all */,

  //     removeCredit: false /* Remove credit link */,
  //     moreInfoLink: true /* Show more info link */,

  //     useExternalCss: false /* If false, the tarteaucitron.css file will be loaded */,
  //     useExternalJs: false /* If false, the tarteaucitron.js file will be loaded */,

  //     //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */

  //     readmoreLink: "" /* Change the default readmore link */,

  //     mandatory: true /* Show a message about mandatory cookies */,
  //     mandatoryCta: true /* Show the disabled accept button when mandatory on */,
  //   });
  // }, []);

  return (
    <>
      <Script src='https://tarteaucitron.io/load.js?domain=listri.digital&uuid=0a64ae09d7ffcf852d1bd8810a989f6052af1255'></Script>
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
      {/* UXWIZZ script  */}
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
