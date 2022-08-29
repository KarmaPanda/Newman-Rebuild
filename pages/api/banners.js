// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const banners = (req, res) => {
    // TODO: Store all banners into DB and add interface to add/remove banners.
    res.status(200).json(
        {
            banners: [
                {
                    imageSrc: '/images/index/07202022/1.png',
                    mobileImageSrc: '/images/index/07202022/1-mobile.png',
                    description: 'Class of 2026 Orientation',
                    link: '/orientation'
                },
                {
                    imageSrc: '/images/index/04112022/8.png',
                    mobileImageSrc: '/images/index/04112022/8-mobile.png',
                    description: 'Building Project',
                    link: '/building'
                }
            ]
        }
    )
}

export default banners;