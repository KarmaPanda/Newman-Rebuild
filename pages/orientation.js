import Head from "next/head";
import Footer from "../components/Footer"
import Link from "next/link"

import styles from '../styles/orientation.module.scss'
import { Container, Row, Col, Button, Tabs, Tab } from "react-bootstrap";
import HeroImage from "../components/HeroImage";

export default function Orientation() {
    return (
        <div>
            <Head>
                <title>UR Newman - Orientation</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={"Welcome Home Class of " + (new Date().getFullYear() + 4) + "!"} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeroImage imageSrc={"../images/orientation/banner.png"} mobileImageSrc={"../images/orientation/banner-mobile.png"} description={"Welcome Home Class of 2026!"} />

            <section className={`${styles.orientationSection} pb-5`}>
                <Container>
                    <Row className={styles.header}>
                        <Col>
                            <h1>Class of {new Date().getFullYear() + 4}, Welcome to Newman! </h1>
                            <p>Below, check out our orientation events and more!</p>
                        </Col>
                    </Row>
                    <Row className={styles.grid}>
                        <div id="grid-gallery" className="grid-gallery">
                            <div id="grid-gallery" className="grid-gallery">
                                <section className="grid-wrap">
                                    <ul className="grid">
                                        <li className="grid-sizer"></li>
                                        <li>
                                            <figure>
                                                <img src="images/orientation/1.png" alt="img01" />
                                                <figcaption><h3>Sunday Mass (Weekly) &amp; Welcome Back Picnic</h3><p>Sunday, <br /> September 12 <br /> 10:30AM &amp; 7PM</p></figcaption>
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <img src="images/orientation/2.png" alt="img02" />
                                                <figcaption><h3>Daily Mass</h3><p>Mondays, Tuesdays, and Thursdays, <br /> Starting September 7 <br /> 5:30PM</p></figcaption>
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <img src="images/orientation/3.png" alt="img03" />
                                                <figcaption><h3>Guided Meditation</h3><p>Mondays <br /> Starting August 30 <br /> 7PM</p></figcaption>
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <img src="images/orientation/9.png" alt="img09" />
                                                <figcaption><h3>Rosary Group</h3><p>Tuesdays <br /> Starting September 28 <br /> 6PM</p></figcaption>
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <img src="images/orientation/4.png" alt="img04" />
                                                <figcaption><h3>InstaMass</h3><p>Wednesdays, <br /> Starting August 25 <br /> 9PM</p></figcaption>
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <img src="images/orientation/5.png" alt="img05" />
                                                <figcaption><h3>Newman Nite</h3><p>Thursdays, <br /> Starting August 26 <br /> 6PM</p></figcaption>
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <img src="images/orientation/6.png" alt="img06" />
                                                <figcaption><h3>Adoration</h3><p>First Fridays of the Month, <br /> Starting September 3 <br /> 12:30PM</p></figcaption>
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <img src="images/orientation/7.png" alt="img07" />
                                                <figcaption><h3>Parent Webinar</h3><p>Wednesday, September 15 <br /> 7:30PM</p></figcaption>
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <img src="images/orientation/8.png" alt="img08" />
                                                <figcaption><h3>One Day Retreat:  All Things College</h3><p>Sunday, <br /> September 19</p></figcaption>
                                            </figure>
                                        </li>

                                    </ul>
                                </section>
                                <section className="slideshow">
                                    <ul>
                                        <li>
                                            <figure>
                                                <figcaption>
                                                    <h3>Sunday Mass (Weekly) &amp; Welcome Back Picnic</h3>
                                                    <p>Location: Interfaith Chapel</p>
                                                    <p>Date and Time: Sunday, September 12, 10:30AM &amp; 7PM</p>
                                                    <p>&nbsp;</p>
                                                    <p>Join us at either the 10:30AM or 7PM Mass (held weekly) and learn more about Newman from its student leaders!  Grab a free t-shirt and a nice meal as well!</p>
                                                </figcaption>
                                                <img src="images/orientation/1.png" alt="img01" />
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <figcaption>
                                                    <h3>Daily Mass</h3>
                                                    <p>Location: Interfaith Chapel</p>
                                                    <p>Date and Time: Mondays, Tuesdays, and Thursdays, Starting September 7, 5:30PM</p>
                                                    <p>&nbsp;</p>
                                                    <p>Interested in daily Mass—come check us out at 5:15PM!</p>
                                                </figcaption>
                                                <img src="images/orientation/2.png" alt="img02" />
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <figcaption>
                                                    <h3>Guided Meditation</h3>
                                                    <p>Location: Interfaith Chapel</p>
                                                    <p>Date and Time: Mondays, Starting August 30, 7PM</p>
                                                    <p>&nbsp;</p>
                                                    <p>Join Sr. Leandra for a Catholic spiritual journey like no other!</p>
                                                </figcaption>
                                                <img src="images/orientation/3.png" alt="img03" />
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <figcaption>
                                                    <h3>Rosary Group</h3>
                                                    <p>Location: Interfaith Chapel</p>
                                                    <p>Date and Time: Tuesdays, Starting September 28, 6PM</p>
                                                    <p>&nbsp;</p>
                                                    <p>Looking to prayer with Our Lady—join us at 6PM!</p>
                                                </figcaption>
                                                <img src="images/orientation/9.png" alt="img09" />
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <figcaption>
                                                    <h3>InstaMass</h3>
                                                    <p>Location: Interfaith Chapel</p>
                                                    <p>Date and Time: Wednesdays, Starting August 25, 9PM</p>
                                                    <p>&nbsp;</p>
                                                    <p>Our middle of the week daily Mass—join us!</p>
                                                </figcaption>
                                                <img src="images/orientation/4.png" alt="img04" />
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <figcaption>
                                                    <h3>Newman Nite</h3>
                                                    <p>Location: Interfaith Chapel</p>
                                                    <p>Date and Time: Thursday, Starting August 26, 6PM</p>
                                                    <p>&nbsp;</p>
                                                    <p>Interested in some free dinner and fun on August 26 (Jenga Jam) and September 2 (Game Night)?!</p>
                                                </figcaption>
                                                <img src="images/orientation/5.png" alt="img05" />
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <figcaption>
                                                    <h3>Adoration</h3>
                                                    <p>Location: Interfaith Chapel</p>
                                                    <p>Date and Time: First Fridays of the Month, Starting September 3, 12:30PM</p>
                                                    <p>&nbsp;</p>
                                                    <p>Need a minute or an hour with Christ—check out Adoration!</p>
                                                </figcaption>
                                                <img src="images/orientation/6.png" alt="img06" />
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <figcaption>
                                                    <h3>Parent Webinar</h3>
                                                    <p>Location: Virtual (Click <a href="https://rochester.zoom.us/j/2771228739">here</a> to join us)</p>
                                                    <p>Date and Time: Wednesday, September 15, 7:30PM</p>
                                                    <p>&nbsp;</p>
                                                    <p>Curious about Newman and what we can do to help your student?  Join us to learn more about our community and ask any questions you might have!</p>
                                                </figcaption>
                                                <img src="images/orientation/7.png" alt="img07" />
                                            </figure>
                                        </li>
                                        <li>
                                            <figure>
                                                <figcaption>
                                                    <h3>One Day Retreat:  All Things College</h3>
                                                    <p>Location: Interfaith Chapel (Click <a href="https://secure.lglforms.com/form_engine/s/yp_le6CLvfUGLMQ8tS6T9g">here</a> to register)</p>
                                                    <p>Date and Time: Sunday, September 19</p>
                                                    <p>&nbsp;</p>
                                                    <p>Meet some friends; learn how to navigate college, its stresses and joys; find God as well!</p>
                                                </figcaption>
                                                <img src="images/orientation/8.png" alt="img08" />
                                            </figure>
                                        </li>
                                    </ul>
                                    <nav>
                                        <span className="fa nav-prev"></span>
                                        <span className="fa nav-next"></span>
                                        <span className="fa nav-close"></span>
                                    </nav>
                                </section>
                            </div>
                        </div>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <Link href="http://www.urnewman.org/update" passHref>
                                <Button className={styles.registerBtn} variant="light">
                                    Register with our community here!
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>

                <div className="footer-content p-5">
                    <div className="container">
                        <div className="footer-social-media row p-5">
                            <div className="row">
                                <h2>Please join us on social media for the latest updates on activities and events at Newman!</h2>
                            </div>
                            <div className="row pt-5">
                                <div className="col-sm mb-5 mb-sm-0">
                                    <a href="https://www.instagram.com/ur_newman/" target="_blank" rel="noreferrer"
                                    ><i className="fa fa-instagram fa-5x" aria-hidden="true" /></a>
                                </div>
                                <div className="col-sm mb-5 mb-sm-0">
                                    <a href="https://www.facebook.com/newmanatur" target="_blank" rel="noreferrer"
                                    ><i className="fa fa-facebook-official fa-5x" aria-hidden="true" /></a>
                                </div>
                                <div className="col-sm mb-5 mb-sm-0">
                                    <a href="https://twitter.com/ur_newman" target="_blank" rel="noreferrer"
                                    ><i className="fa fa-twitter-square fa-5x" aria-hidden="true" /></a>
                                </div>
                                <div className="col-sm mb-5 mb-sm-0">
                                    <a href="https://www.linkedin.com/company/urnewman" target="_blank" rel="noreferrer"
                                    ><i className="fa fa-linkedin-square fa-5x" aria-hidden="true" /></a>
                                </div>
                                <div className="col-sm">
                                    <a href="https://www.youtube.com/c/CatholicNewmanCommunityattheUniversityofRochester"
                                        target="_blank" rel="noreferrer"><i
                                            className="fa fa-youtube-play fa-5x" aria-hidden="true" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Container>
                    <Row className="text-center">
                        <Col>
                            <h3>River Campus Brochure</h3>
                            <iframe src="https://drive.google.com/file/d/11Z5bLVlcUCDKm0nyn9RtXzcJKxuUB1Ou/preview" width="100%" height="480px"></iframe>
                        </Col>
                        <Col>
                            <h3>Eastman Brochure</h3>
                            <iframe src="https://drive.google.com/file/d/1PAT49NdgReBK8FuGa2EylVPebFlQ30t6/preview" width="100%" height="480px"></iframe>
                        </Col>
                    </Row>
                </Container>

                <Tabs defaultActiveKey="welcome" id="orientation-tab" fill className={`${styles.orientationTabButtons} pt-5`}>
                    <Tab eventKey="welcome" title="Welcome Message">
                        <Container className={`${styles.orientationTab} pt-3`}>
                            <Row>
                                <p>Welcome to Newman!</p>
                                <p>Let us be the first to invite you and your family to our community. Newman is the place where you can grow in your Catholic faith while a student at Rochester.</p>
                                <p>Committed to engaging faith and reason through a relationship with Christ and the Church, students enjoy a hospitable and engaging environment to grow spiritually while enjoying social events, deep and lasting friendships, retreats, dinners, and, of course, Mass (to name a few!).</p>
                                <p>We hope to be able to meet you at one of our events and personally welcome you to Newman! Our pastoral staff is always ready to assist you at any time, especially during the crazy times we now live. Never hesitate to contact us.</p>
                                <p>Welcome to the NEWMAN EXPERIENCE!</p>
                                <p>Peace and all good!</p>
                                <p>Newman Staff</p>
                            </Row>
                            <Row>
                                <Col><div className="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/gelvLVlgsLg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div></Col>
                                <Col><div className="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/ffrh242MHjo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div></Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="students" title="Letter to Students">
                        <Container className={`${styles.orientationTab} pt-3`}>
                            <Row>
                                <p>Dear Students,</p>
                                <p>Welcome to the Catholic Newman Community and to the University of Rochester!  Your next four years at Rochester are sure to be enriching both academically and socially, and we pray, spiritually as well.  Our alumni would like to welcome you, too, with a few words of wisdom about their time here:</p>
                                <ul>
                                    <li><i>&quot;I was a part of the Newman Center during my time in Rochester—it kept me grounded during the hectic times as a student and also helped me grow in my faith.&quot;  ~Christopher Bonino &rsquo;02, &rsquo;03 (MS)</i></li>
                                    <li><i>&quot;You know, going to college so far away from home in Texas, it was a little daunting to find a support system.  But I found it in Fr. Cool and . . . that lasted through my Take 5, through law school, through running a business, and being in my early thirties.&quot;  ~ J. J. González &rsquo;11</i></li>
                                    <li><i>&quot;For me, Newman was truly a &lsquo;home away from home.&rsquo;  It allowed me to strengthen my faith, deepen my relationship with my sister, and . . . create those lifelong, lasting memories and friends that I still have today.&quot;  ~Valeria Lopez-Aldaco &rsquo;14</i></li>
                                    <li><i>&quot;Whether it was through InstaMass or Newman Nites or Mass on Sundays with the beautiful music the choir put on, Kairos Retreats, or just hanging out with Fr. Cool, Newman became an integral part of my college experience and . . . many of my fondest memories revolve around Newman.&quot;  ~Andrew Scala &rsquo;11</i></li>
                                    <li><i>&quot;While the University helped shape my mind with academics, Newman helped sculpt my heart by providing meaningful experiences to build friendships with my peers and with God.&quot;  ~Katelyn Seliskar &rsquo;11, &rsquo;12W (MS)</i></li>
                                </ul>
                                <p>Be sure to check out this website for more information about Newman&apos;s Staff, programs, events, and the worship schedule.  Also, be sure to check out our various social media links above.</p>
                                <p>Finally, please feel free to contact us anytime with any questions and/or concerns.  We are here to help you succeed at this prestigious university by offering you interesting and exciting ways to explore your faith!  Our contact information can be found <a href="groups/staff">here</a>.</p>
                                <p>God Bless and we hope to see you soon!</p>
                                <p>Newman Staff</p>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="parents" title="Letter to Parents">
                        <Container className={`${styles.orientationTab} pt-3`}>
                            <Row>
                                <p>Dear Parents,</p>
                                <p>We are so excited to welcome your student and you to one of the most prestigious universities in America—a place where minds are challenged and hearts blossom through fellowship, service, and Catholic faith opportunities!</p>
                                <p>Proudly, the U of R is also home to one of the finest Catholic ministry sites on any college campus.  Located in the Interfaith Chapel, on the River Campus, we provide full-time Catholic ministry for the sacramental, spiritual, intellectual, social, and emotional formation of every Rochester student.  As a stand-alone entity which receives nearly 85% of its support from alumni, parents, and friends, we aim to serve the highest ideals of Catholicism, and to spread Christ&rsquo;s Good News across this great University and to its students.</p>
                                <p>QUICK FACTS:</p>
                                <ul>
                                    <li>Catholics are the largest single denomination at Rochester (~30% or approximately 2,000 students)</li>
                                    <li>Over 200 students attend one of two Sunday Masses regularly</li>
                                    <li>Newman has won 3 national awards for student programing</li>
                                    <li>Over 75 student leaders plan and facilitate nearly 100 programs</li>
                                    <li>Newman and the University are in the exciting process to build a much-needed Catholic Chapel and Newman Center to house our growing and dynamic ministry</li>
                                </ul>
                                <p>Our staff is fully committed to providing pastoral care for any Rochester student, day or night.  We believe they are why we are here and know the importance of having family close by!  Please never hesitate to contact us for any need.</p>
                                <ul>
                                    <li><i>Rev. Brian Cool</i>, <a href="mailto:bcool@admin.rochester.edu">bcool@admin.rochester.edu</a></li>
                                    <li><i>Breanna Dauphinee</i>, <a href="mailto:bdauphin@ur.rochester.edu">bdauphin@ur.rochester.edu</a></li>
                                </ul>
                                <p>Visit this website to learn about <strong><u>ALL</u></strong> we offer, including the Student Offering Support Ministry Program and the exciting building project.  Always feel free to contact any of us via the above emails or call/text +1 (585) 730-3019 if we can be of <strong><u>ANY</u></strong> assistance.  With over 30 years of experience at Rochester and almost 80 combined years in ministry, we can surely help!  Please consider us an extension of your family and a &lsquo;home away from home&rsquo; for your Rochester student.</p>
                                <p>We look forward to meeting you during Orientation Week (scroll above for more information) or at our special Parent Zoom session scheduled for Wednesday, September 15, 2021 at 7:30 PM on <a href="https://rochester.zoom.us/j/2771228739">Zoom</a>. God bless and know that your student is embarking on an amazing journey, one where faith and reason grow together and where the Catholic Newman Community is here to assist and lend a helping hand.</p>
                                <p>In Christ,</p>
                                <p>Newman Staff</p>
                                <p>P.S.  Don&rsquo;t forget to follow us on social media.  The links can be found at the above.</p>
                            </Row>
                        </Container>
                    </Tab>
                </Tabs>
            </section>

            <script type="text/javascript" src="../js/modernizr.custom.js"></script>
            <script type="text/javascript" src="../js/imagesloaded.pkgd.min.js"></script>
            <script type="text/javascript" src="../js/masonry.pkgd.min.js"></script>
            <script type="text/javascript" src="../js/classie.js"></script>
            <script type="text/javascript" src="../js/cbpGridGallery.js"></script>
            <script
                type='text/javascript'
                dangerouslySetInnerHTML={{
                    __html: `
                        new CBPGridGallery(document.getElementById('grid-gallery'));
                    `,
                }}
            />

            <Footer />
        </div>
    )
}