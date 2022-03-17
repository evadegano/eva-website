import Head from 'next/head';
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  return (
    <Layout blog>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <section className={`${utilStyles.columnContainer}`}>
          <div className={`${utilStyles.containerMd} ${utilStyles.centeredText}`}>
            <h1 className={utilStyles.headingXl}>Blog</h1>

            <p>If you have you recently started your journey as a Software Engineer or if you are thinking about doing so, you should find this blog helpful.</p>
            <p>While the abundance of resources available over the internet is amazing, it can quickly feel overwhelming. I am sure you have experienced this yourself.</p>
            <p>That’s why I started this blog: to share with you the strategy and ressources that allowed me to graduate at the top of my Software Engineer program's cohort and feel good about my skills as a Full Stack Web Developer.</p>
            <p>More than that, I hope to take you beyond Programming and show you how exciting Computer Science can be.</p>
          </div>
        </section>


    </Layout>
  );
}