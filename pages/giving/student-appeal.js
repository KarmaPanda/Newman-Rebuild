import Head from "next/head";

import DonationForm from "../../components/DonationForm";
import bg from "../../public/static/images/giving/student-appeal/1.jpg"

export default function StudentAppeal() {
    return (
        <div>
            <Head>
                <title>UR Newman - Student Appeal</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DonationForm backgroundImage={bg.src} campaign={"Newman Student Appeal"} campaignMessage={"Change the UR campus forever and bring our Catholic faith to generations!  By filling out this form and giving by PayPal or Venmo (options will appear below) you will join hundreds of others in this historic effort. And remember, when we reach 250 students, the project will be given $100,000! So $1, $5 or more will be transformative!<br>~Peace, Fr. Cool"} />
        </div>
    )
}