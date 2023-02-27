// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const banners = (req, res) => {
    // TODO: Store all banners into DB and add interface to add/remove banners.
    res.status(200).json(
        {
            banners: [
            
                {
                    imageSrc: '/images/index/11022022/Fall2022banner-03.png',
                    mobileImageSrc: '/images/index/11022022/Fall2022bannerMobile-08.png',
                    description: 'Building Project',

                    link:"/building"
                },
                {
                    imageSrc: '/images/index/11022022/New2.png',
                    mobileImageSrc: '/images/index/11022022/New2.png',
                    description: 'Schedule',

                },
                {
                    imageSrc: '/images/index/11022022/New1.png',
                    mobileImageSrc: '/images/index/11022022/New1.png',  
                    description: 'Ash Wednesday. 2023',

                                }



            ]
        }
    )
}

export default banners;