import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react"
import Footer from '../components/Footer';

import styles from '../styles/Building.module.scss'

export default function Building() {
    const [loading, setLoading] = useState(true)
    const [adobeCSS, setAdobeCSS] = useState(null)

    useEffect(() => {
        setAdobeCSS(process.env.NEXT_PUBLIC_ADOBE_CSS)
        setLoading(false)
    }, [])

    return (!loading ?
        <div>
            <Head>
                <title>UR Newman - Building</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%20Slab&display=swap" />
                <link rel="stylesheet" href={"https://use.typekit.net/" + adobeCSS} />
            </Head>

            <header className={styles.headerContent}>
                <Link href="https://www.rochester.edu/advancement/" passHref><img src="../images/building/u-of-r-logo.png" alt="University of Rochester"/></Link>
            </header>

            <main>
                <div className={styles.buildingHero}>
                    <img src="../images/building/buildinggraphicwithslogan3.png" alt="Newman Building Rendering"/>
                </div>

                <div className={styles.contentAlt}>
                    <div className="container pt-5">
                        <div className="row">
                            <div className={styles.quoteSection}>
                                <div className="row">
                                    <div className="col p-5">
                                        <div className={styles.utopia}>
                                            <img className="rounded-circle" src="../images/building/sarah.jpg" alt="Sarah C. Mangelsdorf"/>
                                            <h1><strong>“Through your wonderful support, you are helping us create new opportunities for
                                                worship, faith formation, and leadership service for our growing Catholic student
                                                population. The Catholic Center will be a warm and welcoming place, serving
                                                students’ intellectual and spiritual needs when they need it most.”</strong></h1>
                                        </div>

                                        <div className={styles.roboto}>
                                            <h1><strong>–SARAH C. MANGELSDORF</strong></h1>
                                            <h2><i>PRESIDENT AND G. ROBERT WITMER, JR. UNIVERSITY PROFESSOR</i></h2>
                                        </div>
                                    </div>
                                    <div className="col p-5">
                                        <div className={styles.utopia}>
                                            <img className="rounded-circle" src="../images/building/frcool.jpg" alt="Rev. Brian C. Cool"/>
                                            <h1><strong>“College years are a critical developmental time, and our students are
                                                navigating
                                                complex and confusing spiritual, intellectual, and moral challenges. Newman can
                                                provide
                                                the foundation to prepare our students to be disciples far beyond campus. Your gift
                                                today will help us make history.”</strong></h1>
                                        </div>

                                        <div className={styles.roboto}>
                                            <h1><strong>–REV. BRIAN C. COOL &apos;06W (MS), &apos;21W (EdD)</strong></h1>
                                            <h2><i>J. NELSON HOFFMAN &apos;55 AND JOAN DUTCHER HOFFMAN &apos;55 DIRECTOR OF CATHOLIC NEWMAN
                                                COMMUNITY
                                                PASTORAL CARE</i></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className="container">
                        <div className={`${styles.splitSection} ${styles.utopia}`}>
                            <h1>Where we are currently</h1>
                            <div className="row">
                                <div className={`col ${styles.mainSection} ${styles.roboto} p-5`}>
                                    <p>For more than 50 years, Newman priests and chaplains have supported Catholic students and the
                                        entire University community, providing spiritual, emotional, and practical counsel to those in
                                        need.</p>
                                    <p>By engaging in prayer, attending Mass, participating in Kairos Retreats, and celebrating the
                                        sacraments, our students become authentic witnesses of Christian life.</p>
                                    <p>Inspirational programs, retreats, and volunteer opportunities such as Alternative Spring Break
                                        help
                                        our students grow personally, spiritually, and socially while developing valuable leadership
                                        skills.</p>
                                    <p>Through lectures, interfaith dialogue, and study, students enhance their understanding of the
                                        Catholic
                                        tradition. They gain greater self-awareness and the ability to firmly articulate their
                                        faith.</p>
                                </div>
                                <div className={`col ${styles.subSection} ${styles.roboto} p-5`}>
                                    <ul>
                                        <li>Newman demonstrates how to lead a life of <strong>morality</strong>, compatible with Church
                                            doctrine
                                        </li>
                                        <li>Newman fosters in oneself a personal and communal <strong>relationship</strong> with Christ
                                        </li>
                                        <li>Newman teaches students to show <strong>compassion</strong> to the poor and vulnerable</li>
                                        <li>Newman provides the confidence to give <strong>witness</strong> to one&apos;s faith</li>
                                        <li>Newman offers the tools to align oneself with <strong>justice</strong> and the tenets of
                                            Catholic Social Teaching
                                        </li>
                                        <li>Newman seeks to sow a healthy balance of <strong>compromise</strong> and
                                            <strong>truth</strong> in a world full of vice, acquisition, and exclusion
                                        </li>
                                        <li>Newman prepares one to be an effective <strong>leader</strong> in his or her future faith
                                            journey
                                        </li>
                                        <li>Newman helps one discern the possibility of a life of <strong>service</strong> in the Church<sup><a
                                            href="https://www.usccb.org/beliefs-and-teachings/how-we-teach/catholic-education/campus-ministry/upload/A-National-Study-on-Catholic-Campus-Ministry.pdf">1</a></sup>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className="container">
                        <div className={`${styles.splitSection} ${styles.utopia}`}>
                            <h1>Where we are going</h1>
                        </div>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className="container">
                        <div className={`${styles.fullSection}`}>
                            <img src="images/building/timeline_fall_2022.png" alt="Building Project Timeline"/>
                        </div>
                    </div>
                </div>

                <div className={styles.donation}>
                    <div className="container">
                        <div className="row">
                            <iframe src="https://drive.google.com/file/d/1edOtGE5WMREuTOTkV4_5t4qGfLXCP-qi/preview" width="100%" height="560px"></iframe>
                            <div className={`py-5 col ${styles.utopiaSubhead}`}>
                                <h3><strong>Help make this project a complete success—donate today.</strong></h3>
                                <Link href="https://securelb.imodules.com/s/1676/giving19/giving19.aspx?sid=1676&gid=2&pgid=7030&cid=10728&sort=1&bledit=1&dids=805&appealcode=21C04" passHref>
                                    <button className={styles.donateBtn}>Donate Here</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className={styles.content}>
                <div className="container">
                    <div className={`mb-5 ${styles.splitSection} ${styles.utopia}`}>
                        <h1>Why we need to do so</h1>
                        <div className="row">
                            <div className={`col p-5 ${styles.mainSection} ${styles.roboto}`}>
                                <p>The undergraduate student body has increased by more than 30 percent since 2006, and growth in
                                    the
                                    Catholic student population has outpaced all other religious groups. Twenty-five percent of our
                                    undergraduates today identify as Catholic. Newman still operates in the same limited space with
                                    essentially the same number of staff as when it was first established in 1963. To expand
                                    programs and reach an underserved population that includes first-generation and international
                                    students, Eastman, medical, nursing, and other graduate students, and those who have drifted
                                    away from their faith,
                                    Newman needs more space.</p>
                            </div>
                            <div className={`col p-5 ${styles.subSection} ${styles.roboto}`}>
                                <ul>
                                    <li>With nearly <strong>2,000</strong> students, Catholicism is the largest religious tradition
                                        at
                                        <strong> UR</strong></li>
                                    <li>Our ministry engages over <strong>450</strong> students in programming and Mass weekly</li>
                                    <li>Newman sponsors over <strong>100</strong> programs and ministry offerings each year</li>
                                    <li>There are more than <strong>75</strong> students in leadership roles at Newman</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className="container">
                        <div className={styles.fullSection}>
                            <div className="row p-3">
                                <div className={styles.utopia}>
                                    <h1>Learn more!</h1>
                                </div>
                                <div className={styles.utopia}>
                                    <p>To learn more about the project in detail, hear from current and past students, and discover more opportunities about how you can help accelerate the process, please visit our YouTube playlist by clicking <Link href="https://youtube.com/playlist?list=PLzVtmzyY6OUQD6NFEFLMHwSOym7-Xs7BI" passHref>here</Link>, which highlights the many information sessions and testimonials surrounding the Catholic Newman Center.</p>
                                    <p>If you would like to support this project with a donation via credit card, please click on the &quot;Donate Here&quot; button above or below and you will be directed to a secure University of Rochester giving page.  If you would like to send a check, please make the donation out to &quot;University of Rochester, Newman Building Fund&quot; and mail it to the address below.  If you would like to make a gift via securities or stocks, or would like to learn about available naming opportunities, please reach out to Jared Longmore at +1 (585) 276-7249 or <a href="mailto:jared.longmore@rochester.edu">jared.longmore@rochester.edu</a>.</p>
                                    <div className={styles.address}>
                                        <p>Newman Building and Maintenance Fund (A12197)</p>
                                        <p>University of Rochester Office of Gift and Donor Records</p>
                                        <p>300 East River Rd.</p>
                                        <p>Box 270032</p>
                                        <p>Rochester, NY  14627</p>
                                    </div>
                                    <p>Thank you for your interest and please reach out to us with any general questions about giving to the project or on the building itself at +1 (585) 275-8515 or <a href="mailto:catholicnewmancommunity@rochester.edu">catholicnewmancommunity@rochester.edu</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.thankYouBackground}>
                    <div className={styles.thankYouFiller}></div>
                    <div classame={styles.content}>
                        <div className="container">
                            <div className={styles.fullSection}>
                                <div className={`row ${styles.title} p-5`}>
                                    <div className={styles.utopia}>
                                        <h1>Thank you!</h1>
                                    </div>
                                    <div className={styles.roboto}>
                                        <p>Thank you to all who have donated to this transformational project thus far! We honestly could
                                            not have done any of this without you—creating new and exciting opportunities for worship, faith
                                            formation, social fellowship, and service for generations to come!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.thankYouFiller}></div>
                </div>

                <div className={styles.content}>
                    <div className="container mt-5">
                        <div className={styles.fullSection}>
                            <div className={styles.utopia}>
                                <h1>A message of support</h1>
                            </div>
                            <div className={`${styles.videoContainer} mb-4`}>
                                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/MB7n6Mm6lT4" frameBorder="0"
                                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                                    allowFullScreen></iframe>
                                                            </div>
                            <div className={`${styles.videoContainer}`}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/nv2qsE-edWU" frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.donation}>
                    <div className="container">
                        <div className="row">
                            <div className={`col ${styles.utopiaSubhead}`}>
                                <h2><strong>Donate here and make a difference in our future.</strong></h2>
                                <a href="https://securelb.imodules.com/s/1676/giving19/giving19.aspx?sid=1676&gid=2&pgid=7030&cid=10728&sort=1&bledit=1&dids=805&appealcode=21C04">
                                    <button className={styles.donateBtn}>Donate Here</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.contentAlt}>
                    <div className="container mt-5 p-5">
                        <div className={styles.quoteSection}>
                            <div className="row">
                                <div className="col">
                                    <img className="rounded-circle" src="images/building/jeffrunner.jpg" alt="Jeffrey Runner"/>
                                    <div className={styles.utopia}>
                                        <h1><strong>“The Newman Community cultivates and serves all aspects of our students’ lives and
                                            provides a welcoming space for personal growth, faith, and leadership. We wholeheartedly
                                            support Newman’s quest to expand their ministry and better serve our growing student
                                            population.”</strong></h1>
                                    </div>
                                    <div className={styles.roboto}>
                                        <h1><strong>–JEFFREY RUNNER</strong></h1>
                                        <h2><i>DEAN OF THE COLLEGE IN ARTS, SCIENCES & ENGINEERING, VICE PROVOST AND UNIVERSITY DEAN OF
                                            EDUCATION</i></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div> : null
    )
}