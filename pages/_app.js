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
            <Component {...pageProps} />
            <Analytics />
          </>
      }
  </>
}
