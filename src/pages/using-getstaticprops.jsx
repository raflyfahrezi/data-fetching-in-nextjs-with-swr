import React from 'react'
import axios from 'axios'

import { Card, Container } from '../components'

import styles from '../styles/Home.module.css'

const usingGetstaticprops = ({ data }) => {
    return (
        <Container title='Using getStaticProps'>
            <h1 className={styles.title}>Using getStaticProps</h1>

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
        props: { data: response.data },
        revalidate: 1,
    }
}

export default usingGetstaticprops
export { getStaticProps }
