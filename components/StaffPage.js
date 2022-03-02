import Head from "next/head";
import Hero from "./Hero";

export default function StaffPage({ title, description, members = [], buttons = [] }) {
    return (
        <div className="newman-primary-color">
            <Head>
                <title>UR Newman - {title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Hero title={title} description={description} buttons={buttons} />

            <div className="container pb-5 newman-primary-text-color">
                {
                    members.map(member =>
                        <div className="row staff">
                            <div className="col-md-6">
                                <img src={member.image} />
                            </div>
                            <div className="col-md-6">
                                <h3>{member.name}</h3>
                                <p dangerouslySetInnerHTML={{ __html: member.description }}></p>
                                <div className="contact-info row text-center mt-2">
                                    {
                                        member.phone == null ? null :
                                            <div className="phone-number col">
                                                <a href={"tel:" + member.phone.replace(new RegExp("-", "g"), "")}><i className="fas fa-phone-alt fa-3x" aria-hidden="true"></i></a>
                                                <p>{member.phone}</p>
                                            </div>
                                    }
                                    {
                                        member.email == null ? null :
                                            <div className="email-address col">
                                                <a href={"mailto:" + member.email}>
                                                    <i className="fas fa-inbox fa-3x" aria-hidden="true"></i>
                                                    <p>{member.email}</p>
                                                </a>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}