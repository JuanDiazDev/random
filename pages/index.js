import Head from 'next/head'
import Image from 'next/image'
import Tita from './tita.jpeg'
import Parts from './components/parts'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Titea2</title>
        <meta name="description" content="Sorteos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={Tita} alt = "Tita" width={200} height={200}/>

        <h2 className={styles.title}>
          <a href = 'https://www.youtube.com/watch?v=9KmhitKJlrA' target="_blank" rel="noopener noreferrer" >titea2</a>
        </h2>

        <Parts></Parts>

      </main>
    </div>
  )
}


