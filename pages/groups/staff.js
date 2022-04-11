import Head from "next/head";
import Footer from "../../components/Footer";
import StaffPage from "../../components/StaffPage";

export default function Staff() {
    const members =
        [
            {
                "name": "Rev. Brian C. Cool '06W (MS), '21W (EdD)",
                "image": "/images/groups/staff/1.jpg",
                "description": "Fr. Cool has served at the University of Rochester since 1999, currently chairs the Diocese of Rochester’s Public Policy Committee, and serves on the New York State Bishop’s Public Policy Committee. An avid Syracuse University Athletics and Boston Red Sox fan, Fr. Cool is a high school and collegiate lacrosse referee. He has an undergraduate degree from Nazareth College, graduate degrees from St. Mary’s Seminary & University and the University of Rochester, including a Doctorate of Education.",
                "email": "bcool@admin.rochester.edu",
                "phone": "585-275-8523"
            },
            {
                "name": "Breanna Dauphinee",
                "image": "/images/groups/staff/2.jpg",
                "description": "Breanna, a Rochester, NY, native, graduated from Nazareth College with a degree in Religious Studies, and joined the staff of the Newman Community as the Program Assistant for Campus Ministry. She has worked and volunteered in Faith Formation and Youth Ministry Programs, along with serving as a cantor in the Church for many years.",
                "email": "bdauphin@ur.rochester.edu",
                "phone": "585-275-8515"
            },
            {
                "name": "Darlene Giardina",
                "image": "/images/groups/staff/3.jpg",
                "description": "Retired controller of our own professional baseball club, the Rochester Red Wings, Darlene comes with 25 years of knowledge working in accounting where she oversaw the club finances and day to day operations. In 2012, Darlene was awarded the Rawlings Women Executive of the Year Award in Minor League Baseball for her dedication to her work. We are pleased Darlene has joined our team and are confident she will bring further success in helping us navigate our future growth through added compliance with University and Diocesan policies and good business practices. Darlene and her husband, Michael, have three sons and seven grandchildren and enjoy family time, boating, and travel.",
                "email": "dgiardi2@ur.rochester.edu",
                "phone": "585-275-8515"
            },
            {
                "name": "Sr. Leandra Kosmoski, ssj",
                "image": "/images/groups/staff/4.jpg",
                "description": "Sr. Leandra now ministers to students at the University of Rochester at the height of a 30-year career spanning pastoral care, campus ministry, education, and spiritual direction. She is committed to guiding young adults to a deeper relationship with God. Originally a graduate of D’Youville College in Buffalo, NY, Sr. Leandra also holds master’s degrees from Loyola University in Chicago, IL, State University College of New York at Buffalo, and Creighton University in Nebraska.",
                "email": "lkosmosk@ur.rochester.edu",
                "phone": "585-275-8521"
            },
            {
                "name": "Laurie Martin",
                "image": "/images/groups/staff/5.jpg",
                "description": "Laurie has served as a Finance Director at the Diocese of Rochester since 2014. In addition to directing the finances for the Catholic Newman Community at the University of Rochester, she also provides services to the Church of the Assumption, the Church of the Resurrection, the RIT Newman Catholic Community, St. Louis Church, and St. John of Rochester Catholic Church. She studied Business Administration (Accounting and Finance) at the Rochester Institute of Technology.",
                "email": "laurie.martin@dor.org",
                "phone": "585-586-5675,222"
            },/*
            {
                "name": "",
                "image": "/images/groups/",
                "description": "",
                "email": "",
                "phone": ""
            }*/
        ]

    return (
        <div>
            <Head>
                <title>UR Newman - Staff</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Catholic Community at the University of Rochester"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <StaffPage title="Staff" description="" members={members}/>
            <Footer/>
        </div>
    )
}