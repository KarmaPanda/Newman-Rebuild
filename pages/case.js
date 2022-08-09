import Head from "next/head";
import Footer from "../components/Footer"
import Notification from "../components/Notification";
import SubPageCard from "../components/SubPageCard";

export default function Case() {
    return (
        <div>
            <Head>
                <title>UR Newman - C.A.S.E</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="subpage-cards pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="display-5">Creating A Safe Environment Newsletters</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Diocese" img="/images/case/newsletters.jpg"
                            description="" link="https://www.dor.org/safe-environment/newsletters/" />
                        <SubPageCard name="Spring 2022" img="/images/case/spring.jpg"
                            description="" link="https://www.dor.org/wp-content/uploads/SafeEnvironment_Spring_2022.pdf" />
                        <SubPageCard name="Winter 2022" img="/images/case/winter.jpg"
                            description="" link="https://www.dor.org/wp-content/uploads/SafeEnvironment_Winter_2022.pdf" />
                        <SubPageCard name="Fall 2021" img="/images/case/fall.jpg"
                            description="" link="https://www.dor.org/wp-content/uploads/SafeEnvironment_Fall_2021.pdf" />
                        
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Summer 2021" img="/images/case/summer.jpg"
                            description="" link="https://www.dor.org/wp-content/uploads/SafeEnvironment_Summer_2021.pdf" />
                        <SubPageCard name="Spring 2021" img="/images/case/spring21.jpg"
                            description="" link="https://www.dor.org/wp-content/uploads/SafeEnvironment_Spring_2021.pdf" />
                        <SubPageCard name="Winter 2021" img="/images/case/winter21.jpg"
                            description="" link="https://www.dor.org/wp-content/uploads/SafeEnvironment_Winter_2021.pdf" /> 
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}