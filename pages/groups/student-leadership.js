import Head from "next/head";
import StaffPage from "../../components/StaffPage";
import SubPageCard from "../../components/SubPageCard";

export default function StudentLeadership() {
    return(
        <div>
            <Head>
                <title>UR Newman - Student Leadership</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Catholic Community at the University of Rochester"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className="subpage-cards pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="display-5">Student Leadership</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="River Campus E-Board" img="/images/groups/student-leadership/1.png"
                                     description="" link="/groups/rc-eboard"/>
                        <SubPageCard name="Eastman School of Music E-Board" img="/images/groups/student-leadership/2.png"
                                     description="" link="/groups/esm-eboard"/>
                        <SubPageCard name="Student Worker Staff" img="/images/groups/student-leadership/3.png"
                                     description="" link="/groups/student-staff"/>
                    </div>
                </div>
            </div>
        </div>
    )
}