// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const schedule = (req, res) => {
    // TODO: Store all schedules into DB and add interface to add/remove schedule items.
    res.status(200).json(
        {
            schedule: [
                {
                    event: '<a href="events/mass">Mass</a>',
                    day: 'Sunday',
                    time: '10:30 AM',
                    location: 'Interfaith Chapel'
                },
                {
                    event: '<a href="events/mass">Mass</a>',
                    day: 'Sunday',
                    time: '7:00 PM (Academic Year Only)',
                    location: 'Interfaith Chapel'
                },
                {
                    event: '<a href="events/instamass">InstaMass</a>',
                    day: 'Wednesday',
                    time: '9:00 PM',
                    location: 'Interfaith Chapel (Sanctuary Level)'
                },
                {
                    event: '<a href="events/newman-night">Newman Nite</a>',
                    day: 'Thursday',
                    time: '6:00 PM',
                    location: 'Interfaith Chapel (River Level)'
                }
            ]
        }
    )
}

export default schedule;