import Head from "next/head";
import Link from "next/link";

import styles from '../styles/PaymentSuccess.module.scss'
import bg from "../public/static/images/giving/student-appeal/1.jpg"

export default function PaymentSuccess() {
    return (
        <div>
            <Head>
                <title>UR Newman - Payment Successful</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={`${styles.main} container ${styles.responsiveContainer}`}>
                <div className={styles.background} style={{ backgroundImage: `url(${bg.src})` }}></div>
                <section className={styles.title}>
                    <h1>Payment Success</h1>
                </section>
                <main className={`${styles.content} row`}>
                    <div className="col text-center p-5">
                        <p><i className="far fa-check-circle fa-10x" style={{ color: 'green' }}></i></p>
                        <h2 className="">Thank for your donation!</h2>
                        <p>Your donation has been entered into our database.</p>
                        <Link href="/" passHref legacyBehavior><button className="btn btn-primary btn-lg btn-block">Click here to return to main page</button></Link>
                        <p><small>*This is currently our beta website, so not every page is complete on this. Visit <Link href="https://urnewman.org/">here</Link> for our main website.</small></p>
                    </div>
                </main>
            </div>

        </div>
    );
}