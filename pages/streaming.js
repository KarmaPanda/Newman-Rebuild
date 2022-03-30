import Head from "next/head";
import HeroAlt from "../components/HeroAlt";
import StreamingModule from "../components/StreamingModule";
import Footer from "../components/Footer"

export default function Streaming() {
    return (
        <div>
            <Head>
                <title>UR Newman - Streaming</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <picture>
                <source media="(min-width:1000px)" srcSet="/images/streaming/1.png" />
                <img width="100%" src="/images/streaming/1.png" alt="Streaming Newman" />
            </picture>

            <HeroAlt title="" description={'Click <a href="massparts" style="text-decoration:none">here</a> to view our weekly bulletin and follow along with the music and Mass parts.'}/>
            <StreamingModule/>
            <Footer/>
        </div>
    )
}