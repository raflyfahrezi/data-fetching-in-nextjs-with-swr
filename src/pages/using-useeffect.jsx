import Image from 'next/image'
import React, { useEffect } from 'react'

import { Head } from '../components'

import styles from '../styles/Home.module.css'

const usingUseEffect = () => {
    return (
        <div className={styles.container}>
            <Head title='Using useEffect' />

            <main className={styles.main}>
                <h1 className={styles.title}>Using UseEffect</h1>

                <div></div>
            </main>

            <footer className={styles.footer}>
                <a
                    href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image
                            src='/vercel.svg'
                            alt='Vercel Logo'
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    )
}

export default usingUseEffect