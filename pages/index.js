import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Happy birthday kervin zoren bonaobra</title>
        <meta name="description" content="made by michael bataller" />
        <meta property="og:title" content="Happy birthday kervin zoren bonaobra" />
        <meta property="og:description" content="made by michael bataller" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/kervin.jpg" />
      </Head>

      <main>
        <p>Happy birthday pareng kervin ng marikina</p>
        <img src="/kervin.jpg" />
        </main>


      <footer className={styles.footer}>
        <a
          href="https://michaelbataller.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by{' '}
          <span className={styles.logo}>
            Michael C. Bataller
          </span>
        </a>
      </footer>
    </div>
  )
}
