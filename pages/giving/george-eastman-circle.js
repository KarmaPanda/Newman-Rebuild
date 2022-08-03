import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function Faith() {
    return (
        <div>
            <Head>
                <title>UR Newman - George Eastman Circle</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Learn more about the George Eastman Circle here!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <h1 className="display-5 pb-5">What is the George Eastman Circle?</h1>
                        <Col>
                            <p>The Catholic Newman Community is indebted to those who have given to the George Eastman Circle (GEC) in support of Newman&rsquo;s pastoral presence on campus. As the University&rsquo;s premier giving society, and by committing to a pledge for five consecutive years, GEC members offer us a tangible and hearty vote of confidence for the enriching work we accomplish every day. Theirs is an example of historic commitment that not only helps us to support the incredible students who grace our presence, but such donors also allow us to better project, plan, and initiate new and exciting ways of doing ministry on an annual basis. </p>
                            <p>Those who wish to give to Newman through the George Eastman Circle must specifically designate their gift to the Catholic Newman Community/Dean&rsquo;s Fund for Newman Community. </p>
                            <p>GEC donors are afforded many benefits as befits such an honored giving society. They not only receive special recognition from both the University and Newman, but they receive countless gifts; are able to attend special lectures, gatherings, and events; and enjoy the esteemed privilege of serving on leadership councils/volunteer committees across the United States. Members truly become an integral part of the fabric that makes up not only the University community, but which exude the Christian qualities of hospitality and solidarity that Newman holds dear. </p>
                            <p>We thank you once again if you have already dedicated your GEC contribution to Newman! However, if you just begun to think about the process or would like to learn more about dedicating your gifts to Newman through the George Eastman Circle, please see some helpful links below.</p>
                            <ul style={{ listStyleType: "none" }}>
                                <li><a href="https://www.rochester.edu/giving/gec/your-impact">What impact does your gift have?</a></li>
                                <li><a href="http://www.rochester.edu/giving/gec/newsletter/">GEC Newsletters</a></li>
                                <li><a href="https://www.rochester.edu/giving/gec/honor-roll/">GEC Honor Roll </a></li>
                            </ul>
                        </Col>
                        <Col>
                            <img className="img-fluid" src="../images/giving/george-eastman-circle/1.jpg" alt="George Eastman Statue"></img>
                        </Col>
                    </Row>
                    <Row className="text-center pt-5">
                        <Col>
                            <h2 className="display-6">Ways to Join</h2>
                            <p>Sustaining members are those who pledge $1,500 or more annually, for five consecutive years, toward the Catholic Newman Community. Members can give electronically or via the printable/mail-in form. Please make sure to designate your gift to the Dean&rsquo;s Fund for Newman Community (A09169).</p>
                            <ul style={{ listStyleType: "none" }}>
                                <li><a href="https://www.rochester.edu/giving/gec/membership/make-a-gift/join">Join as a Sustaining Member Online</a></li>
                                <li><a href="https://drive.google.com/file/d/1O4ar_cE94vr3-zmn3HDbAwf7ovnAiuBH/view?usp=sharing">Join as a Sustaining Member via the Printable Form</a></li>
                            </ul>
                            <p>For those who have graduated from the University within the last ten years, associate membership is an option. Members pledge $4,000 over a five-year period toward the Catholic Newman Community. Members can give electronically or via the printable/mail-in form. Please make sure to designate your gift to the Dean&rsquo;s Fund for Newman Community (A09169).</p>
                            <ul style={{ listStyleType: "none" }}>
                                <li><a href="https://www.rochester.edu/giving/gec/membership/make-a-gift/join">Join as a Associate Member Online</a></li>
                                <li><a href="https://drive.google.com/file/d/1VQutzQq-DljRh__fv2wfdOqZ1S66uUxu/view?usp=sharing">Join as a Associate Member via the Printable Form</a></li>
                            </ul>
                            <p>Contact us below with any questions and/or concerns about the George Eastman Circle! Additionally, please visit the <a href="https://www.rochester.edu/giving/gec/" >GEC website</a> for more specific information</p>
                        </Col>
                    </Row>
                    <Row className="text-center pt-5">
                        <Col>
                            <h3>Tyler Kieft &rsquo;09</h3>
                            <img src="/images/giving/george-eastman-circle/2.png" alt="cropped"></img>
                            <p className="pt-3"><em>&ldquo;The Newman Community enriched my life from the very beginning of freshman orientation. The students I met at events like pasta night and Kairos were kind, supportive friends. The midnight Christmas service, with musical prelude, is one of my best memories of my Rochester years. And Sunday night mass became my time to cast aside athletics and academics, reflect, and ensure I focused on my values and long-term goals.&rdquo;</em></p>
                            <p>Let us discuss how you can have a profound influence on our community today!</p>
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
                        <p><em>&ldquo;Through the George Eastman Circle . . . We gratefully support the Newman Community&rsquo;s pastoral care
                            of students and staff who share a journey of faith and personal growth at the University of Rochester.&rdquo;</em></p>
                        <p>~J. Nelson &rsquo;55 † and Joan Dutcher Hoffman &rsquo;55</p>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}