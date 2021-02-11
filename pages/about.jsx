import styles from '../styles/Home.module.css';
import Head from 'next/head';
const About = () => {
    return (
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name='keywords' content='ninjas' />
            </Head>
            <div>
                <h1 className={styles.title}>About</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore accusantium laudantium id? Voluptatum labore tempora
                    odio ratione provident et quam, fugit saepe sequi
                    consequatur ipsam vitae porro, expedita facere quae.
                </p>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore accusantium laudantium id? Voluptatum labore tempora
                    odio ratione provident et quam, fugit saepe sequi
                    consequatur ipsam vitae porro, expedita facere quae.
                </p>
            </div>
        </>
    );
};

export default About;
