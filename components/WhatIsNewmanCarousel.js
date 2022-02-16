import Glide from '@glidejs/glide'
import {useEffect} from "react";

export default function WhatIsNewmanCarousel() {
    useEffect(() => {
        new Glide('.what-is-newman', {
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
                    <h1 className="text-center display-6 fw-bold mb-5">What is Newman?</h1>
                    <div className="what-is-newman">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                <li className="glide__slide">
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/yjmxFFLwhXc" allowFullScreen/>
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/iP6XaDG19Uc" allowFullScreen/>
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/-U0mAtqogKw" allowFullScreen/>
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className="video-container">
                                        <iframe src="https://www.youtube.com/embed/M_l1SBbxi9U" allowFullScreen/>
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