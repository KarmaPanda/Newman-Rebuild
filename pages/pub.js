import Head from "next/head";
import Footer from "../components/Footer"
import Link from "next/link"

export default function Publications() {
    return (
        <div>
            <Head>
                <title>UR Newman - Publications</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="newman-primary-color newman-primary-text-color py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="display-5 pb-5">Publications</h1>
                            <div className="pb-5">
                                <h3>Annual Reports</h3>
                                <p><Link href="https://drive.google.com/open?id=1fkyFdDmnC_D-4LcslBS5aRTwI3Dju6_W" passHref>2020-2021</Link></p>
                                <p><Link href="https://drive.google.com/open?id=1GfNu-sRgn3Fdu6V5EUPsFFq__yoaT36J" passHref>2019-2020</Link></p>
                                <p><Link href="https://drive.google.com/open?id=1AuWAobwK61gdXUArvstIdYcz-JTXvJPm" passHref>2018-2019</Link></p>
                                <p><Link href="https://drive.google.com/open?id=1Tq9rbO022azQ3qCT137bJLqeVb7BQv1B" passHref>2017-2018</Link></p>
                                <p><Link href="https://drive.google.com/open?id=0B_146wWmYBsVUmtWRUluMHUxcjg" passHref>2016-2017</Link></p>
                            </div>
                            <div>
                                <h3>Newsletter</h3>
                                <p><Link href="https://drive.google.com/open?id=1FK2cMLsjcBDFBk4LuFbd53owLDnB5FDx" passHref>Spring 2022</Link></p>
                                <p><Link href="https://drive.google.com/open?id=1K6_5RG1AsTuuvrPJjHlDfhB6B86ozLjY" passHref>Fall 2021</Link></p>
                                <p><Link href="https://drive.google.com/open?id=1Ld9_Nn74kPZ5ulZWLt4lc6_v5BTYF6hO" passHref>Spring 2021</Link></p>
                                <p><Link href="https://drive.google.com/open?id=1xaNkK0YVQ0tEg299V-_3vpxPCGG1bjne" passHref>Fall 2020</Link></p>
                                <p><Link href="https://drive.google.com/open?id=17xx3kynVjV2ms8bpaYTomdOZxIjNo-LG" passHref>Spring 2020</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*<div className="subpage-cards pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="display-5">Publications</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Annual Reports" img="/images/pub/1.jpg"
                            description="" link="/pub/annual-report" />
                        <SubPageCard name="Newsletters" img="/images/pub/2.png"
                            description="" link="/pub/newsletter" />
                    </div>
                </div>
            </div>*/}

            <Footer />
        </div>
    )
}