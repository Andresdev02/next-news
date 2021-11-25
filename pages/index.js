import Head from 'next/head';
import {Toolbar} from '../components/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>  
    <Head>
    <meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
        <title>News app | Home</title>
      </Head>
    <main className='page-container'>
      <Toolbar />
      <article className={styles.main}>
        <h1>Next.js News App</h1>
        <h3>Your one stop shop for the latest news articles</h3>
      </article>
    </main>
</>
  )
}
