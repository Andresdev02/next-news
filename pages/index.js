import {Toolbar} from '../components/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
<main className='page-container'>
  <Toolbar />
  <article className={styles.main}>
    <h1>Next.js News App</h1>
    <h3>Your one stop shop for the latest news articles</h3>
  </article>
</main>
  )
}
