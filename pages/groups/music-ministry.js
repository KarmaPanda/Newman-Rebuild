import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function MusicMinistry() {
    return (
        <div>
            <Head>
                <title>UR Newman - Music Ministry</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Learn more about our choir here!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h1 className="display-5 pb-5">Music Ministry</h1>
                            <img className="img-fluid" src="../images/groups/music-ministry/1.png" alt="Rosary Group"></img>
                            <p className="pt-1">Our mission is to enhance the Mass and other services through music. We believe that everyone possesses some level of musical aptitude in which he/she may glorify God. We provide music for Sunday Masses and InstaMass every week, as well as for other Holy Days and special events.</p>
                            <p>If you are interested in singing or playing for Mass, feel free to shoot our directors an email. (Or just stop by rehearsal!) We&apos;re happy to accept musicians from all experience levels--whether you&apos;ve been taking lessons since you were 5 years old or you&apos;ve never performed in an ensemble before in your life. That goes for instrumentalists as well as singers!</p>
                            <p><a href="https://drive.google.com/file/d/0B_146wWmYBsVMWVvWDAwd1dBYms/view?usp=sharing">Support our strategic plan for Newman Music Ministry</a></p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}