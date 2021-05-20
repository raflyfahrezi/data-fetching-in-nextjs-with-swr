import React from 'react'
import Image from 'next/image'

import { Card, Container } from '../components'

import styles from '../styles/Home.module.css'

const usingGetstaticprops = ({ data }) => {
    return (
        <Container title='Using getStaticProps'>
            <h1 className={styles.title}>Using getStaticProps</h1>

            {/* <div className={styles.cardWrapper}>
                {data.map((item, index) => {
                    return (
                        <Card key={index} title={item.title} body={item.body} />
                    )
                })}
            </div> */}
        </Container>
    )
}

export default usingGetstaticprops
