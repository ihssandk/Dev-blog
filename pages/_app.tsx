import React , {useEffect,useState} from "react";
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import {Layout} from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
