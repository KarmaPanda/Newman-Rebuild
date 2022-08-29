import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function Rosary() {
    // Combine Karios Retreat and One Day Retreat
    return (
        <div>
            <Head>
                <title>UR Newman - Rosary Group</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Learn more about our rosary group here!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h1 className="display-5 pb-5">Rosary</h1>
                            <img className="img-fluid" src="../images/groups/rosary/1.png" alt="Rosary Group"></img>
                            <p className="pt-1">Mary is your mother too! Rosary group comes together every Tuesday to pray the Rosary for our community and individual needs. We pray from 6-6:30pm on the Middle Level. Rosaries and prayer booklets are always provided. Participants take turns leading prayers, particularly if you know them in another language. Come once a semester or every week, or some amount in between to join in this time-honored Catholic prayer.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}