import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function StSebastian() {
    return (
        <div>
            <Head>
                <title>UR Newman - St. Sebastian Society</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="The St. Sebastian Society is a group of varsity and club student-athletes dedicated to serving the greater Rochester community. We provide service opportunities throughout the year with the understanding that members' level of participation will vary when they are in season." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h1 className="display-5 pb-5">St. Sebastian Society</h1>
                            <div className="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/M_l1SBbxi9U" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </div>
                            <div className="pt-4">
                                <p>The St. Sebastian Society is a group of varsity and club student-athletes dedicated to serving the greater Rochester community.  We provide service opportunities throughout the year with the understanding that members&apos; level of participation will vary when they are in season.</p>
                                <p>One of our main outreach opportunities is the <Link href="/yespa" passHref>Yes Pa Program</Link>, which gives students the opportunity to teach a course to inmates at the Monroe Correctional Facility based on the book by Rochester native Fred Sarkis.</p>
                                <p>Additionally, we help coordinate Agape Latte once a semester.  This program allows students to see a professor or faculty member outside of the classroom and in a peer to peer environment.  The speaker will usually share relatable advice, guidance, and stories with the crowd.</p>
                                <p>We also host the annual Newman Cup, a 5 v 5 basketball tournament to raise money for La Casa--an organization that provides resources to migrant farmworkers in Monroe County.</p>
                                <p>The group is also involved with tutoring at a local middle school, Nativity Preparatory Academy.</p>
                                <p>All of the events are very rewarding and great opportunities to make a difference.</p>
                            </div>
                            <div className="pt-5">
                                <h2 className="display-6">The Fred Sarkis Yes Pa Student-Athlete Award</h2>
                                <p>Fred Sarkis, born in 1926 in Rochester, NY, was the oldest son in a family with nine children. Working hard as a child, Mr. Sarkis learned a lot from his father before entering the navy to serve during World War II. Returning home after the war, Mr. Sarkis returned home and used what his father taught him, becoming a successful businessman. Upon retiring at age 65, Mr. Sarkis created the not-for-profit <Link href="/yespa" passHref>Yes Pa Character Education Program</Link>. Named after his Pa, who had meant so much to him and taught him so much, Mr. Sarkis wanted to create a program to help others how he was helped. And now, over twenty years later, Yes Pa is a huge program to help teach individuals learn more about character and responsibility.</p>
                                <p>The Yes Pa Character Education Program has become an integral part of Saint Sebastian Society and our work mentoring young adults in the County Jail. We are proud to honor two University of Rochester Student-Athletes and St. Sebastian Society members who seek to live the qualities many others have so fondly seen in Mr. Sarkis.</p>
                                <p>Selected nominees will be awarded with a $250 scholarship. If you are interested, please fill out the <a href="https://drive.google.com/open?id=1l2ccSd-11Z2vi5XfXhX4J56UwlIGumEk">application</a> by the last day of class in the Spring semester.</p>
                                <p>Past recipients of the award include the following student-athletes:</p>
                                <table className="table table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Class Year</th>
                                            <th scope="col">Major(s)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">Ryan Algier</td>
                                            <td>2022</td>
                                            <td>Business and Data Science</td>
                                        </tr>
                                        <tr>
                                            <td>Marissa Russo</td>
                                            <td>2021</td>
                                            <td>Brain and Cognitive Sciences</td>
                                        </tr>
                                        <tr>
                                            <td>David Rieth</td>
                                            <td>2020</td>
                                            <td>Financial Economics</td>
                                        </tr>
                                        <tr>
                                            <td>Brendan Shamieh</td>
                                            <td>2020</td>
                                            <td>Financial Economics</td>
                                        </tr>
                                        <tr>
                                            <td>Shannon Cahalan</td>
                                            <td>2019</td>
                                            <td>Brain and Cognitive Sciences and Psychology</td>
                                        </tr>
                                        <tr>
                                            <td>Vanessa Davis</td>
                                            <td>2018</td>
                                            <td>Molecular Genetics</td>
                                        </tr>
                                        <tr>
                                            <td>Tyler Schmidt</td>
                                            <td>2018</td>
                                            <td>Data Science</td>
                                        </tr>
                                        <tr>
                                            <td>Jennifer Hennig</td>
                                            <td>2017</td>
                                            <td>Bioethics and Psychology</td>
                                        </tr>
                                        <tr>
                                            <td>Sarah Kaminsky</td>
                                            <td>2017</td>
                                            <td>Chemical Engineering</td>
                                        </tr>
                                        <tr>
                                            <td>Anya Joynt</td>
                                            <td>2016</td>
                                            <td>Molecular Genetics</td>
                                        </tr>
                                        <tr>
                                            <td>Patrick Walch</td>
                                            <td>2016</td>
                                            <td>Health, Behavior, & Society and Nursing</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}