import Head from "next/head";
import Hero from "./Hero";

export default function StaffPage({title, description, members = []}) {
    return (
        <div className="newman-primary-color">
            <Head>
                <title>UR Newman - {title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Catholic Community at the University of Rochester"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Hero title={title} description={description}/>

            <div className="container pb-5 newman-primary-text-color">
                {
                    members.map(member =>
                        <div className="row staff">
                            <div className="col-md-6">
                                <img src={member.image}/>
                            </div>
                            <div className="col-md-6">
                                <h3>{member.name}</h3>
                                <p>{member.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}