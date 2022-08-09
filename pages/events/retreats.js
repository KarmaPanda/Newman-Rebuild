import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function Retreats() {
    // Combine Karios Retreat and One Day Retreat
    return (
        <div>
            <Head>
                <title>UR Newman - Retreats</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Check here for our retreats!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h1 className="display-5 pb-5">Retreats</h1>
                            <h2 className="display-6">Kairos Retreat</h2>
                            <img className="img-fluid" src="../images/events/retreats/1.jpeg" alt="Kairos Retreat"></img>
                            <p><a href="https://secure.lglforms.com/form_engine/s/7IlrAQinbVwRGFKCNTSMHg">Click here to register!</a></p>
                            <p>Greek, Kairos means &quot;God&apos;s time.&quot; Join over 30 of your peers for this fantastic, life-changing retreat . . . a student favorite each semester! The entire weekend covers food, transportation and lodging. Scholarships are also available. Every year Kairos will be held each fall and each spring early in the semester.</p>
                            <p><a href="https://drive.google.com/file/d/0B_146wWmYBsVWjVMbzFGM0JhN1U/view?usp=sharing" target="_blank" rel="noreferrer">Support Kairos at Newman</a></p>
                        </Col>
                    </Row>
                    <Row className="text-center pt-5">
                        <Col>
                            <h2 className="display-6">One Day Retreat</h2>
                            <a href="https://secure.lglforms.com/form_engine/s/yp_le6CLvfUGLMQ8tS6T9g"><img className="img-fluid" src="../images/events/retreats/2.png" alt="One Day Retreat"></img></a>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}