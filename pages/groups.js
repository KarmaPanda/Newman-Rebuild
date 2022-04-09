import Head from "next/head";
import Footer from "../components/Footer"
import SubPageCard from "../components/SubPageCard";

export default function Groups() {
    return(
        <div>
            <Head>
                <title>UR Newman - Groups</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Catholic Community at the University of Rochester"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="subpage-cards pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="display-5">Groups</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Music Ministry/Choir" img="/images/groups/1.png"
                                     description="" link="/groups/music-ministry"/>
                        <SubPageCard name="Rosary Group" img="/images/groups/2.png"
                                     description="" link="/groups/rosary"/>
                        <SubPageCard name="St. Sebastian Society" img="/images/groups/3.png"
                                     description="" link="/groups/st-sebastian"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}