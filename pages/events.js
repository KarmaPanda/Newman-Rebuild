import Head from "next/head";
import Footer from "../components/Footer"
import Notification from "../components/Notification";
import SubPageCard from "../components/SubPageCard";

export default function Events() {
    return (
        <div>
            <Head>
                <title>UR Newman - Events</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="subpage-cards pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="display-5">Events</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Home Cooked Meals" img="/images/events/1.jpg"
                                     description="" link="/events/meals"/>
                        <SubPageCard name="Spiritual Events" img="/images/events/2.jpg"
                                     description="" link="/events/spiritual"/>
                        <SubPageCard name="Building the Faith" img="/images/events/3.jpg"
                                     description="" link="/events/faith"/>
                    </div>

                    <div className="row justify-content-center">
                        <SubPageCard name="Mass" img="/images/events/4.PNG"
                                     description="" link="/events/mass"/>
                        <SubPageCard name="Retreats" img="/images/events/5.jpg"
                                     description="" link="/events/retreats"/>
                        <SubPageCard name="St.Sebastian Society" img="/images/events/6.jpg"
                                     description="" link="/groups/st-sebastian"/>
                    </div>

                    <div className="row justify-content-center">
                        <SubPageCard name="Orientation" img="/images/events/7.JPG"
                                     description="" link="/orientation"/>
                        <SubPageCard name="Case" img="/images/events/7.JPG"
                                     description="" link="events/case"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}