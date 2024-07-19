import Link from "next/link"
import { useState, useEffect } from 'react'

export default function HeroCarousel() {
    const [banners, setBanners] = useState([{}])

    useEffect(() => {
        // Fetch banners from backend.
        fetch('/api/banners').then(async res => {
            let s = await res.json()
            setBanners(s.banners)
        }).catch(error => {
            console.error("Unable to fetch banner data.")
        })
    }, [])

    return (
        <div id="HeroCarousel" className="carousel slide" data-bs-ride="carousel" data-touch="true">
            <div className="carousel-indicators">
                {banners.map(function (obj, key) {
                    return <button className={key == 0 ? "active" : ""} type="button" data-bs-target="#HeroCarousel" data-bs-slide-to={key} aria-label={obj.description} key={key}/>
                })}
            </div>
            <div className="carousel-inner">
                {banners.map(function (obj, key) {
                    return (
                        <div className={`carousel-item${key == 0 ? " active" : ""}`} key={key}>
                            {obj.link !== undefined ? <Link href={obj.link} passHref legacyBehavior>
                                <picture>
                                    <source media="(min-width:1000px)" srcSet={obj.imageSrc} />
                                    <img width="100%" src={obj.mobileImageSrc} alt={obj.description} />
                                </picture>
                            </Link> : <picture>
                                <source media="(min-width:1000px)" srcSet={obj.imageSrc} />
                                <img width="100%" src={obj.mobileImageSrc} alt={obj.description} />
                            </picture>}
                        </div>
                    );
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#HeroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#HeroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}