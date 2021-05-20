import useSWR from 'swr'
import axios from 'axios'
import React from 'react'

import { fetcher } from '../utils'
import { Card, Container } from '../components'

import styles from '../styles/Home.module.css'

const usingGetstaticpropsSwr = ({ initialData }) => {
    const { data } = useSWR(process.env.NEXT_PUBLIC_API_URL, fetcher, {
        initialData: initialData,
        refreshInterval: 1000,
    })

    return (
        <Container title='Using getStaticProps + SWR'>
            <h1 className={styles.title}>Using getStaticProps + SWR</h1>

            <div className={styles.cardWrapper}>
                {data.map((item, index) => {
                    return (
                        <Card key={index} title={item.title} body={item.body} />
                    )
                })}
            </div>
        </Container>
    )
}

const getStaticProps = async () => {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL)

    return {
        props: { initialData: response.data },
        revalidate: 1,
    }
}

export default usingGetstaticpropsSwr
export { getStaticProps }
