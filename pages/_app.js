import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import {BiPlanet} from "react-icons/bi";
import {BsStars} from "react-icons/bs";

export default function App({ Component, pageProps }) {
  if (process.env.NODE_ENV === "production") {
    return <>
      <div className="w-2/4 mx-auto mt-20">
        <div className="w-full flex justify-center gap-5">
          <BiPlanet size={36}/> <BsStars size={36}/>
        </div>
        <div className="mt-10 text-center">
          <h3 className="text-3xl font-medium">I&apos;m predicting...</h3>
        </div>
      </div>
      <div className="w-2/4 mx-auto mt-20">
        <p className="text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Placedv.
        </p>
      </div>
    </>
  } else {
    return <>
      <Component {...pageProps} />
      <Analytics />
    </>
  }
}
