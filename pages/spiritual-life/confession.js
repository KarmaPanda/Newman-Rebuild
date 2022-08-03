import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function Confession() {
    return (
        <div>
            <Head>
                <title>UR Newman - Reconciliation</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Learn more about our reconciliation program here!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <h1 className="display-5 pb-5">Reconciliation</h1>
                        <img className="img-fluid pb-5" src="../images/spiritual-life/confession/1.png" alt="Reconciliation"></img>

                        <Col>
                            <p>Did you know that the Newman Community offers confession/reconciliation to best fit your schedule! Additionally, every Advent and Lent we have special days we celebrate this sacrament. We invite you to come experience this sacrament of love and forgiveness again! No matter how long it may have been since you’ve gone to confession, Fr. Cool and any other priest will help walk you through each step.</p>
                            <div className="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/tvo0OCcp600" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </div>
                        </Col>
                        <Col>
                            <p>Helpful how-to guide and examination of conscience:</p>
                            <embed src="../files/confession-how-to.pdf" width="100%" height="1030" type='application/pdf' />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}