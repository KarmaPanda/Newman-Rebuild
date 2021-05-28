import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from "./Navbar";
import Hero from "./Hero";
import TextSignUp from "./TextSignUp";

export default function Home() {
    return (
        <div>
            <Head>
                <title>UR Newman - Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Catholic Community at the University of Rochester"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <Hero/>
            <TextSignUp/>
            <div className="container">
                <div className="row">
                    <div className="col">

                    </div>
                </div>
            </div>
        </div>
    )
}
