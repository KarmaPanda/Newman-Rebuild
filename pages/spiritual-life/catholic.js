import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

import styles from '../../styles/spiritual-life.module.scss'

export default function Catholic() {
    return (
        <div>
            <Head>
                <title>UR Newman - Becoming Catholic/Confirmation</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Learn more about the process of becoming Catholic here!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h1 className="display-5 pb-5">Becoming Catholic/Confirmation</h1>
                            <img className="img-fluid" src="../images/spiritual-life/catholic/1.png" alt="Becoming Catholic/Confirmation Banner"></img>
                            <div className={styles.faq}>
                                <h3>RCIA</h3>
                                <p>Have you always wanted to make your confirmation? Are you interested in receiving baptism or coming into the Catholic Church? Are you curious about the fundamentals of Catholicism? Join us for the Rite of Christian Initiation for Adults as we seek to understand more of what we believe.  Our first four meetings are open to anyone with Questions about the Catholic Faith: No Question to small... The Rite of Christian Initiation for Adults (RCIA) may be for you.  RCIA is a process during which people learn and talk about the basics of the Church and Church teaching.  We have a full RCIA program for students and community members.  Generally, preparation for the sacraments starts in the fall semester but please contact us at whatever time of the year because we have flexibility to start preparation at different times. Please contact Fr. Brian Cool at <a href="mailto:bcool@admin.rochester.edu">bcool@admin.rochester.edu</a> or +1 (585) 275-8523.</p>
                                {/*<h3>Helpful Resources <a href="http://static1.squarespace.com/static/55131945e4b0a07e16795644/t/566edf1ecbced62f379dc892/1450106654965/Compendium-of-the-Catechism-of-the-Catholic-Church.pdf">HERE</a></h3>*/}
                                <h3>RCIA FAQ</h3>
                                <p>The process of becoming Catholic is inspired by the Rite of Christian Initiation of Adults or RCIA. Which prepares those who wish discern a call to join the Catholic Church and to celebrate any of the Sacraments of Initiation: Baptism, Confirmation and First Eucharist.</p>
                                <h3>What&apos;s Involved?</h3>
                                <p>During your initial meeting with a member of the staff, you will ask you about your interest in the Catholic faith and what sacraments you wish to prepare for, suggest a basic text about Catholicism for you to purchase, and outline the elements of our program that fit your needs. You will be invited to participate in our RCIA program that provides an overview of the topics covered in the Catechism of the Catholic Church, to learn about different methods of prayer and discernment, and reflect on how to integrate the Catholic faith into your daily life. You will also be invited to register with us, participate in some of our programs, attend Sunday Mass, meet periodically with a Campus Minister, participate in reflection on the Gospels and choose a sponsor.</p>
                                <h3>What&apos;s a sponsor?</h3>
                                <p>A sponsor is a confirmed Catholic who actively participates in the life of the church and is excited about his/her faith. Your sponsor walks with you through the RCIA process and shares his or her experience of being Catholic with you. Your sponsor also stands with you at the time you receive the sacraments.</p>
                                <h3>How long is the program?</h3>
                                <p>That depends. RCIA is meant to be a discernment process that provides you the opportunity to be exposed to the Catholic Faith and determine whether or not you feel God is calling you to become Catholic.  The normal time in which those who are entering the Catholic Church, receive the sacraments of Baptism, First Communion, and Confirmation is at the Easter Vigil.</p>
                                <h3>What can I expect if I am not baptized?</h3>
                                <p>You will be invited to explore your desire for baptism. You will attend our weekly RCIA program and meet periodically with a Campus Minister. Also you will be invited to become familiar with our parish by attending Mass, joining a group that reflects on the Gospels and participating in one or more parish programs.  When you decide to seriously prepare for baptism you may ask to enter the Catechumenate. As a catechumen, you will be considered a serious pilgrim along your journey to incorporation into the Catholic Church, looking forward to celebrating the three Sacraments of Initiation at the Easter Vigil. It is customary to be a catechumen for at least one academic year.  During your time as a catechumen you will continue to learn about Catholicism, attend Mass every Sunday, meet regularly with a Campus Minister and your sponsor, be encouraged to participate in a retreat and explore ways to develop your prayer life.</p>
                                <p>On the First Sunday of Lent preceding your initiation in to the church you will attend the Rite of Election presided over by our bishop. The bishop receives each catechumen and you will be invited to sign the Book of the Elect. During Lent you will participate in many rituals, some celebrated at Sunday Mass and some celebrated during RCIA. These rituals help to purify your mind and heart and strengthen you spiritually.</p>
                                <h3>What can I expect after I am baptized?</h3>
                                <p>Following your initiation, you will be encouraged to participate fully in the life of the Church. You will continue on the lifelong journey of deepening your faith and prayer life. You will be invited to participate in social activities, discussion groups, prayer groups, and Christian service projects. You may even sponsor others as they prepare to join the Church.</p>
                                <h3>How do I participate in this program?</h3>
                                <p>If you are interested in pursuing the possibility of becoming Catholic, the first step is to make an appointment with make an appointment with one of our staff.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}