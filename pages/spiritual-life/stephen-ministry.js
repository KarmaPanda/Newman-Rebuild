import Head from "next/head";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function StephenMinistry() {
    return (
        <div>
            <Head>
                <title>UR Newman - Stephen Ministry</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Learn more about our Stephen Ministry program here!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <h1 className="display-5 pb-5">Stephen Ministry</h1>
                        <Col>
                            <h2 className="display-6">Students Offering Support</h2>
                            <div className="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/8B2ysTtcHOE" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </div>
                            <p className="pt-5">Made up of fellow college students like yourself, this ministry is meant to be a way the Newman community can personally embrace you in the arms of Christ when you are in need.</p>
                            <p>Newman Stephen Ministers are students-Christian men and women-trained to provide one-to-one care to fellow students experiencing a difficult time in life, such as grief, a break-up, changing majors, uncertainties of life, chronic or terminal illness in the family, cultural adjustment, etc.</p>
                            <p>In the summer of 2016, the Newman Community certified Stephen Leaders through 50 hours of training. Through this training, these students have grown in their caregiving capacity to learn more about how to be compassionate, trustworthy, skilled, full of faith, and Christ centered. These ministers are well equipped to provide high quality, distinctively Christian care to the University of Rochester community.</p>
                            <p>Don’t hesitate to contact us and let us walk with you as Students Offering Support (SOS)!  We can be reached at +1 (585) 730-3019.</p>
                            <a href="https://secure.lglforms.com/form_engine/s/kqGDskOBNTI23T5DN8vTGg"><Button className="my-5">Stephen Minister Application</Button></a>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <img className="img-fluid" src="../images/spiritual-life/stephen-ministry/1.png" alt="Stephen Ministry"></img>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}