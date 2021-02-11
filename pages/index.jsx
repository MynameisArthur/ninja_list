import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name='keywords' content='ninjas' />
            </Head>
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam omnis nemo perspiciatis, necessitatibus
                    repudiandae quidem quae placeat! Nulla, quibusdam facere
                    tenetur a veritatis eligendi fugit obcaecati, aliquid
                    nostrum fuga laudantium!
                </p>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam omnis nemo perspiciatis, necessitatibus
                    repudiandae quidem quae placeat! Nulla, quibusdam facere
                    tenetur a veritatis eligendi fugit obcaecati, aliquid
                    nostrum fuga laudantium!
                </p>
                <Link href='/ninjas'>
                    <a className={styles.btn}>See Ninja Listing</a>
                </Link>
            </div>
        </>
    );
}
