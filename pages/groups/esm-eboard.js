import Head from "next/head";
import StaffPage from "../../components/StaffPage";

export default function ESMEBoard() {
    const members =
        [
            {
                "name": "",
                "image": "/images/groups/student-leadership/1.jpg",
                "description": "",
                "email": "",
                "phone": ""
            },
            {
                "name": "",
                "image": "/images/groups/student-leadership/2.jpg",
                "description": "",
                "email": "",
                "phone": ""
            }
        ]

    return(
        <div>
            <Head>
                <title>UR Newman - Student Leadership</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Catholic Community at the University of Rochester"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <StaffPage title="Student Leadership" description="" members={members}/>
        </div>
    )
}