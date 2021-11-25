
import {useRouter} from 'next/router';
import styles from '../styles/Toolbar.module.css';

export const Toolbar = () => {
const router = useRouter();
const goToLinkedin = () => {
    document.location.href = 'www.linkedin.com/in/andres-vergauwen-56261988';
  }
return (
    <nav className={styles.main}>
        <ul>
            <a onClick={() => router.push('/')}>Home</a>
            <a onClick={() => router.push('/feed/1')}>Feed</a>
            <a onClick={() => router.push('/eom')}>EOM</a>
            <a href='https://www.linkedin.com/in/andres-vergauwen-56261988' target="_blank" rel="noreferrer">Linkedin</a>
        </ul>
    </nav>
);

};
