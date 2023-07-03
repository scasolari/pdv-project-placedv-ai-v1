import '../styles/globals.css'
import {useEffect} from "react";

export default function App({Component, pageProps: { session, ...pageProps }}) {
  useEffect(() => {
    console.log(process.env.NODE_ENV)
  }, [])
  return <>
    <Component {...pageProps} />
  </>
}
