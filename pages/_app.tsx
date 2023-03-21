import '../styles/globals.css'

import type { AppProps } from 'next/app';
import {Poppins} from "@next/font/google";
import {ReadingBar} from "@components";
import classNames from "classnames";

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className={classNames(poppins.className)}>
          <Component {...pageProps}  />
      </div>
  );
}
