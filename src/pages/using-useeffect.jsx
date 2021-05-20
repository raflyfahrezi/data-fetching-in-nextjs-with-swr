import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { Head, Card } from '../components'

import styles from '../styles/Home.module.css'

const usingUseEffect = () => {
    const [data, setData] = useState([])

    useEffect(async () => {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL)

        setData(response.data)
    }, [])

    return (
        <div className={styles.container}>
            <Head title='Using useEffect' />

            <main className={styles.main}>
                <h1 className={styles.title}>Using UseEffect</h1>

                <div>
                    {data.length > 0 &&
                        data.map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    title={item.title}
                                    body={item.body}
                                />
                            )
                        })}
                </div>
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
