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
                <button type="button" data-bs-target="#HeroCarousel" data-bs-slide-to="5" aria-label="Slide 6" />
                <button type="button" data-bs-target="#HeroCarousel" data-bs-slide-to="6" aria-label="Slide 7" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <picture>
                        <source media="(min-width:1000px)" srcSet="/images/index/4112022/2.png" />
                        <img width="100%" src="/images/index/4112022/2.png" alt="Happy Easter" />
                    </picture>
                </div>
                <div className="carousel-item">
                    <Link href="/streaming" passHref>
                        <picture>
                            <source media="(min-width:1000px)" srcSet="/images/index/4112022/3.png" />
                            <img width="100%" src="/images/index/4112022/3.png" alt="Holy Week Schedule" />
                        </picture>
                    </Link>
                </div>
                <div className="carousel-item">
                    <picture>
                        <source media="(min-width:1000px)" srcSet="/images/index/4302022/1.png" />
                        <img width="100%" src="/images/index/4302022/1.png" alt="Happy Easter" />
                    </picture>
                </div>
                <div className="carousel-item">
                    <Link href="/giving/student-appeal" passHref>
                        <picture>
                            <source media="(min-width:1000px)" srcSet="/images/index/4112022/4.png" />
                            <img width="100%" src="/images/index/4112022/4.png" alt="Newman Student Appeal" />
                        </picture>
                    </Link>
                </div>
                <div className="carousel-item">
                    <Link href="/streaming" passHref>
                        <picture>
                            <source media="(min-width:1000px)" srcSet="/images/index/4112022/5.png" />
                            <img width="100%" src="/images/index/4112022/5.png" alt="Daily Mass" />
                        </picture>
                    </Link>
                </div>
                <div className="carousel-item">
                    <Link href="/streaming" passHref>
                        <picture>
                            <source media="(min-width:1000px)" srcSet="/images/index/4112022/7.png" />
                            <img width="100%" src="/images/index/4112022/7.png" alt="Sunday Mass" />
                        </picture>
                    </Link>
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