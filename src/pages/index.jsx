import Image from 'next/image'
import { Head } from '../components'
import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <Head title='Next.js Data Fetching + SWR' />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    <a href='https://nextjs.org'>Next.js</a> Data Fetching +{' '}
                    <a href='https://swr.vercel.app/'>SWR</a>
                </h1>
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

export default Home
