import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from './navbar';
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
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar navLinks={navLinks} />

      <header className={styles.header}>
        {home ? (
          <>
            <div className={styles.imgContainer}>
              <div className={styles.purpleCirc}></div>
              
              <Image
                priority
                src="/images/profile.png"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
            </div>
          </>
        ) : (
          <>
          <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
          </>
        )}
      </header>

      <main>{children}</main>

    </div>
  )
}