import Link from "next/link"

// In the future, depreciate this module and integrate it into Notification.js
export default function HeaderNotification() {
    return (
        <div className="header-notification">
            <h5><Link href="/streaming" passHref>Click here to join us for mass via live streaming</Link></h5>
        </div>
    )
}