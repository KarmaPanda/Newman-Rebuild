import styles from '../styles/StudentCarousel.module.scss'
import Glide from '@glidejs/glide'
import { useEffect } from "react";

export default function StudentTestimonialCarousel() {
    useEffect(() => {
        new Glide('.student-testimonial', {
            type: 'carousel',
            startAt: 0,
            perView: 3,
            gap: 50,
            autoplay: 5000,
            breakpoints: {
                800: {
                    perView: 2
                },
                400: {
                    perView: 1
                }
            }
        }).mount()
    })

    return (
        <div className="container mt-5">
            <div className="row mb-5">
                <div className="col">
                    <h1 className="text-center display-6 fw-bold mb-5">Student Testimonial</h1>
                    <div className="student-testimonial">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                <li className="glide__slide">
                                    <div className={styles.videoHeader}>
                                        <h4>Caroline Benec</h4>
                                        <h5>International Relations Major</h5>
                                        <h5>Class of 2021</h5>
                                    </div>
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/OlV7fPU2e9I" allowFullScreen />
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className={styles.videoHeader}>
                                        <h4>Michael Chavrimootoo</h4>
                                        <h5>Computer Science and Political Science Double Major (Computer Science Studies)</h5>
                                        <h5>Class of 2020 and Doctoral Student</h5>
                                    </div>
                                    <img src="/images/student-testimonial/2.png" />
                                </li>
                                <li className="glide__slide">
                                    <div className={styles.videoHeader}>
                                        <h4>Agustín Díaz Herrero and Patrick Forrestel</h4>
                                        <h5>International Relations Major and Chemistry Major</h5>
                                        <h5>Class of 2020 and Class of 2019</h5>
                                    </div>
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/4nQ_0rhli-M" allowFullScreen />
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className={styles.videoHeader}>
                                        <h4>Brian Filipiak</h4>
                                        <h5>Environmental Sciences Major</h5>
                                        <h5>Class of 2020</h5>
                                    </div>
                                    <img src="/images/student-testimonial/1.png" />
                                </li>
                                <li className="glide__slide">
                                    <div className={styles.videoHeader}>
                                        <h4>Nathan Leopold</h4>
                                        <h5>Business and International Relations Double Major</h5>
                                        <h5>Class of 2020</h5>
                                    </div>
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/DC6X742bPlU" allowFullScreen />
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className={styles.videoHeader}>
                                        <h4>Sarah Pursell</h4>
                                        <h5>Brain & Cognitive Sciences and Psychology Double Major</h5>
                                        <h5>Class of 2020</h5>
                                    </div>
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/WMRn00elwDs" allowFullScreen />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}