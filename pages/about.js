import Head from "next/head";
import SubPageCard from "../components/SubPageCard";

export default function About() {
    return (
        <div>
            <Head>
                <title>UR Newman - About</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Catholic Community at the University of Rochester"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="subpage-cards pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="display-5">About</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Staff" img="/images/about/1.png"
                                     description="You can find all of our current staff here." link="/groups/staff"/>
                        <SubPageCard name="Student Leadership" img="/images/about/2.png"
                                     description="You can find all of our current student leaders here." link="/groups/student-leadership"/>
                        <SubPageCard name="Awards" img="/images/about/3.jpg"
                                     description="See all of our past awards here." link="/awards"/>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Our Patron Saint" img="/images/about/4.png"
                                     description="Learn about St. John Henry Cardinal Newman here." link="/jhn"/>
                        <SubPageCard name="Contact Us" img="/images/about/5.jpg"
                                     description="Find our contact information here." link="/contact-us"/>
                    </div>
                </div>
            </div>
        </div>
    )
}