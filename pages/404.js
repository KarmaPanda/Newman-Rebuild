import Error from 'next/error'
import redirect from 'nextjs-redirect'

import { useRouter } from 'next/router'
import Notification from '../components/Notification'

export default function Page() {
    const router = useRouter()
    const Redirect = redirect("https://urnewman-legacy.herokuapp.com" + router.asPath)

    return <Redirect>
        <Notification message={"If you see this 404 page, you are being redirected to our old website. Please wait..."}/>
        <Error statusCode={404} />
    </Redirect>
}