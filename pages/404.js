import Error from 'next/error'
import redirect from 'nextjs-redirect'

import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter()
    const Redirect = redirect("https://urnewman-legacy.herokuapp.com" + router.asPath)

    return <Redirect>
        <Error statusCode={404} />
    </Redirect>
}