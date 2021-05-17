import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <Image src="/images/navbar/banner.png" width={183} height={59}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-lg-1">
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/building">Building Project</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/calendar">Calendar</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://www.usccb.org/bible/readings/index.cfm">Daily
                                Readings</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/events">Events</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/giving">Giving</a>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" href="/groups">Groups</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/pub">Publications</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/streaming">Streaming</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/spiritual-life">Spiritual Life</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/yespa">Yes Pa</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}