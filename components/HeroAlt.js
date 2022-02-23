export default function HeroAlt({title, description}) {
    return (
        <div className="px-4 my-5 text-center newman-primary-color newman-primary-text-color">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-lg-6 mx-auto">
                    {title == "" ? null : <h1 className="display-4 fw-bold">{title}</h1>}
                    {description == "" ? null : <p className="lead mb-4" dangerouslySetInnerHTML={{ __html: description }}></p>}
                    {/*<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-2 me-md-2">Register / Update Information</button>
                        <button type="button" className="btn btn-success btn-lg px-4">Support Newman</button>
                    </div>*/}
                </div>
            </div>
        </div>
    )
}