import Link from "next/link"

export default function HeaderNotification() {
    return (
        <div className="header-notification">
            <h5><Link href="/streaming" passHref>Click here to join us for mass via live streaming</Link></h5>
        </div>
    )
}