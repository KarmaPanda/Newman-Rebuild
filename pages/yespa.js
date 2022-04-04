import Head from "next/head";

import styles from '../styles/YesPa.module.scss'

export default function YesPa() {
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
                <picture>
                    <source media="(min-width:1000px)" srcSet="/images/yespa/3.png" />
                    <img width="100%" src="/images/yespa/3.png" alt="Sarkis YesPa Endowment Fund Banner" />
                </picture>
            </div>

            <div className={styles.content}>
                <div className="mx-3 my-5 d-flex justify-content-center">
                    <div className="flex-row">
                        <h3><i>Bringing Success Into the Lives of Others</i></h3>
                        <hr width="50%" />
                        <p className="pt-2">Yes Pa has been assisting young people and adults in developing character since 2002 by</p>
                        <ul className="fa-ul">
                            <li className="li-sp"><i className="fa-li fa fa-check" style={{ color: "rgb(195,17,22);" }}></i>Focusing on self-control, positive attitude, and perseverance.</li>
                            <li className="li-sp"><i className="fa-li fa fa-check" style={{ color: "rgb(195,17,22);" }}></i>Emphasizing integrity, determination, and enthusiasm as the keys to happiness and success.</li>
                            <li className="li-sp"><i className="fa-li fa fa-check" style={{ color: "rgb(195,17,22);" }}></i>Assisting students, incarcerated individuals, those with special needs, and many others to believe in themselves and be the best they can.</li>
                        </ul>
                        <hr width="50%" />
                        <h3 className="py-3"><i>Best of all, it's free!</i></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}