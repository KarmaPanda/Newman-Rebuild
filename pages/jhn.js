import Head from "next/head";
import Footer from "../components/Footer"
import Link from "next/link"

import styles from '../styles/jhn.module.scss'
import bg from "../public/static/images/jhn/1.jpg"

export default function JHN() {
    return (
        <div>
            <Head>
                <title>UR Newman - Our Patron Saint</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.wrapper} style={{ backgroundImage: `url(${bg.src})` }}>
                <div className="container">
                    <div className={styles.topFiller}></div>
                    <header className={styles.title}>
                        <h1>St. John Henry Cardinal Newman</h1>
                    </header>
                    <section className="newman-primary-color newman-primary-text-color p-5">
                        <div className="container">
                            <div className="row">
                                <p className="lead">St. John Henry Cardinal Newman (February 21, 1801&#45;August 11, 1890) was a monumental character in the history of the Catholic Church, especially as it relates to college and university life.  Thus, it is no surprise that every Catholic center/parish at universities around the world (unless located at a Catholic institution) name St. Newman as their patron.  An alumnus of Oxford, a convert to Catholicism from Anglicanism, a church historian and university educator/founder, a member of the Oratory of Saint Philip Neri, and eventual cardinal, St. Newman was a brilliant man with a prolific aptitude for teaching, writing, and carrying the faith forward to its present situation.  In fact, St. Newman is oftentimes labeled as “the Father of the Second Vatican Council.”  Proclaimed <em>Venerable</em> in 1991, he was beatified by Pope Benedict XVI on September 19, 2010.  After a second miracle was approved in 2018, St. Newman was canonized by Pope Francis on October 13, 2019.  His Feast Day remains October 9.</p>
                            </div>
                        </div>
                    </section>
                    <section className={`${styles.learnMore} text-center p-4`}>
                        <div className="container">
                            <div className="row">
                                <h3>Learn more about St. John Henry Cardinal Newman by watching the video and visiting the links below.</h3>

                                <div className="col my-2">
                                    <Link href="https://www.newmancanonisation.com/newmans-life" passHref><button className="btn btn-info m-2">Read about St. Newman&apos;s Life in detail here</button></Link>
                                    <Link href="http://www.newmanreader.org/works/index.html" passHref><button className="btn btn-info m-2">Read many of St. Newman&apos;s works here</button></Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="video-container">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/AoChOhQ0Z1E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>

                                <div className={`${styles.seal} col p-5`}>
                                    <img  src="/images/jhn/1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className={styles.bottomFiller}></div>
                </div>
            </div>

            <Footer />
        </div>
    )
}