import Head from "next/head";
import Footer from "../components/Footer"
import SubPageCard from "../components/SubPageCard";

export default function SpiritualLife() {
    return (
        <div>
            <Head>
                <title>UR Newman - Spiritual Life</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="subpage-cards pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="display-5">Spiritual Life</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Becoming Catholic/Confirmation" img="/images/spiritual-life/1.png"
                            description="" link="/spiritual-life/catholic" />
                        <SubPageCard name="Hospital Ministry" img="/images/spiritual-life/2.jpg"
                            description="" link="/spiritual-life/hospital-ministry" />
                        <SubPageCard name="Marriage/Weddings" img="/images/spiritual-life/3.png"
                            description="" link="/spiritual-life/marriage" />
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Reconciliation" img="/images/spiritual-life/4.png"
                            description="" link="/spiritual-life/confession" />
                        <SubPageCard name="Students Offering Support (Stephen Ministry)" img="/images/spiritual-life/5.png"
                            description="" link="/spiritual-life/stephen-ministry" />
                        <SubPageCard name="Volunteer Ministry" img="/images/spiritual-life/6.png"
                            description="" link="/spiritual-life/lectors" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}