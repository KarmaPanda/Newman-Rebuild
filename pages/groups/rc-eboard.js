import Head from "next/head";
import Footer from "../../components/Footer";
import StaffPage from "../../components/StaffPage";

export default function RCEBoard() {
    const members =
        [
            {
                "name": "TBA",
                "image": "/images/groups/placeholder.png",
                "description": `Check back in the future for the new eboard!`
            },
        ]

    const buttons = [
        {
            "description": "Support Newman's Leaders",
            "link": "https://drive.google.com/file/d/0B_146wWmYBsVcWlsZWpvQWFXZk0/view?usp=sharing"
        }
    ]

    return (
        <div>
            <Head>
                <title>UR Newman - Student Leadership</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <StaffPage title="River Campus E-Board" description="E-Board, short for executive board, is the student-organized leadership team for the Catholic Newman Community. They organize Newman events, earmark budgeting, and brainstorm new ways to promote student engagement. Join them for any and all Newman-sponsored events, services, and liturgies on the River Campus." buttons={buttons} members={members} />
            <Footer />
        </div>
    )
}