import Head from "next/head";
import Footer from "../components/Footer"
import Link from "next/link"
import { Container, Row, Col, Button } from "react-bootstrap";
import TextSignUp from "../components/TextSignUp";

export default function Update() {
    return (
        <div>
            <Head>
                <title>UR Newman - Register/Update Information</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color">
                <Container>
                    <Row>
                        <Col className="mt-5">
                            <div className="text-center">
                                <h1 className="display-5">God Bless and Welcome!</h1>
                                <p>Thank you for taking the time to visit our website! If you have not already seen some of the amazing ministries that we offer here at Newman, please take a minute to navigate to the different tabs and pages that describe the various activities that keep our students engaged and which help them mature in their personal, professional, and spiritual lives. We ask that you also help us keep our records accurate and up-to-date by filling out one of the easy-to-use forms on this page. We thank you again for all that you do for the Catholic Newman Community at the University of Rochester!</p>
                            </div>
                            <div className="text-end">
                                <img src="../images/update/1.png" style={{ maxWidth: '40%' }} alt="Father Cool's Signature" />
                                <p>Rev. Brian C. Cool</p>
                                <p>Director</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="py-5 text-center">
                        <Col>
                            <Link
                                href="https://secure.lglforms.com/form_engine/s/UMpzeAs7RgPuKBQ6edk2Ug"
                                passHref
                                legacyBehavior><Button>River Campus or Eastman Campus</Button></Link>
                        </Col>
                        <Col>
                            <Link
                                href="https://secure.lglforms.com/form_engine/s/DNO0pj8hFLfNtS0XhzQz_A"
                                passHref
                                legacyBehavior><Button>Medical Center Campus</Button></Link>
                        </Col>
                        <Col>
                            <Link
                                href="https://secure.lglforms.com/form_engine/s/zGd9Z7mX7JBVi_JsaeaNmQ"
                                passHref
                                legacyBehavior><Button>Update Existing Information</Button></Link>
                        </Col>
                    </Row>
                </Container>
            </div>

            <TextSignUp />

            <Footer />
        </div>
    );
}