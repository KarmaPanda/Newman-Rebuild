import Head from "next/head";
import Footer from "../components/Footer"
import SubPageCard from "../components/SubPageCard";

export default function About() {
    return (
        <div>
            <Head>
                <title>UR Newman - About</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="subpage-cards pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="display-5">About</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Contact Us" img="/images/about/1.jpg"
                            description="" link="/contact-us" />
                        <SubPageCard name="Our Patron Saint" img="/images/about/2.jpg"
                            description="" link="/jhn" />
                        <SubPageCard name="Staff" img="/images/about/3.jpg"
                            description="" link="/groups/staff" />
                        <SubPageCard name="Student Leadership" img="/images/about/4.jpg"
                            description="" link="/groups/student-leadership" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}