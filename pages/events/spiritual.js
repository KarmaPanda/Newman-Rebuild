import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function Spiritual() {
    // Combine Adoration and Guided Meditation
    return (
        <div>
            <Head>
                <title>UR Newman - Spiritual Events</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Check here for our spiritual events!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h1 className="display-5 pb-5">Spiritual Events</h1>
                            <h2 className="display-6">Adoration</h2>
                            <img className="img-fluid" src="../images/events/spiritual/1.png" alt="Lecture Series"></img>
                            <p className="pt-1">Amidst the whirlwind of campus life, Adoration is the rare and precious chance to spend a few moments in restful silence with the Blessed Sacrament. Additionally, each first Friday of the month (Academic Year only), the Eucharist is reserved for students to have a chance to pray in the presence of Christ. Written prayer suggestions are provided, or you can bring a rosary or Bible, or even just sit quietly. Students are always welcome to drop by the Interfaith Chapel (River Level) any time from 12:30-1:30pm on first Fridays.</p>
                        </Col>
                    </Row>
                    <Row className="text-center pt-5">
                        <Col>
                            <h2 className="display-6">Guided Meditation</h2>
                            <img className="img-fluid" src="../images/events/spiritual/2.jpg" alt="Lecture Series"></img>
                            <p className="pt-1">Join Sr. Leandra on a Monday nights at 7pm (Academic Year only) for Guided Meditation, as she utilizes various Christian spiritual practices to delve into a deeper understanding of the journey of faith in our very own lives.  Join her in the Interfaith Chapel (Middle Level) for one week or all, leaving yourself refreshed and ready to tackle the week ahead with the power of prayer, stillness, and calm in your hearts.</p>
                            <p>As part of last year&apos;s prayer experiences, we invited the <a href="https://womenofthewell.com/">Women of the Well</a> to perform a dramatic interpretation of those unknown and little known women in Scripture, Tradition, and contemporary life.  Entitled, <i>Christ on the Margins:  Meet Hidden Women of Scripture</i>, you can watch it in full below.</p>
                            <div className="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/v43O8C8yx2E" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}