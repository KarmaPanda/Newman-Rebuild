import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function Meals() {
    // Home Cooked Meals: Combine Newman Nite and 3rd Sunday Supper
    return (
        <div>
            <Head>
                <title>UR Newman - Home Cooked Meals</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Learn more about our Newman Nite and 3rd Sunday Supper here!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h1 className="display-5 pb-5">Home Cooked Meals</h1>
                            <h2 className="display-6">Newman Nite</h2>
                            <img className="img-fluid" src="../images/events/meals/1.png" alt="Newman Nite"></img>
                            <p className="pt-1">Join us for Newman Nite (Academic Year only) as a free and open time for all students looking to chat and interact with one another over home-cooked food, faith, games, sports, college life, etc. Students are encouraged to bring their friends, too! Come any (or every) Thursday at 6pm in the Interfaith Chapel (River Level).</p>
                        </Col>
                    </Row>
                    <Row className="text-center pt-5">
                        <Col>
                            <h2 className="display-6">Third Sunday Supper</h2>
                            <img className="img-fluid" src="../images/events/meals/2.png" alt="Third Sunday Supper"></img>
                            <p className="pt-1">Every month (Academic Year only), stay after the 7pm Mass (or come back to the Chapel!) to cap off the weekend with freshly prepared dinner. We serve favorite comfort food recipes from homes near and far, including pizza pasta, tostadas, turkey pot pie, pumpkin soup, and stir fry. Roll out the tables, and enjoy the feast!</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}