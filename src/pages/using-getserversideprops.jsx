import React from 'react'
import axios from 'axios'

import { Card, Container } from '../components'

import styles from '../styles/Home.module.css'

const usingGetserversideprops = ({ data }) => {
    return (
        <Container title='Using getServerSideProps'>
            <h1 className={styles.title}>Using getServerSideProps</h1>

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

const getServerSideProps = async () => {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL)

    return {
        props: { data: response.data },
    }
}

export default usingGetserversideprops
export { getServerSideProps }
