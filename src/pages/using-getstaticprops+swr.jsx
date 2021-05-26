import useSWR from 'swr'
import axios from 'axios'
import React from 'react'

import { fetcher } from '../utils'
import { Card, Container } from '../components'

import styles from '../styles/Home.module.css'

const usingGetstaticpropsSwr = ({ initialData }) => {
    const { data } = useSWR(process.env.NEXT_PUBLIC_API_URL_2, fetcher, {
        initialData: initialData,
        refreshInterval: 5000,
    })

    return (
        <Container title='Using getStaticProps + SWR'>
            <h1 className={styles.title}>Using getStaticProps + SWR</h1>

            <div className={styles.cardWrapper}>
                {data.results.map((item, index) => {
                    const { first, last } = item.name

                    return (
                        <Card
                            key={index}
                            title={`${first} ${last}`}
                            body={item.email}
                        />
                    )
                })}
            </div>
        </Container>
    )
}

const getStaticProps = async () => {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL_2)

    return {
        props: { initialData: response.data },
        revalidate: 1,
    }
}

export default usingGetstaticpropsSwr
export { getStaticProps }
