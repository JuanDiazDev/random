import Head from 'next/head'
import Image from 'next/image'
import Parts from './components/parts'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Random X</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Random <a href="https://github.com/JuanDiazDev">X</a>
        </h1>

        <Parts></Parts>

      </main>
    </div>
  )
}


