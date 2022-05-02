import Head from "next/head";
import Navbar from "./Navbar";

import Script from 'next/script'
import { useEffect } from "react";

export default function Layout({ children }) {
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-110680425-1');
    }, [])

    return (
        <>
            <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta property="og:title" content="University of Rochester: Catholic Newman Community" />
                <meta property="og:type" content="website" />
            </Head>

            <Navbar />
            <main>{children}</main>

            <Script src="https://kit.fontawesome.com/b794bafed8.js" crossOrigin="anonymous" />

            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
                crossOrigin="anonymous" />

            <Script src="https://www.googletagmanager.com/gtag/js?id=UA-110680425-1" crossOrigin="anonymous" />
        </>
    )
}