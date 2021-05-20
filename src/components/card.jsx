import React from 'react'

import styles from '../styles/Home.module.css'

const card = ({ title, body }) => {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default card
