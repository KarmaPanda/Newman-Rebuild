// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const banners = (req, res) => {
    // TODO: Store all banners into DB and add interface to add/remove banners.
    res.status(200).json(
        {
            banners: [
                {
                    imageSrc: '/images/index/11022022/Fall2022banner-02.png',
                    mobileImageSrc: '/images/index/07202022/1-mobile.png',
                    description: 'Home Away from Home',
                    link: '/orientation'
                },
                {
                    imageSrc: '/images/index/11022022/Fall2022banner-03.png',
                    mobileImageSrc: '/images/index/04112022/8-mobile.png',
                    description: 'Building Project',
                    link: '/building'
                },
                {
                    imageSrc: '/images/index/11022022/Fall2022banner-04.png',
                    mobileImageSrc: '/images/index/07202022/1-mobile.png',
                    description: 'All Souls Month',
                    link: '/orientation'
                }
            ]
        }
    )
}

export default banners;