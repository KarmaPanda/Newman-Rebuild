// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const schedule = (req, res) => {
    // TODO: Store all schedules into DB and add interface to add/remove schedule items.
    res.status(200).json(
        {
            schedule: [
                {
                    event: '<a href="groups/music-ministry">Music Ministry/Choir Rehearsal</a>',
                    day: 'Sunday',
                    time: '9:30AM (Academic Year Only)',
                    location: 'Interfaith Chapel (River Level)'
                },
                {
                    event: '<a href="spiritual-life/confession">Confession</a>',
                    day: 'Sunday',
                    time: '10AM (Academic Year Only)',
                    location: 'Interfaith Chapel (Middle Level)'
                },
                {
                    event: '<a href="events/mass">Mass</a>',
                    day: 'Sunday',
                    time: '10:30AM',
                    location: 'Interfaith Chapel (River Level) and <a href="/streaming">Live Streaming</a>'
                },
                {
                    event: '<a href="groups/music-ministry">Music Ministry/Choir Rehearsal</a>',
                    day: 'Sunday',
                    time: '6PM (Academic Year Only)',
                    location: 'Interfaith Chapel (River Level)'
                },
                {
                    event: '<a href="spiritual-life/confession">Confession</a>',
                    day: 'Sunday',
                    time: '6:30PM (Academic Year Only)',
                    location: 'Interfaith Chapel (Middle Level)'
                },
                {
                    event: '<a href="events/mass">Mass</a>',
                    day: 'Sunday',
                    time: '7PM (Academic Year Only)',
                    location: 'Interfaith Chapel (River Level) and <a href="/streaming">Live Streaming</a>'
                },
                {
                    event: '<a href="events/instamass">Daily Mass</a>',
                    day: 'Monday',
                    time: '5:30PM (Academic Year Only)',
                    location: 'Interfaith Chapel (Sanctuary Level) and <a href="https://www.instagram.com/ur_newman/">Instagram Live</a>'
                },
                {
                    event: '<a href="events/instamass">Guided Meditation</a>',
                    day: 'Monday',
                    time: '7PM (Academic Year Only)',
                    location: 'Interfaith Chapel (Middle Level)'
                },
                {
                    event: '<a href="events/instamass">Daily Mass</a>',
                    day: 'Tuesday',
                    time: '5:30PM (Academic Year Only)',
                    location: 'Interfaith Chapel (Sanctuary Level) and <a href="https://www.instagram.com/ur_newman/">Instagram Live</a>'
                },
                {
                    event: '<a href="groups/rosary">Rosary Group</a>',
                    day: 'Tuesday',
                    time: '6PM (Academic Year Only)',
                    location: 'Interfaith Chapel (Middle Level)'
                },
                {
                    event: '<a href="spiritual-life/confession">Confession</a>',
                    day: 'Wednesday',
                    time: '8PM (Academic Year Only)',
                    location: 'Interfaith Chapel (Middle Level)'
                },
                {
                    event: '<a href="groups/music-ministry">Music Ministry/Choir Rehearsal</a>',
                    day: 'Wednesday',
                    time: '8PM (Academic Year Only)',
                    location: 'Interfaith Chapel (Sanctuary Level)'
                },
                {
                    event: '<a href="events/instamass">InstaMass</a>',
                    day: 'Wednesday',
                    time: '9PM (Academic Year Only)',
                    location: 'Interfaith Chapel (Sanctuary Level) and <a href="https://www.instagram.com/ur_newman/">Instagram Live</a>'
                },
                {
                    event: '<a href="events/instamass">Daily Mass</a>',
                    day: 'Thursday',
                    time: '5:30PM (Academic Year Only)',
                    location: 'Interfaith Chapel (Sanctuary Level) and <a href="https://www.instagram.com/ur_newman/">Instagram Live</a>'
                },
                {
                    event: '<a href="events/newman-night">Newman Nite</a>',
                    day: 'Thursday',
                    time: '6PM (Academic Year Only)',
                    location: 'Interfaith Chapel (River Level)'
                },
                {
                    event: '<a href="events/adoration">Adoration</a>',
                    day: 'First Friday of Month',
                    time: '12:30PM (Academic Year Only)',
                    location: 'Interfaith Chapel (River Level)'
                },
            ]
        }
    )
}  

export default schedule;