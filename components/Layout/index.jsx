import React from 'react'
import Head from 'next/head'
import Footer from '../Footer'
import Contact from '../Contact'

const Layout = ({ children, title = 'next-temple-demo' }) => {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="keywords" content={['Manga', 'Novel', 'Shop', 'Next']} />
                <meta name="description" content="next-temple-demo" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" key="twcard" />
                <meta name="twitter:creator" content='alohadancemeow' key="twhandle" />

                {/* Open Graph */}
                <meta property="og:url" content="next-temple-demo" key="ogurl" />
                {/* <meta property="og:image" content='/image3.gif' key="ogimage" /> */}
                {/* <meta property="og:site_name" content="https://next-demo-shop.vercel.app/" key="ogsitename" /> */}
                <meta property="og:title" content="next-temple-demo" key="ogtitle" />
                <meta property="og:description" content="next-temple-demo" key="ogdesc" />
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {children}
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default Layout