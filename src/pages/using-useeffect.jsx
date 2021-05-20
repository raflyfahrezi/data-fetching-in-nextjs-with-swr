import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { Card, Container } from '../components'

import styles from '../styles/Home.module.css'

const usingUseEffect = () => {
    const [data, setData] = useState([])

    useEffect(async () => {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL)

        setData(response.data)
    }, [])

    return (
        <Container title='Using useEffect'>
            <h1 className={styles.title}>Using UseEffect</h1>

            {data.length > 0 ? (
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
                    <h2>Loading</h2>
                </div>
            )}
        </Container>
    )
}

export default usingUseEffect
