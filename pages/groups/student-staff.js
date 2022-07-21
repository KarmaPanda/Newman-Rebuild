import Head from "next/head";
import Footer from "../../components/Footer";
import StaffPage from "../../components/StaffPage";

export default function StudentStaff() {
    const members =
        [
            {
                "name": "Sarah Desiderio",
                "image": "/images/groups/student-leadership/student-staff/2.jpg",
                "description": "Sarah, a member of the class of 2025 studying Health, Behavior, and Society, is involved with Newman's St. Sebastian Society, while also serving as one of the St. Sebastian Society/Yes Pa Coordinators. In her freetime, she is a varsity athlete for the Swimming and Diving team here at UR, an active member of the Fellowship of Christian Athletes (FCA), and enjoys exploring new cities/places with her friends and family.",
                "email": "sdesider@u.rochester.edu"
            },
            {
                "name": "James Lako",
                "image": "/images/groups/student-leadership/student-staff/5.jpg",
                "description": "James is a member of the class of 2023, majoring in Computer Science and minoring in Film and Media Studies. He also serves as the Office Specialist for Newman. On campus, he is involved with the African a cappella group, PASApella, as one of its co-captains, in addition to being a first-year D'Lion. James listens to music almost all of the time and he likes to sing and play his guitar. He also loves hanging out with friends and going for walks when it's not cold!",
                "email": "jlako@u.rochester.edu"
            },
            {
                "name": "Elizabeth Lawrence",
                "image": "/images/groups/student-leadership/student-staff/6.jpg",
                "description": "Elizabeth is a member of the class of 2025, studying Environmental Studies, Sustainability, and Spanish, and serves as one of the St. Sebastian Society/Yes Pa Coordinators. Outside of Newman, she is a member of Off Broadway On Campus (OBOC) and spends her free time writing, making music, and playing games with friends.",
                "email": "elawren8@u.rochester.edu"
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

            <StaffPage title="Student Leadership" description="" members={members} />
            <Footer />
        </div>
    )
}