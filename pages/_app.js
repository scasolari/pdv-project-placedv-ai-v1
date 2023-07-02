import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import {useEffect} from "react";
import {SessionProvider} from "next-auth/react";

export default function App({Component, pageProps: { session, ...pageProps }}) {
  useEffect(() => {
    console.log(process.env.NODE_ENV)
  }, [])
  return <>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    <Analytics />
  </>
}
