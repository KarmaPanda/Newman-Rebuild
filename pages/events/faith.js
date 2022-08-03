import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function Faith() {
    // Combined pages of Lecture Series and Networking
    return (
        <div>
            <Head>
                <title>UR Newman - Building the Faith</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Check here for our lecture series and previous networking events!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h1 className="display-5 pb-5">Building the Faith</h1>
                            <h2 className="display-6">Lecture Series</h2>
                            <img className="img-fluid" src="../images/events/faith/1.jpg" alt="Lecture Series"></img>
                            <p>Over the years, Newman is proud to have hosted esteemed guest lecturers to speak to students and the wider Rochester community on topics relating to the intersection of faith and reason. Speakers range from widely published authors and theologians to scientists and legal scholars, and have shared insights on medical ethics, freedom of religion, the origins of the universe, and much more. Through these lectures, students are invited to engage the intellectual world through the eyes of faith, and explore their faith with academic rigor. Please contact us at <a href="mailto:catholicnewmancommunity@rochester.edu">catholicnewmancommunity@rochester.edu</a> or +1 (585) 275-8515 for more information or if you have a suggestion for a future speaker.</p>
                            <p>Currently, Newman participates in the production of two lecture series, the John Henry Cardinal Newman Lecture and the Judith Johnson O&apos;Brien Women in the Church Endowed Lecture.  To view past John Henry Cardinal Newman Lectures, please click <a href="https://youtube.com/playlist?list=PLzVtmzyY6OUQDSTm39qPea4WCysYAkXQc">here</a></p>
                        </Col>
                    </Row>
                    <Row className="text-center pt-5">
                        <Col>
                            <h2 className="display-6">Networking</h2>
                            <p>Check back here regularly for new and updated videos featuring UR/Newman alumni giving advice on everything from graduate school and career expectations, to networking, to living a faith-filled vocation in whatever line of work one may find oneself.  These videos are sure to put a smile on your face and confidence in your heart!</p>
                            <p>Please click <a href="https://youtube.com/playlist?list=PLzVtmzyY6OURwplotPCCkWnf9Nv2uROEc">here</a> to view our previous alumni networking panels.</p>
                            <div className="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/gaDpWpCOYaE" frameBorder="0"
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