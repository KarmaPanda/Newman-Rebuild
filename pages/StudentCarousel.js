import styles from '../styles/StudentCarousel.module.scss'
import Glide from '@glidejs/glide'
import {useEffect} from "react";

export default function StudentCarousel() {
    useEffect(() => {
        new Glide('.glide', {
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
        <div className="container">
            <div className="row mb-5">
                <div className="col">
                    <h1 className="text-center display-6 fw-bold mb-5">Senior Reflections</h1>
                    <div className="glide">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                <li className="glide__slide">
                                    <div className={styles.videoHeader}>
                                        <h4>Trevor Scott</h4>
                                        <h5>Vocal Performance Major</h5>
                                        <h5>Class of 2021</h5>
                                    </div>
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/0-5vjbMgvEE" allowFullScreen/>
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className={styles.videoHeader}>
                                        <h4>Dominick Harasimiuk</h4>
                                        <h5>Computer Science and Financial Economics Double Major</h5>
                                        <h5>Class of 2021</h5>
                                    </div>
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/J537ByEOtlU" allowFullScreen/>
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className={styles.videoHeader}>
                                        <h4>Alydia Meinecke</h4>
                                        <h5>Biology and Dance Double Major</h5>
                                        <h5>Class of 2021</h5>
                                    </div>
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/9-fF61UN9wo" allowFullScreen/>
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className={styles.videoHeader}>
                                        <h4>Jennifer Carson</h4>
                                        <h5>Mechanical Engineering Major</h5>
                                        <h5>Class of 2021</h5>
                                    </div>
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/xLUkJBhdNHk" allowFullScreen/>
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className={styles.videoHeader}>
                                        <h4>Daniel Busaba</h4>
                                        <h5>Computer Science Major</h5>
                                        <h5>Class of 2020</h5>
                                    </div>
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/HVqdxXXKPZI" allowFullScreen/>
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className={styles.videoHeader}>
                                        <h4>Michael Taylor</h4>
                                        <h5>Optics Major</h5>
                                        <h5>Class of 2020</h5>
                                    </div>
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/MgZMbXp-Cc8" allowFullScreen/>
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className={styles.videoHeader}>
                                        <h4>Anthony Gurunian</h4>
                                        <h5>Biomedical Engineering Major</h5>
                                        <h5>Class of 2021</h5>
                                    </div>
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/SbsdaxjXB2o" allowFullScreen/>
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className={styles.videoHeader}>
                                        <h4>Alec Tapia</h4>
                                        <h5>Mechanical Engineering Major</h5>
                                        <h5>Class of 2021</h5>
                                    </div>
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/7RWaDsiO6HQ" allowFullScreen/>
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