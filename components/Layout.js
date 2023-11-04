import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "kanadek08";
export const siteTitle = "Next.js Sample Website";

function Layout ({children, home}) {
  return (
    <div>
      <Head>
        <title>Next.js Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img 
              src="/images/profile.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            />
            <h1 className={utilStyles.heading2xl}>{name}</h1>
          </>
        ) : (
          <>
            <img 
            src="/images/profile.png"
            className={`${styles.headerImage} ${utilStyles.borderCircle}`}
            />
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;