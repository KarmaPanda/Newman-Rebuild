import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Streaming() {
    return(
        <div>
            <Head>
                <title>UR Newman - Streaming</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Catholic Community at the University of Rochester"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
        </div>
    )
}