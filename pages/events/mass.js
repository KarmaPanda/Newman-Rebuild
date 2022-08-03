import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function Mass() {
    // Combine Mass and Daily Mass & InstaMass
    return (
        <div>
            <Head>
                <title>UR Newman - Mass</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Learn more about our mass here!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h1 className="display-5 pb-5">Mass</h1>
                            <h2 className="display-6">Sunday Mass</h2>
                            <img className="img-fluid" src="../images/events/mass/1.jpg" alt="Sunday Mass"></img>
                            <p className="pt-1">Join the entire Newman Community as we gather each Sunday on the River Level of the Interfaith Chapel and via <Link href="/streaming" passHref>live streaming</Link> at 10:30am and 7pm (Academic Year only) for Mass.  Prayer is always plentiful, community is vibrant, and some sort of meal almost always follows each Mass.  Bring yourself, a friend, and/or family, and see what the Newman EXPERIENCE is all about!</p>
                            <p>To view this past Sunday&apos;s Mass, and previous Masses, please click <a href="https://www.youtube.com/playlist?list=PLzVtmzyY6OUTCUvWbuStsiX_GYQtgSPPP">here</a>.</p>
                        </Col>
                    </Row>
                    <Row className="text-center pt-5">
                        <Col>
                            <h2 className="display-6">Daily Mass & InstaMass</h2>
                            <img className="img-fluid" src="../images/events/mass/2.jpg" alt="Daily Mass & InstaMass"></img>
                            <p className="pt-1">Join us for daily Mass (Thursday at 12:30pm) and InstaMass (Wednesdays at 9pm) every week
                                (Academic Year only) in the Interfaith Chapel (Sanctuary Level) and via <a
                                    href="https://www.instagram.com/ur_newman/">Instagram Live</a>. Pray and connect with
                                friends as a quick study break between classes or an end to the busy day!</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}