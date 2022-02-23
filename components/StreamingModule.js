import { useState, useEffect } from 'react'
import styles from '../styles/streaming.module.scss'

export default function StreamingModule() {
    const [data, setData] = useState({
        videoURL: "",
        chatURL: ""
    })

    useEffect(() => {
        // Fetch schedule from backend.
        fetch('/api/streaming').then(async res => {
            let s = await res.json()
            console.log(s)
            let videoURL = "https://www.youtube.com/embed/" + s.videoId
            let chatURL = "https://www.youtube.com/live_chat?v=" + s.videoId + "&embed_domain=" + location.hostname

            setData({
                videoURL: videoURL,
                chatURL: chatURL
            })
        }).catch(error => {
            console.error(error)
        })
    }, [])

    return (
        <div className="container mt-5">
            <div className="row px-3 text-center">
                <div className={`${styles.iframeContainer}`}>
                    <div className={`${styles.videoContainer}`}>
                        <iframe width="560" height="315"
                            src={data.videoURL}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                    <div className={`${styles.chatContainer}`}>
                        <iframe width="700" height="400" src={data.chatURL} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                </div>
                <div className={`${styles.streaming}`}>
                    <h4 className='mt-5'>*If after clicking the play button above and you do not see a video, please keep refreshing the page.  The Mass live stream is usually active about 5-10 minutes before Mass begins.  Thank you for your patience.</h4>
                    <h5><a href="https://www.youtube.com/channel/UCYRxyoQ0THt7m3pruEKNw3A/live">Click here for an alternative link, if the above does not work.</a></h5>
                </div>
            </div>
        </div>
    )
}