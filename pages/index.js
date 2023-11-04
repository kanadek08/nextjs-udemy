import Head from 'next/head'
import styles from '../Styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '/components/Layout'
import utilStyles from '../Styles/utils.module.css'
import {getPostsData} from 'lib/posts'

export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    }
  }

}
export default function Home({ allPostsData }) {
  return (

    <main className={styles.main}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout home>
        <section>
          <p className={utilStyles.headingMd}>20231022からReact勉強中、現在22.5時間。</p>
        </section>
        <section>
          <h2 className={utilStyles.headingLg}>📝 React勉強日記</h2>
          <div className={styles.grid}>
            {allPostsData.map(({id, title, date, thumbnail}) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={`${thumbnail}`} className={styles.thumbnailImage}></img>
                </Link>
                <Link href={`/posts/${id}`}>
                  <p className={utilStyles.boldText}>{title}</p>
                </Link>
                <small className={utilStyles.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </main>
  )
}
