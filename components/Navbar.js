import Image from "next/image";
import { NavLink } from "./NavLink";

export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" href="/">
                    <Image src="/images/navbar/banner.png" width={183} height={59} alt={"Navbar Logo"} />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-lg-1">
                        <li className="nav-item">
                            <NavLink className="nav-link" href="/" exact><p>Home</p></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" href="/about"><p>About</p></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" href="/building"><p>Building Project</p></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" href="/calendar"><p>Calendar</p></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" href="https://www.usccb.org/bible/readings/index.cfm"><p>Daily
                                Readings</p></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" href="/events"><p>Events</p></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" href="/giving"><p>Giving</p></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" href="/groups"><p>Groups</p></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" href="/pub"><p>Publications</p></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" href="/streaming"><p>Streaming</p></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" href="/spiritual-life"><p>Spiritual Life</p></NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" href="/yespa"><p>Yes Pa</p></NavLink>
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