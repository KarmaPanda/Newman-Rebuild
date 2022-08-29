export default function TextSignUp() {
    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Signup for Text Updates</h1>
                    <p className="col-lg-10 fs-5">Sign up here for text message updates from Newman! Periodically, we
                        will inform you of our Daily Mass schedule and other special events at Newman.</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form method="post" action="https://app.flocknote.com/group/50556/addToGroupFromOutside" target="_blank" className="p-4 p-md-5 border rounded-3 bg-light">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="fName" name="fName"
                                placeholder="John" />
                            <label htmlFor="fName">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="lName" name="lName"
                                placeholder="Doe" />
                            <label htmlFor="lName">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="email" name="email"
                                placeholder="name@example.com" />
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="tel" className="form-control" id="mobile_phone" name="mobile_phone"
                                placeholder="Password" />
                            <label htmlFor="mobile_phone">Phone Number</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                        <hr className="my-4" />
                        <small className="text-muted">By clicking Sign up, you agree to receive text messages. Msg & Data rates may apply.</small>
                    </form>
                </div>
            </div>
        </div>
    )
}