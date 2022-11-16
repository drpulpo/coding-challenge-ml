import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CajaBusqueda from '../Components/CajaBusqueda'

export default function Home() {
  return (
          <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="code-challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CajaBusqueda/>
      </main>
    </div>
  )
}
