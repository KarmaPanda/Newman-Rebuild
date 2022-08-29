import Head from "next/head";
import Footer from "../components/Footer"
import SubPageCard from "../components/SubPageCard";

export default function Giving() {
    return (
        <div>
            <Head>
                <title>UR Newman - Giving</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="subpage-cards pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="display-5">Giving</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Annual Appeals" img="/images/giving/1.jpg"
                            description="" link="https://securelb.imodules.com/s/1676/giving1.aspx?sid=1676&gid=2&pgid=808&cid=1640&sort=1&bledit=1&dids=220.275&appealcode=13C2" />
                        {/*<SubPageCard name="Annual Appeals" img="/images/giving/1.jpg"
                            description="" link="/giving/annual-appeal" />*/}
                        <SubPageCard name="Building Project" img="/images/giving/2.jpg"
                            description="" link="/building" />
                        <SubPageCard name="Day of Giving" img="/images/giving/3.png"
                            description="" link="https://www.rochester.edu/giving/day-of-giving/?cfpage=/o/university-of-rochester/i/day-of-giving-2022/s/catholic-newman-community" />
                        {/*<SubPageCard name="Day of Giving" img="/images/giving/3.png"
                            description="" link="/giving/day-of-giving" />*/}
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="George Eastman Circle (5-Year Pledged Giving)" img="/images/giving/4.png"
                            description="" link="/giving/george-eastman-circle" />
                        <SubPageCard name="Mass Collection" img="/images/giving/5.jpg"
                            description="" link="/giving/collection" />
                        {/*<SubPageCard name="Special Appeals" img="/images/giving/6.jpg"
                            description="" link="/giving/special-appeal" />*/}
                        <SubPageCard name="Special Appeals" img="/images/giving/6.jpg"
                            description="" link="https://securelb.imodules.com/s/1676/giving19/giving19.aspx?sid=1676&gid=2&pgid=8922&cid=13809&sort=1&bledit=1&dids=220.275&appealcode=22C2V" />
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Wilson Society (Planned Giving)" img="/images/giving/7.png"
                            description="" link="/giving/planned-giving" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}