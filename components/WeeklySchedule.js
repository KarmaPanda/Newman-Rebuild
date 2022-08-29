import { useState, useEffect } from 'react'
import styles from '../styles/WeeklySchedule.module.scss'

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
        </div>
    )
}