import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/HeroCarousel.module.scss'

export default function HeroCarousel() {

    return (
        <div id="HeroCarousel" className="carousel slide" data-bs-ride="carousel" data-touch="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#HeroCarousel" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"/>
                <button type="button" data-bs-target="#HeroCarousel" data-bs-slide-to="1" aria-label="Slide 2"/>
                <button type="button" data-bs-target="#HeroCarousel" data-bs-slide-to="2" aria-label="Slide 3"/>
                <button type="button" data-bs-target="#HeroCarousel" data-bs-slide-to="3" aria-label="Slide 4"/>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <picture>
                        <source media="(min-width:1000px)" srcSet="/images/index/1.png"/>
                        <img width="100%" src="/images/index/1-mobile.png"/>
                    </picture>

                    {/*<div className="container">
                        <div className="carousel-caption">
                            <button type="button" className="btn btn-primary btn-lg px-2 me-md-2">Register / Update
                                Information
                            </button>
                            <button type="button" className="btn btn-success btn-lg px-4">Support Newman</button>
                        </div>
                    </div>*/}
                </div>
                <div className="carousel-item">
                    <picture>
                        <source media="(min-width:1000px)" srcSet="/images/index/2.png"/>
                        <img width="100%" src="/images/index/2-mobile.png"/>
                    </picture>

                    {/*<div className="carousel-caption">
                        <Link href="/streaming">
                            <button type="button" className="btn btn-primary btn-lg px-2 me-md-2">Sunday Mass
                            </button>
                        </Link>
                        <a href="https://rochester.zoom.us/j/2771228739">
                            <button type="button" className="btn btn-success btn-lg px-4">InstaPrayer</button>
                        </a>
                    </div>*/}
                </div>
                <div className="carousel-item">
                    <a href="/giving/annual-appeal">
                        <picture>
                            <source media="(min-width:1000px)" srcSet="/images/index/3.png"/>
                            <img width="100%" src="/images/index/3-mobile.png"/>
                        </picture>
                    </a>

                    {/*<div className="carousel-caption">
                        <Link href="/giving/annual-appeal">
                            <button type="button" className="btn btn-success btn-lg px-2 me-md-2">
                                Click here to give!
                            </button>
                        </Link>
                    </div>*/}
                </div>
                <div className="carousel-item">
                    <a href="/building">
                        <picture>
                            <source media="(min-width:1000px)" srcSet="/images/index/4.png"/>
                            <img width="100%" src="/images/index/4-mobile.png"/>
                        </picture>
                    </a>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#HeroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#HeroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}