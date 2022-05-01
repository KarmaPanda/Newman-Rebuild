import Link from "next/link"

export default function HeroButttons() {
    return (
        <div className="container-fluid">
            <div className="row hero-buttons">
                <Link href="/update" passHref><div className="col-md-4 hero-buttons-item" style={{
                    backgroundImage: "url('../images/index/hero-buttons/1.jpg')"
                }}>
                    <h3>Register/Update Information</h3>
                </div></Link>
                <Link href="/giving" passHref><div className="col-md-4 hero-buttons-item" style={{
                    backgroundImage: "url('../images/index/hero-buttons/2.jpg')"
                }}>
                    <h3>Support Newman</h3>
                </div></Link>
                <Link href="/groups/staff" passHref><div className="col-md-4 hero-buttons-item" style={{
                    backgroundImage: "url('../images/index/hero-buttons/3.jpg')",
                    backgroundPosition: "50% 20%"
                }}>
                    <h3>Meet our staff</h3>
                </div></Link>
            </div>
        </div>
    )
}