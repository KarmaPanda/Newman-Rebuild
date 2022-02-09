import Link from "next/link"

export default function HeroButttons() {
    return(
        <div className="container-fluid">
            <div className="row hero-buttons">
                <div className="col-md-4 hero-buttons-item" style={{
                    backgroundImage: "url('../images/index/hero-buttons/1.jpg')"
                }}>
                    <Link href="/about"><h3>Register/Update Information</h3></Link>
                </div>
                <div className="col-md-4 hero-buttons-item" style={{
                    backgroundImage: "url('../images/index/hero-buttons/2.jpg')"
                }}>
                    <Link href="/giving"><h3>Support Newman</h3></Link>
                </div>
                <div className="col-md-4 hero-buttons-item" style={{
                    backgroundImage: "url('../images/index/hero-buttons/3.jpg')",
                    backgroundPosition: "50% 20%"
                }}>
                    <Link href="/groups/staff"><h3>Meet our Staff</h3></Link>
                </div>
            </div>
        </div>
    )
}