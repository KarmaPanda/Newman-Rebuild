import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function HospitalMinistry() {
    return (
        <div>
            <Head>
                <title>UR Newman - Hospital Ministry</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Learn more about hospital ministry here!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <h1 className="display-5 pb-5">Hospital Ministry</h1>
                        <Col>
                            <div className="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/K23AKxm7wD0" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </div>
                        </Col>
                        <Col>
                            <img className="img-fluid" src="../images/spiritual-life/hospital-ministry/1.png" alt="Hospital Ministry"></img>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}