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
                    imageSrc: '/images/index/22112022/1.png',
                    mobileImageSrc: '/images/index/22112022/1.png',
                    description: 'Day of Penance',

                },
                {
                                    imageSrc: '/images/index/22112022/3.png',
                                    mobileImageSrc: '/images/index/22112022/3.png',  
                                    description: 'Christmas-Midnight Mass',

                                }



            ]
        }
    )
}

export default banners;