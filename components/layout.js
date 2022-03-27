import Head from 'next/head';
import Script from 'next/script';
import styles from './layout.module.css';
import Navbar from './navbar';
import Footer from './footer';
import LeftSideBar from './leftSideBar';
import RightSideBar from './rightSideBar';
import { navLinks } from "../lib/content/navLinks";


const name = 'Eva Degano';
export const siteTitle = 'Eva Degano';


export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Eva Degano's portfolio"
        />
        <meta
          property="og:image"
          content={"/images/social-preview.png"}
        />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Full Stack Developer / Python, JavaScript (ES6) & TypeScript, MongoDB, Express, React, NodeJS, HTML & CSS"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar navLinks={navLinks} />

      <main>
        <LeftSideBar/>

        {children}

        {home && <RightSideBar />}
      </main>
        
      <Footer />
    </div>
  )
}