import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.columnContainerLeft} ${utilStyles.containerXl}`}>

        <h1 className={utilStyles.headingXl}>Hey, I'm Eva.</h1>

        <p className={utilStyles.headingLg}>A Full Stack Web Developer based in Paris.</p>

        <p>
          After getting a Master's Degree in Finance and Investment and working as a Project Manager, working with developers made me realize that Computer Science and Programming were my true passions.
          <br/><span className={utilStyles.markedText}>I deeply value learning and sharing knowledge through content and tools that improve people's lives.</span> And tech is what makes it possible at scale.
          That's one of the many reasons why I decided to become a Software Engineer.
        </p>

        <Link href={'/about'}><a className={utilStyles.mainBtn}>LEARN MORE</a></Link>

      </section>
    </Layout>
  );
}

