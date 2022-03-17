import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout';
import Posts from '../components/posts';
import utilStyles from '../styles/utils.module.css';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <h1 className={`${utilStyles.containerMd} ${utilStyles.headingMd} ${utilStyles.centeredText}`}>
          Hi, I'm Eva, a Software Engineer based in Paris.
          After getting a Master's Degree in Finance and Investment and working as a Project Manager, working with developers made me realize that Computer Science and Programming were my true passions.
          My main drive in life is learning and sharing my knowledge through content and tools that improve people's lives. And tech is what makes it possible at scale.
          That's one of the many reasons why I decided to become a Software Engineer.
        </h1>

        <Link href={'/about'}><a className={utilStyles.mainBtn}>LEARN MORE</a></Link>
      </section>

      <Posts posts={allPostsData} />
    </Layout>
  )
}

