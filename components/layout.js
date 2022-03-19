import Navbar from "./Navbar";

import Script from 'next/script'

export default function Layout({children}) {
    return(
        <>
            <Navbar/>
            <main>{children}</main>

            <Script src="https://kit.fontawesome.com/b794bafed8.js" crossOrigin="anonymous"/>

            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
                    crossOrigin="anonymous"/>
        </>
    )
}