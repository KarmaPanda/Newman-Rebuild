import Head from "next/head";
import Footer from "../components/Footer"
import SubPageCard from "../components/SubPageCard";

export default function SpiritualLife() {
    return (
        <div>
            <Head>
                <title>UR Newman - Spiritual Life</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Catholic Community at the University of Rochester" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="subpage-cards pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1 className="display-5">Spiritual Life</h1>
                        </div>
                    </div>
                    <div className={`newman-primary-text-color text-center row`}>
                        <div className="col-sm-6">
                            <i className="fas fa-file-alt fa-3x" />
                            <h2 className="section-heading">Other Information</h2>

                            <h3><em>Prayer Intentions</em></h3>
                            <p>Please feel free to submit any prayer intentions <a
                                href="https://secure.lglforms.com/form_engine/s/vMpafpnnX11HINU7HhtJrw">here</a> or reach
                                out to us directly at <a
                                    href="mailto:catholicnewmancommunity@rochester.edu">catholicnewmancommunity@rochester.edu</a> or
                                +1 (585) 275-8515. We will put them in our prayer box, and recognize all supplications at
                                each
                                Sunday Mass and Wednesday InstaMass.</p>

                            <h3><em>Sacrament of Reconciliation</em></h3>
                            <p>During the Academic Year, confessions are held on Sundays, 30 minutes
                                before Masses, and on Wednesdays, 1 hour before Mass. However, you can also schedule
                                confession anytime by appointment; to do so, please contact
                                Fr. Brian Cool at <a
                                    href="mailto:bcool@admin.rochester.edu">bcool@admin.rochester.edu</a> or +1 (585)
                                275-8523. Please click <Link href="/spiritual-life/confession"><a>here</a></Link> for some
                                penitential resources.</p>
                        </div>
                        <div className="col-sm-6">
                            <i className="fas fa-scroll fa-3x" />
                            <h2 className="section-heading">More Resources</h2>
                            <h3><em>Celebrate the Psalms</em></h3>
                            <p>Please click <a
                                href="http://celebratethepsalms.blogspot.com/">here</a> to read
                                weekly reflections on the Psalms by one of our very own, Rochester alumnus Barry Lamont &apos;64.
                                He not
                                only delves into the complexity of these laments/praises to the divine, but relates them to
                                our
                                current, daily situations.</p>
                            <h3><em>Daily Meditations with Richard Rohr</em></h3>
                            <p>Please click <a
                                href="https://cac.org/category/daily-meditations/">here</a> to
                                read a series of daily meditations by famous priest and spiritual writer, Fr. Richard Rohr,
                                O.F.M.
                                Join him as he seeks to integrate God&apos;s endless love with our very own human condition. You
                                can also
                                sign up to receive these meditations via email.</p>
                            <h3><em>The Examen with James Martin</em></h3>
                            <p>
                                Please click <a href="https://examen.libsyn.com/">here</a> to listen to a daily reflective
                                prayer by
                                renowned priest and author, Fr. James Martin, S.J. This particular way of immersing oneself
                                in
                                everyday intercession to God derives itself from the <i>Spiritual Exercises</i> of Saint
                                Ignatius of
                                Loyola.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Becoming Catholic/Confirmation" img="/images/spiritual-life/1.png"
                            description="" link="/spiritual-life/catholic" />
                        <SubPageCard name="Hospital Ministry" img="/images/spiritual-life/2.jpg"
                            description="" link="/spiritual-life/hospital-ministry" />
                        <SubPageCard name="Marriage/Weddings" img="/images/spiritual-life/3.png"
                            description="" link="/spiritual-life/marriage" />
                    </div>
                    <div className="row justify-content-center">
                        <SubPageCard name="Reconciliation" img="/images/spiritual-life/4.png"
                            description="" link="/spiritual-life/confession" />
                        <SubPageCard name="Students Offering Support (Stephen Ministry)" img="/images/spiritual-life/5.png"
                            description="" link="/spiritual-life/stephen-ministry" />
                        <SubPageCard name="Volunteer Ministry" img="/images/spiritual-life/6.png"
                            description="" link="/spiritual-life/lectors" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}