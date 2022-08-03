import Head from "next/head";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "../../components/Footer";


export default function PlannedGiving() {
    return (
        <div>
            <Head>
                <title>UR Newman - Wilson Society</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Learn about the Wilson Society and its members here!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <h1 className="display-5 pb-5">Wilson Society/Planned Giving</h1>
                        <Col>
                            <h2 className="display-6 pb-5">Who are the Wilsons?</h2>
                            <Col>
                                <p>The Catholic Newman Community is honored to recognize our Wilson Society members, named for Joseph C Wilson &rsquo;31 and his wife, Marie, to honor their exemplary and lifelong devotion to this campus, its mission, and the rich blessing of a strong Catholic presence at Rochester.  Their legacy of generosity lives on for those who pay it forward to the next generation with a planned or estate gift to Newman. </p>
                                <p>Our Wilson Society members show their support of our mission by designating the Catholic Newman Community/Dean&rsquo;s Fund for Newman Community as a beneficiary of their planned gift. </p>
                                <p>Members are honored at annual luncheons, receive invitations to special campus events, and are recognized in our Annual Report, among other benefits.  But, our donors tell us that the most meaningful part of membership is the gratification of making a lasting contribution to Newman&rsquo;s long-term success.  Your future gift could also inspire others to make their own generous planned gifts.</p>
                                <p>If you already have joined the Wilson Society, we thank you!  If you&rsquo;ve always been curious about how to make a planned gift, let us show you how easy and fulfilling it can be. </p>
                            </Col>
                        </Col>
                        <Col>
                            <img className="img-fluid" src="../images/giving/planned-giving/1.jpg" alt="Joseph C. Wilson and his wife Marie"></img>
                        </Col>
                    </Row>
                    <Row className="text-center pt-5">
                        <ul style={{ listStyleType: "none" }}>
                            <li><a href="https://www.rochester.edu/giving/wilson-society/university-wide-impact">Why is a planned gift so meaningful? </a></li>
                            <li><a href="https://www.rochester.edu/giving/wilson-society/member-stories">Planned Gift Heroes</a></li>
                            <li><a href="https://www.rochester.edu/giving/wilson-society/ways-to-give">What to Give </a></li>
                            <li><a href="https://www.rochester.edu/giving/wilson-society/contact/">How to Give</a></li>
                        </ul>
                    </Row>
                    <Row className="text-center pt-5">
                        <Col>
                            <h3>Jane Schmitt &rsquo;43</h3>
                            <img className="img-fluid" src="../images/giving/planned-giving/2.png" alt="Jane Schmitt &rsquo;43"></img>
                            <p><em>“As an alumna, I believe the need for a strong Catholic presence on campus is vital. Through a planned gift, I was able to establish the Charles W. Schmitt Fund in honor of my brother as well as support Newman. It gives me great pride to ensure a legacy of Catholic life at Rochester.”</em></p>
                        </Col>
                        <Col>
                            <h3>Joseph Mack &rsquo;55</h3>
                            <img className="img-fluid" src="../images/giving/planned-giving/3.png" alt="Joseph Mack &rsquo;55"></img>
                            <p><em>“Being able to bequest Rochester and Newman with a single gift allows me to thank the University for an education that I could not have received elsewhere and to help ensure that Newman will continue to thrive in the future. In leaving a gift to Newman, I know that I will be making a difference, helping to build an endowment that will guarantee a vital ministry and enhance the spiritual life of Catholic students at Rochester. It has been a special privilege to have worked with the University and with Newman for so many years.”</em></p>
                        </Col>
                        <Col>
                            <h3>Philip Morace &rsquo;81</h3>
                            <img className="img-fluid" src="../images/giving/planned-giving/4.png" alt="Philip Morace &rsquo;81"></img>
                            <p><em>“Since my graduation in 1981 I, along with hundreds of alumni, have strived to support the Newman Community as a place for students to worship and grow in faith. My planned gift is a part of ensuring the Newman Experience for future generations. Together, we can build an even stronger and more dynamic Catholic presence at Rochester and the world . . . We will be able to embrace everyone as individuals, each with unique gifts and resources, in order to stand together as one with our Lord, Jesus Christ.”</em></p>
                        </Col>
                    </Row>
                    <Row className="text-center pt-5">
                        <Col>
                            <p>Rev. Brian C. Cool</p>
                            <p>Chaplain/Director</p>
                            <p>Catholic Newman Community at the University of Rochester</p>
                            <p><a href="mailto:bcool@admin.rochester.edu">bcool@admin.rochester.edu</a></p>
                            <p>+1 (585) 275-8523</p>
                        </Col>
                        <Col>
                            <p>Jared Longmore</p>
                            <p>Sr. Director of Advancement for the College and Athletics</p>
                            <p>University of Rochester</p>
                            <p><a href="mailto:jared.longmore@rochester.edu">jared.longmore@rochester.edu</a></p>
                            <p>+1 (585) 276-7249</p>
                        </Col>
                    </Row>
                    <Row className="text-center pt-5">
                        <p><em>&ldquo;Our gift is a call for others who are committed to the noble goal of uniting faith and reason and to change lives by supporting Newman.&rdquo;</em></p>
                        <p>~J. Nelson &rsquo;55 † and Joan Dutcher Hoffman &rsquo;55</p>
                    </Row>
                </Container>
            </div >

            <Footer />
        </div >
    )
}