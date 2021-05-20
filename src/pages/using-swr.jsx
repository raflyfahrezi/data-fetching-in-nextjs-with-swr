import React from 'react'
import useSWR from 'swr'

import { fetcher } from '../utils'
import { Card, Container } from '../components'

import styles from '../styles/Home.module.css'

const usingSwr = () => {
    const { data } = useSWR(process.env.NEXT_PUBLIC_API_URL, fetcher)

    return (
        <Container title='Using SWR'>
            <h1 className={styles.title}>Using SWR</h1>

            {data ? (
                <div className={styles.cardWrapper}>
                    {data.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                title={item.title}
                                body={item.body}
                            />
                        )
                    })}
                </div>
            ) : (
                <div>
                    <p>Loading</p>
                </div>
            )}
        </Container>
    )
}

export default usingSwr
