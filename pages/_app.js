import '../styles/main.scss'

import Layout from '../components/layout'

import SSRProvider from 'react-bootstrap/SSRProvider'

function MyApp({ Component, pageProps }) {
    return (
        <SSRProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SSRProvider>
    )
}

export default MyApp;