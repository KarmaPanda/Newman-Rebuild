import Link from "next/link"

export default function HeroCarousel() {
    return (
        <div id="HeroCarousel" className="carousel slide" data-bs-ride="carousel" data-touch="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#HeroCarousel" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#HeroCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
                <button type="button" data-bs-target="#HeroCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
                <button type="button" data-bs-target="#HeroCarousel" data-bs-slide-to="3" aria-label="Slide 4" />
                <button type="button" data-bs-target="#HeroCarousel" data-bs-slide-to="4" aria-label="Slide 5" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <picture>
                        <source media="(min-width:1000px)" srcSet="/images/index/5.png" />
                        <img width="100%" src="/images/index/5.png" alt="Spring 2021 Newman" />
                    </picture>
                </div>
                <div className="carousel-item">
                    <picture>
                        <source media="(min-width:1000px)" srcSet="/images/index/6.png" />
                        <img width="100%" src="/images/index/6.png" alt="Sunday Mass" />
                    </picture>
                </div>
                <div className="carousel-item">
                    <picture>
                        <source media="(min-width:1000px)" srcSet="/images/index/7.png" />
                        <img width="100%" src="/images/index/7.png" alt="InstaMass" />
                    </picture>
                </div>
                <div className="carousel-item">
                    <picture>
                        <source media="(min-width:1000px)" srcSet="/images/index/8.png" />
                        <img width="100%" src="/images/index/8.png" alt="YesPa" />
                    </picture>
                </div>
                {/*<div className="carousel-item active">
                    <picture>
                        <source media="(min-width:1000px)" srcSet="/images/index/5.png" />
                        <img width="100%" src="/images/index/5.png" alt="Spring 2021 Newman" />
                    </picture>

                    
                    <picture>
                        <source media="(min-width:1000px)" srcSet="/images/index/1.png"/>
                        <img width="100%" src="/images/index/1-mobile.png" alt="Summer 2021 Newman"/>
                    </picture>
                    <div className="container">
                        <div className="carousel-caption">
                            <button type="button" className="btn btn-primary btn-lg px-2 me-md-2">Register / Update
                                Information
                            </button>
                            <button type="button" className="btn btn-success btn-lg px-4">Support Newman</button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <picture>
                        <source media="(min-width:1000px)" srcSet="/images/index/2.png" />
                        <img width="100%" src="/images/index/2-mobile.png" alt="Sunday Mass at 10:30AM, InstaPrayer at Wednesday 9PM" />
                    </picture>

                    <div className="carousel-caption">
                        <Link href="/streaming">
                            <button type="button" className="btn btn-primary btn-lg px-2 me-md-2">Sunday Mass
                            </button>
                        </Link>
                        <a href="https://rochester.zoom.us/j/2771228739">
                            <button type="button" className="btn btn-success btn-lg px-4">InstaPrayer</button>
                        </a>
                    </div>
                </div>
                <div className="carousel-item">
                    <a href="/giving/annual-appeal">
                        <picture>
                            <source media="(min-width:1000px)" srcSet="/images/index/3.png" />
                            <img width="100%" src="/images/index/3-mobile.png" alt="Donate to our ministry here" />
                        </picture>
                    </a>

                    <div className="carousel-caption">
                        <Link href="/giving/annual-appeal">
                            <button type="button" className="btn btn-success btn-lg px-2 me-md-2">
                                Click here to give!
                            </button>
                        </Link>
                    </div>
                </div>*/}
                <div className="carousel-item">
                    <Link href="/building" passHref>
                        <picture>
                            <source media="(min-width:1000px)" srcSet="/images/index/4.png" />
                            <img width="100%" src="/images/index/4-mobile.png" alt="Click to learn about our building project" />
                        </picture>
                    </Link>
                </div>
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
    )
}