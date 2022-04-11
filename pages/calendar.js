import Head from "next/head";
import Footer from "../components/Footer";

export default function Calendar() {
    return (
        <div>
            <Head>
                <title>UR Newman - Calendar</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="newman-primary-color text-center">
                <div className="container py-5">
                    <div className="row">
                        <div className="col">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="https://calendar.google.com/calendar/embed?wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=cm9jaGVzdGVyY2F0aG9saWNAZ21haWwuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=YWM4Zjc4YTg0bjhoZmdvNmJ2dG80M2oyOTY5aHJxcHVAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%230062a1&amp;color=%23008000&amp;color=%23cc0000&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=1&amp;showTabs=1&amp;showCalendars=1&amp;showTz=1" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}