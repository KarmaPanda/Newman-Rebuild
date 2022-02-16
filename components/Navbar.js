import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <Image src="/images/navbar/banner.png" width={183} height={59} alt={"Navbar Logo"} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-lg-1">
                        <li className="nav-item">
                            <a className="nav-link" href="/about"><p>About</p></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/building"><p>Building Project</p></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/calendar"><p>Calendar</p></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://www.usccb.org/bible/readings/index.cfm"><p>Daily
                                Readings</p></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/events"><p>Events</p></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/giving"><p>Giving</p></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/groups"><p>Groups</p></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/pub"><p>Publications</p></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/streaming"><p>Streaming</p></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/spiritual-life"><p>Spiritual Life</p></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/yespa"><p>Yes Pa</p></a>
                        </li>
                    </ul>
                    {/*<form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>*/}
                </div>
            </div>
        </nav>
    )
}