import Head from "next/head";
import Footer from "../components/Footer"

export default function ContactUs() {
    return (
        <div>
            <Head>
                <title>UR Newman - Contact Us</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="footer-content p-5">
                <div className="container">
                    <div>
                        <h2 className="display-6 fw-bold mb-5">Contact Us or Visit Us</h2>
                    </div>
                    <div className="row">
                        <div className="footer-phone">
                            <p><i className="fas fa-phone-alt fa-3x" /></p>
                            <p className="h2"><a href="tel:585-275-8515">+1 (585) 275-8515</a></p>
                        </div>
                        <div className="footer-email">
                            <p><i className="fas fa-inbox fa-3x" /></p>
                            <p className="h2"><a
                                href="mailto:catholicnewmancommunity@rochester.edu">catholicnewmancommunity@rochester.edu</a>
                            </p>
                        </div>
                        <div className="footer-location">
                            <p><i className="fas fa-map-marker-alt fa-3x mb-3" /></p>
                            {/*<p className="h2">Interfaith Chapel<br/>1045 Joseph C. Wilson Blvd.<br/>Rochester, NY
                                    14627</p>*/}
                            <div className="video-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5823.687583563699!2d-77.631391!3d43.1288076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6b4b7b9be2195%3A0xf8a48cf8e44993f1!2sCatholic%20Newman%20Community%20at%20the%20University%20of%20Rochester!5e0!3m2!1sen!2sus!4v1631246979509!5m2!1sen!2sus"
                                    width="600" height="450" allowFullScreen="" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-social-media row p-5">
                        <div className="row">
                            <div className="col-sm mb-5 mb-sm-0">
                                <a href="https://www.instagram.com/ur_newman/" target="_blank" rel="noreferrer"
                                ><i className="fa fa-instagram fa-5x" aria-hidden="true" /></a>
                            </div>
                            <div className="col-sm mb-5 mb-sm-0">
                                <a href="https://www.facebook.com/newmanatur" target="_blank" rel="noreferrer"
                                ><i className="fa fa-facebook-official fa-5x" aria-hidden="true" /></a>
                            </div>
                            <div className="col-sm mb-5 mb-sm-0">
                                <a href="https://twitter.com/ur_newman" target="_blank" rel="noreferrer"
                                ><i className="fa fa-twitter-square fa-5x" aria-hidden="true" /></a>
                            </div>
                            <div className="col-sm mb-5 mb-sm-0">
                                <a href="https://www.linkedin.com/company/urnewman" target="_blank" rel="noreferrer"
                                ><i className="fa fa-linkedin-square fa-5x" aria-hidden="true" /></a>
                            </div>
                            <div className="col-sm">
                                <a href="https://www.youtube.com/c/CatholicNewmanCommunityattheUniversityofRochester"
                                    target="_blank" rel="noreferrer"><i
                                        className="fa fa-youtube-play fa-5x" aria-hidden="true" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}