import Link from "next/link"

export default function HeroButttons() {
    return (
        <div className="container-fluid">
            <div className="row hero-buttons">
                <div className="col-md-4 hero-buttons-item" style={{
                    backgroundImage: "url('../images/index/hero-buttons/1.jpg')"
                }}>
                    <h3><Link href="/about" passHref>Register/Update Information</Link></h3>
                </div>
                <div className="col-md-4 hero-buttons-item" style={{
                    backgroundImage: "url('../images/index/hero-buttons/2.jpg')"
                }}>
                    <h3><Link href="/giving" passHref>Support Newman</Link></h3>
                </div>
                <div className="col-md-4 hero-buttons-item" style={{
                    backgroundImage: "url('../images/index/hero-buttons/3.jpg')",
                    backgroundPosition: "50% 20%"
                }}>
                    <h3><Link href="/groups/staff" passHref>Meet our Staff</Link></h3>
                </div>
            </div>
        </div>
    )
}