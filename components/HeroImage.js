export default function HeroImage({ imageSrc, mobileImageSrc, description }) {
    return (
        <div>
            <source media="(min-width:1000px)" srcSet={mobileImageSrc} />
            <img width="100%" src={imageSrc} alt={description} />
        </div>
    )
}