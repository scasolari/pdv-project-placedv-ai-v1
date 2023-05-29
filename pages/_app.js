import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import Script from "next/script";
import {useEffect} from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log(process.env.NODE_ENV)
  }, [])
  return <>
      {process.env.NODE_ENV === "development"
          ? <>
            <Component {...pageProps} />
            <Analytics />
          </>
          : <>
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=5271653479`}/>
            <Script
                id=""
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8W1GB5H4DP', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <Component {...pageProps} />
            <Analytics />
          </>
      }
  </>
}
