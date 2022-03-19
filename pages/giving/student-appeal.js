import Head from "next/head";
import DonationForm from "../../components/DonationForm";
import bg from "../../static/images/giving/student-appeal/1.jpg"

export default function StudentAppeal() {
    return(
        <div>
            <Head>
                <title>UR Newman - Student Appeal</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Catholic Community at the University of Rochester"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <DonationForm backgroundImage={bg.src} campaign={"Student Appeal"}/>
        </div>
    )
}