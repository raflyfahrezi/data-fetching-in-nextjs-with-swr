import React, { Fragment } from 'react'
import NextNprogress from 'nextjs-progressbar'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <Fragment>
            <NextNprogress height='5' />
            <Component {...pageProps} />
        </Fragment>
    )
}

export default MyApp
