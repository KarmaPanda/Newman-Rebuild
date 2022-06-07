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
            <Notification message="Temporarily unavaliable. Updates are coming in the next couple of days."></Notification>
            <div className="subpage-cards pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="display-5">Events</h1>
                        </div>
                    </div>
                    {/*<div className="row justify-content-center">
                        <SubPageCard name="Home Cooked Meals" img="/images/events/1.png"
                                     description="" link="/events/adoration"/>
                        <SubPageCard name="Agape Latte" img="/images/events/2.png"
                                     description="" link="/events/agape"/>
                        <SubPageCard name="Awards" img="/images/events/3.png"
                                     description="" link="/events/asb"/>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Guided Meditation" img="/images/events/4.png"
                                     description="" link="/events/meditation"/>
                        <SubPageCard name="Daily Mass & InstaMass" img="/images/events/5.png"
                                     description="" link="/events/instamass"/>
                        <SubPageCard name="Kairos Retreat" img="/images/events/6.png"
                                     description="" link="/events/kairos"/>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Lecture Series" img="/images/events/7.png"
                                     description="" link="/events/lectures"/>
                        <SubPageCard name="Mass" img="/images/events/8.png"
                                     description="" link="/events/mass"/>
                        <SubPageCard name="Networking" img="/images/events/9.png"
                                     description="" link="/events/networking"/>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Newman Cup" img="/images/events/10.png"
                                     description="" link="/events/cup"/>
                        <SubPageCard name="Newman Nite" img="/images/events/11.png"
                                     description="" link="/events/newman-night"/>
                        <SubPageCard name="One Day Retreat" img="/images/events/12.jpg"
                                     description="" link="/events/retreats"/>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Orientation" img="/images/events/13.png"
                                     description="" link="/orientation"/>
                        <SubPageCard name="Third Sunday Supper" img="/images/events/14.png"
                                     description="" link="/events/supper"/>
                        <SubPageCard name="Wilderness Retreat" img="/images/events/15.png"
                                     description="" link="/events/wilderness"/>
    </div>*/}
                </div>
            </div>
            <Footer />
        </div>
    )
}