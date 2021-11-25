import { Toolbar } from '../../components/toolbar';
import styles from '../../styles/Feed.module.css';
import Image from 'next/image';
import router from 'next/router';
export const Feed = ({pageNumber, articles}) => {
    const loadImage=({src})=>{
        return src;
      }
    return (<section className={styles.main}>
        <Toolbar />
        <main className={styles.container}>
        { articles.map((article, index) => 
            (<div key={index} className={styles.post}>
                <h1 onClick={() => (window.open(article.url, "_blank") )}>{article.title}</h1>
                <p>{article.description}</p>
                {!!article.urlToImage && <img src={article.urlToImage} title={article.title}/>}
                {/* {!!article.urlToImage && <Image loader={loadImage} src={article.urlToImage}  width="100%" height="100%" layout="responsive" objectFit="contain" title={article.title}/>} */}
            </div>)
        )}
         </main>

         <article className={styles.paginator}>
                <div  onClick={() => {if(pageNumber > 1){ router.push(`/feed/${pageNumber - 1}`).then(() => window.scrollTo(0,0))}}} className={pageNumber === 1 ? styles.disabled : styles.active}> Previous page  </div>
                <div> #{pageNumber} </div>
                <div  onClick={() => {if(pageNumber < 5){ router.push(`/feed/${pageNumber + 1}`).then(() => window.scrollTo(0,0))}}} className={pageNumber === 5 ? styles.disabled : styles.active}> Next page  </div>
         </article>
    </section>);
}

export const getServerSideProps = async (pageContext) => {
    const pageNumber = pageContext.query.slug; 
    if(!pageNumber || pageNumber < 1 ||  pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber:1,
            }
        }
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=nl&pageSize=5&page=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
          },
        },
      ).then(res => res.json());
      
    const {articles} = apiResponse;
    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber),
        }
    };
}
export default Feed;