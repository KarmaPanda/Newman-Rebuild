import Head from "next/head";
import StaffPage from "../../components/StaffPage";

export default function RCEBoard() {
    const members =
        [
            {
                "name": "Ella Adams",
                "image": "/images/groups/student-leadership/rc-eboard/1.jpg",
                "description": `Class of 2024<br>Biomedical Engineering Major<br>Hometown: Pittsburgh, PA`
            },
            {
                "name": "Anapaula Avila",
                "image": "/images/groups/student-leadership/rc-eboard/2.jpg",
                "description": `Class of 2022<br>Biomedical Engineering Major<br>Hometown: Tucson, AZ`
            },
            {
                "name": "Michael Chavrimootoo",
                "image": "/images/groups/student-leadership/rc-eboard/3.jpg",
                "description": `Class of 2020 and Doctoral Student<br>Computer Science Studies<br>Hometown: Wooton, Phoenix, Mauritius`
            },
            {
                "name": "Hannah Keiper",
                "image": "/images/groups/student-leadership/rc-eboard/4.jpg",
                "description": `Class of 2023<br>Business and Digital Media Studies Double Majo<br>Hometown: Chester Springs, PA`
            },
            {
                "name": "Daniel Kelly",
                "image": "/images/groups/student-leadership/rc-eboard/5.jpeg",
                "description": `Class of 2024<br>Biomedical Engineering Major<br>Hometown: Geneseo, NY`
            },
            {
                "name": "Uzoma Ohajekwe",
                "image": "/images/groups/student-leadership/rc-eboard/6.jpg",
                "description": `Class of 2022<br>Data Science Major<br>Hometown: Scarsdale, NY`
            }

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
        </div>
    )
}