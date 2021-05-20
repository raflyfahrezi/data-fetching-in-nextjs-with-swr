import React from 'react'
import Head from 'next/head'

const head = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
    )
}

export default head