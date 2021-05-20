import React from 'react'

import { Link, Container } from '../components'

import styles from '../styles/Home.module.css'

const Home = () => {
    const list = [
        { url: 'using-useeffect', name: 'Using useEffect' },
        { url: 'using-getstaticprops', name: 'Using getStaticProps' },
        { url: 'using-getserversideprops', name: 'Using getServerSideProps' },
        { url: 'using-swr', name: 'Using SWR' },
        { url: 'using-getstaticprops+swr', name: 'Using getStaticProps + SWR' },
    ]

    return (
        <Container title='Next.js Data Fetching + SWR'>
            <h1 className={styles.title}>
                <a href='https://nextjs.org'>Next.js</a> Data Fetching +{' '}
                <a href='https://swr.vercel.app/'>SWR</a>
            </h1>

            <ul>
                {list.map((item, index) => {
                    return (
                        <li>
                            <Link key={index} href={item.url}>
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <p>
                Source code{' '}
                <a
                    href='https://github.com/raflyfahrezi/data-fetching-in-nextjs-with-swr'
                    target='_blank'
                >
                    here
                </a>
            </p>
        </Container>
    )
}

export default Home
