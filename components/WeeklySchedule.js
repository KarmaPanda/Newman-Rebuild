import { useState, useEffect } from 'react'
import styles from '../styles/WeeklySchedule.module.scss'
import Link from 'next/link'

export default function WeeklySchedule() {
    const [schedule, setSchedule] = useState([{
        event: "Loading",
        day: "...",
        time: "...",
        location: "..."
    }])

    useEffect(() => {
        // Fetch schedule from backend.
        fetch('/api/schedule').then(async res => {
            let s = await res.json()
            setSchedule(s.schedule)
        }).catch(error => {
            console.error("Unable to fetch schedule data.")
        })
    }, [])

    return (
        <div className={`${styles.schedule} py-5`}>
            <i className="fas fa-calendar-check mb-2 fa-4x" />
            <h1 className="text-center display-6 fw-bold mb-5">Weekly Schedule</h1>

            <div className="container mb-5">
                <div className="row">
                    <div className="col-sm-12 table-responsive">
                        <table className="table" style={{ color: "white" }}>
                            <thead>
                                <tr>
                                    <th scope="col">Event</th>
                                    <th scope="col">Day</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    schedule.map((s, key) => {
                                        return <tr key={key}>
                                            <td scope="row" dangerouslySetInnerHTML={{ __html: s.event }}></td>
                                            <td dangerouslySetInnerHTML={{ __html: s.day }}></td>
                                            <td dangerouslySetInnerHTML={{ __html: s.time }}></td>
                                            <td dangerouslySetInnerHTML={{ __html: s.location }}></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <i className="fas fa-file-alt fa-3x" />
                        <h2 className="section-heading">Other Information</h2>
                        <h3><em>Holy Days of Obligation and Feast Days</em></h3>
                        <p>Holy Day of Obligation Masses are held at 12:30PM and Feast Day Masses
                            are
                            scheduled on an individual basis. Please see the <Link href="/calendar" passHref>Newman Calendar</Link> for
                            more
                            information on specific Mass times and locations. You may also consult the diocesan
                            website <Link
                                href="https://www.dor.org/learning-and-living-your-faith/holy-days-of-obligation/">here</Link> for
                            the list of obligatory Masses.
                        </p>

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
                            275-8523. Please click <a href="/spiritual-life/confession">here</a> for some
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
            </div>
        </div>
    )
}