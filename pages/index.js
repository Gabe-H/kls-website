import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Knight Lights</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <header className={styles.header}>
        <h1 className={styles.title}>
          Welcome to the Knight Lights!
        </h1>
    </header>
      <main className={styles.main}>
        coming soon
      </main>
    </div>
  )
}
