import Head from "next/head";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "../../components/Footer";

import HeroImage from "../../components/HeroImage"

export default function Collection() {
    return (
        <div>
            <Head>
                <title>UR Newman - Mass Collection</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Give to our mass collection here!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Replace with mobile friendly banner. */}
            <HeroImage imageSrc="../images/giving/collection/1.png" mobileImageSrc="../images/giving/collection/1.png" description="For it is in giving that we receive. ~ St.Francis of Assisi" />

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h2>Give to Our Mass Collection!</h2>
                            <hr />
                            <p>“We humbly ask for your support during this critical time. Your donation will
                                allow us to continue our virtual ministry across the globe. Thank you for your consideration!”</p>
                            <a href="https://secure.lglforms.com/form_engine/s/QBp5N_7YjQ8XUNWCMR8n-A"><Button>Click Here To Donate</Button></a>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}