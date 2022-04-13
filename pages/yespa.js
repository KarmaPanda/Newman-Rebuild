import Head from "next/head";
import { useEffect } from "react";
import Glide from "@glidejs/glide";

import styles from '../styles/YesPa.module.scss'
import Link from "next/link";
import Footer from "../components/Footer";

export default function YesPa() {
    useEffect(() => {
        new Glide('.yespa-pdf', {
            type: 'carousel',
            startAt: 0,
            perView: 3,
            gap: 50,
            autoplay: 5000,
            breakpoints: {
                800: {
                    perView: 2
                },
                400: {
                    perView: 1
                }
            }
        }).mount()
    })

    return (
        <div>
            <Head>
                <title>UR Newman - Yes Pa</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <picture>
                    <source media="(min-width:1000px)" srcSet="/images/yespa/2.png" />
                    <img width="100%" src="/images/yespa/2.png" alt="YesPa Banner" />
                </picture>
            </div>

            <section className={styles.content}>
                <div className="mx-3 my-5 d-flex justify-content-center">
                    <div className="flex-row">
                        <h3><i>Bringing Success Into the Lives of Others</i></h3>
                        <hr width="50%" />
                        <p className="pt-2">Yes Pa has been assisting young people and adults in developing character since 2002 by</p>
                        <ul className={`fa-ul ${styles.contentList}`}>
                            <li className="li-sp"><i className="fa-li fa fa-check"></i>Focusing on self-control, positive attitude, and perseverance.</li>
                            <li className="li-sp"><i className="fa-li fa fa-check"></i>Emphasizing integrity, determination, and enthusiasm as the keys to happiness and success.</li>
                            <li className="li-sp"><i className="fa-li fa fa-check"></i>Assisting students, incarcerated individuals, those with special needs, and many others to believe in themselves and be the best they can.</li>
                        </ul>
                        <hr width="50%" />
                        <h3 className="py-3"><i>Best of all, it&apos;s free!</i></h3>
                    </div>
                </div>
            </section>

            <section className={`${styles.content} newman-primary-color newman-primary-text-color`}>
                <div className="py-5 container">
                    <div className="row">
                        <div className="col">
                            <h1>Three Crucial Lessons</h1>
                            <hr className={`my-3 ${styles.headerDivider}`} />
                            <p>In the summer of 1938, three major events changed the life of Fred Sarkis forever. These three, 5-minute lessons are the basis of the Yes Pa program.</p>
                            <p>By selling strawberries door-to-door in the summer, Fred learned the power of enthusiasm. He also learned the importance of an education and the golden rule. A talk with his Pa made Fred realize that only he was responsible for where he would go with the rest of his life. Fred turned the truck into a study center, and at night, Fred studied under a kerosene lamp. He thought, <em>&quot;Abe Lincoln did it, why can&apos;t I? And he became president of the U.S.&quot;</em></p>

                            <ul className={`nav nav-pills nav-fill mt-3 ${styles.tabNav}`} id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-1-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1" aria-selected="true">The Power of Enthusiasm</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-2-tab" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2" aria-selected="false">The Importance of Education</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-3-tab" data-bs-toggle="pill" data-bs-target="#pills-3" type="button" role="tab" aria-controls="pills-3" aria-selected="false">Integrity in All Relationships</button>
                                </li>
                            </ul>
                            <div className={`tab-content ${styles.tabContent}`} id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                                    <p><em>(Selling Strawberries)</em> — This lesson changed Fred&apos;s attitude from negative to positive. He immediately stopped being shy and timid. He became friendlier and happier.</p>
                                </div>
                                <div className="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                                    <p><em>(The Basket Story)</em> — One fateful day, Fred made the biggest decision of his young life. He realized he was responsible for the course his life would take, his destiny. He firmly believed that if he studied hard, he could be anything he wanted to be.</p>
                                </div>
                                <div className="tab-pane fade" id="pills-3" role="tabpanel" aria-labelledby="pills-3-tab">
                                    <p><em>(The Golden Rule)</em> — Do unto others as you would have them do unto you. Be fair and honest. Do not lie. Do not cheat. Do not steal. Be the same in school with your classmates, with your friends, with your family, when you get married, when you have children, or if you work for someone or are in business for yourself. You will be happier and a more peaceful person.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <picture>
                    <source media="(min-width:1000px)" srcSet="/images/yespa/3.png" />
                    <img width="100%" src="/images/yespa/3.png" alt="Sarkis YesPa Endowment Fund Banner" />
                </picture>
                <picture>
                    <source media="(min-width:1000px)" srcSet="/images/yespa/4.png" />
                    <img width="100%" src="/images/yespa/4.png" alt="Fred Sarkis" />
                </picture>
            </div>

            <section className={`${styles.content} newman-primary-color newman-primary-text-color py-5`}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>About the Founder</h1>
                            <hr className={`my-3 ${styles.headerDivider}`} />
                            <p>Born on May 16, 1926, Fred Sarkis is a WWII vet, dedicated to helping kids be all they can be.  In Yes Pa, he shares the same lessons that transformed his life when he was a poor child with a bad attitude, who was bullied because his skin was darker than his peers.</p>
                            <p>Fred became a millionaire because of the lessons of personal responsibility that he learned from his father.  Once he embraced three simple messages, he began to excel in school, obtaining his high school degree at age 16. At 17, Fred bought his mother a house.  He joined the Navy at age 18.  Being the oldest boy of 10 children, at 24, Fred became the head of the family when his Pa passed away at the age of 54.  He earned his first million at age 34.  Fred built a major ski area and lake village, lost it all, and recovered.</p>
                            <p>Retiring at the age of 65, Fred became an author and motivational speaker, and has been giving back to the community ever since.  The not-for-profit, Yes Pa Foundation, is based on his autobiography, <i><a href="https://www.authorhouse.com/en/bookstore/bookdetails/232914-Prisoner-of-the-Truck">Prisoner of the Truck</a></i>.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.content} py-5`}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Free Resources</h1>
                            <hr className={`my-3 ${styles.headerDivider}`} />
                            <div className="yespa-pdf">
                                <div className="glide__track" data-glide-el="track">
                                    <ul className="glide__slides">
                                        <li className="glide__slide">
                                            <iframe src="https://drive.google.com/file/d/1UXFHUwPfwTGZoDhwxsy7BOADnZ-n31_u/preview" width="100%" height="400px"></iframe>
                                            <p>Click here to <Link href="https://drive.google.com/uc?export=download&id=1UXFHUwPfwTGZoDhwxsy7BOADnZ-n31_u" passHref>download</Link> the resource.</p>
                                        </li>
                                        <li className="glide__slide">
                                            <iframe src="https://drive.google.com/file/d/1h3P4q7QiDmgzxCdO_bNwYUwZ20mT_P5V/preview" width="100%" height="400px"></iframe>
                                            <p>Click here to <Link href="https://drive.google.com/uc?export=download&id=1h3P4q7QiDmgzxCdO_bNwYUwZ20mT_P5V" passHref>download</Link> the resource.</p>
                                        </li>
                                        <li className="glide__slide">
                                            <iframe src="https://drive.google.com/file/d/1C56F0gsA096No9j13v3iIjVtQDSjLmii/preview" width="100%" height="400px"></iframe>
                                            <p>Click here to <Link href="https://drive.google.com/uc?export=download&id=1C56F0gsA096No9j13v3iIjVtQDSjLmii" passHref>download</Link> the resource.</p>
                                        </li>
                                        <li className="glide__slide">
                                            <iframe src="https://drive.google.com/file/d/15-xoSIy3ROsxY9Jo_zYIN8772-e_Dm8R/preview" width="100%" height="400px"></iframe>
                                            <p>Click here to <Link href="https://drive.google.com/uc?export=download&id=15-xoSIy3ROsxY9Jo_zYIN8772-e_Dm8R" passHref>download</Link> the resource.</p>
                                        </li>
                                        <li className="glide__slide">
                                            <iframe src="https://drive.google.com/file/d/1EfVsc6knbMRPX-R0pBYABt0ARP2Ybbtb/preview" width="100%" height="400px"></iframe>
                                            <p>Click here to <Link href="https://drive.google.com/uc?export=download&id=1EfVsc6knbMRPX-R0pBYABt0ARP2Ybbtb" passHref>download</Link> the resource.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.content} footer-content py-5  newman-primary-color newman-primary-text-color`}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Connect With Us</h1>
                        </div>
                    </div>
                    <div className="footer-social-media row p-5 text-center">
                        <div className="row">
                            <div className="col-sm mb-5 mb-sm-0">
                                <a href="https://www.instagram.com/yespafoundation" target="_blank" rel="noreferrer"
                                ><i className="fa fa-instagram fa-5x" aria-hidden="true" /></a>
                            </div>
                            <div className="col-sm mb-5 mb-sm-0">
                                <a href="http://www.facebook.com/yespafoundation" target="_blank" rel="noreferrer"
                                ><i className="fa fa-facebook-official fa-5x" aria-hidden="true" /></a>
                            </div>
                            <div className="col-sm mb-5 mb-sm-0">
                                <a href="https://twitter.com/yespafoundation" target="_blank" rel="noreferrer"
                                ><i className="fa fa-twitter-square fa-5x" aria-hidden="true" /></a>
                            </div>
                            <div className="col-sm mb-5 mb-sm-0">
                                <a href="https://www.linkedin.com/company/yespafoundation" target="_blank" rel="noreferrer"
                                ><i className="fa fa-linkedin-square fa-5x" aria-hidden="true" /></a>
                            </div>
                            <div className="col-sm">
                                <a href="https://www.youtube.com/user/yespaprogram"
                                    target="_blank" rel="noreferrer"><i
                                        className="fa fa-youtube-play fa-5x" aria-hidden="true" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}