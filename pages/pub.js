import Head from "next/head";
import Footer from "../components/Footer"
import SubPageCard from "../components/SubPageCard";

export default function Publications() {
    return(
        <div>
            <Head>
                <title>UR Newman - Publications</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Catholic Community at the University of Rochester"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="subpage-cards pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="display-5">Spiritual Life</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Annual Reports" img="/images/pub/1.jpg"
                            description="" link="/pub/annual-report" />
                        <SubPageCard name="Newsletters" img="/images/pub/2.png"
                            description="" link="/pub/newsletter" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}