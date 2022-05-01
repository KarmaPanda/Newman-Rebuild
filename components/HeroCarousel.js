import Link from "next/link"

export default function HeroCarousel() {
    return (
        <div id="HeroCarousel" className="carousel slide" data-bs-ride="carousel" data-touch="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#HeroCarousel" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#HeroCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
                <button type="button" data-bs-target="#HeroCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <picture>
                        <source media="(min-width:1000px)" srcSet="/images/index/4112022/2.png" />
                        <img width="100%" src="/images/index/4112022/2.png" alt="Happy Easter" />
                    </picture>
                </div>
                <div className="carousel-item">
                    <picture>
                        <source media="(min-width:1000px)" srcSet="/images/index/4302022/1.png" />
                        <img width="100%" src="/images/index/4302022/1.png" alt="Happy Easter" />
                    </picture>
                </div>
                <div className="carousel-item">
                    <Link href="/building" passHref>
                        <picture>
                            <source media="(min-width:1000px)" srcSet="/images/index/4112022/8.png" />
                            <img width="100%" src="/images/index/4112022/8.png" alt="Click to learn about our building project" />
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