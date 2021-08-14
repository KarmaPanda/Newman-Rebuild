import Head from 'next/head'
import Hero from "./Hero";
import TextSignUp from "./TextSignUp";
import HeroCarousel from "./HeroCarousel";
import StudentCarousel from "./StudentCarousel";
import WeeklySchedule from "./WeeklySchedule";

export default function Home() {
    return (
        <div>
            <Head>
                <title>UR Newman - Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Catholic Community at the University of Rochester"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <HeroCarousel/>
            <Hero/>
            <TextSignUp/>
            <StudentCarousel/>

            {/* TODO: Add Schedule */}
            <WeeklySchedule/>


            {/* TODO: Add Other Information and More Resources */}

            {/* TODO: Add What is Newman Carousel */}

            {/* TODO: Add Mission Statement and Vision Statement */}

            {/* TODO: Add Contact Us and Footer */}

            {/*<div className="container">
                <div className="row">
                    <div className="col">

                    </div>
                </div>
            </div>*/}
        </div>
    )
}
