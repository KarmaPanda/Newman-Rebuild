import Head from "next/head";
import StaffPage from "../../components/StaffPage";
import Footer from "../../components/Footer"

export default function ESMEBoard() {
    const members =
        [
            {
                "name": "Alexander Nick",
                "image": "/images/groups/student-leadership/esm-eboard/1.jpg",
                "description": "Class of 2022<br>Vocal Performance Major<br>Hometown: Pepperell, PA"
            }
        ]

    const buttons = [
        {
            "description": "Support Newman at Eastman's Leaders",
            "link": "https://drive.google.com/file/d/0B_146wWmYBsVek5xdjFQUDl3ZTQ/view?usp=sharing"
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

            <StaffPage title="Eastman School of Music E-Board" description="Called together as members of the body of Christ, the Catholic Newman Community at Eastman seeks to encourage all to strive toward the highest ideals of Christian spiritual, moral, and intellectual development as lived and taught in the rich tradition of the Catholic Church. We strive to provide support to the busy lives of Eastman Catholic students through our semesterly planned events, services, and liturgies." members={members} buttons={buttons} />
            
            <Footer/>
        </div>
    )
}