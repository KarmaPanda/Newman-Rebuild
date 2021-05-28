import styles from '../styles/Hero.module.scss'

export default function Hero() {
    // Have a slideshow of different heroes for different purposes.
    return (
        <div className="container col-xxl-8 px-4 py-5 border-bottom">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="images/index/h1.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
                         width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">UR Newman</h1>
                    <p className="lead">Welcome to our new website!</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-2 me-md-2">Register/Update Information</button>
                        <button type="button" className="btn btn-success btn-lg px-4">Support Newman</button>
                    </div>
                </div>
            </div>
        </div>
    )
}