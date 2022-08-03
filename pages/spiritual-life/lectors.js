import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function Faith() {
    // Combined pages of Lecture Series and Networking
    return (
        <div>
            <Head>
                <title>UR Newman - Volunteer Ministry</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Learn here about volunteering!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h1 className="display-5 pb-5">Volunteer Ministry</h1>
                            <img className="img-fluid pb-5" src="../images/spiritual-life/lectors/1.png" alt="Volunteer Ministry"></img>
                            <p>How can I be more involved in the Catholic Mass? This question is often asked by members of our Newman community. Acolytes, Communion Ministers, Lectors, and Sacristans are four ministerial positions in which members of our community participate. Acolytes assist the presider during Mass and other services, Communion Ministers distribute the Eucharist during Mass, Lectors proclaim the scripture readings at our liturgies, and Sacristans help to set up and take down each liturgy. Acolytes, Communion Ministers, Lectors, and Sacristans come to a session of spiritual, theological, and practical preparation to minister to our Newman community. If you are interested in becoming more involved in our celebrations, consider these ministries or inquire about other ways to become a more active member of Newman.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}