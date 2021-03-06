import React from 'react'
import Image from 'next/image'

import { Head } from '../components'

import styles from '../styles/Home.module.css'

const container = ({ children, title }) => {
    return (
        <div className={styles.container}>
            <Head title={title} />

            <main className={styles.main}>{children}</main>

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

export default container
