import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';


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

      <section className={`${utilStyles.columnContainerLeft} ${utilStyles.containerLg}`}>
        <h1 className={utilStyles.headingXl}>Blog</h1>

        <p>If you have you recently started your journey as a Programmer or if you are thinking about doing so, I am sure you have a lot of questions.</p>
        <p>While the abundance of resources available over the internet is amazing, it can quickly feel <span className={utilStyles.markedText}>overwhelming.</span> I am sure you have experienced this yourself.</p>
        <p>That’s why I started this blog: to share with you the exact <span className={utilStyles.markedText}>strategy and ressources</span> that allowed me to graduate at the <span className={utilStyles.markedText}>top of my Software Engineer program's cohort</span> and feel good about my skills as a Full Stack Web Developer in just 6 months.</p>
        <p>And on the way, I hope to show you how exciting Computer Science and Programming can be!</p>

        <div className={utilStyles.divider}></div>

        <h2 className={utilStyles.headingLg}>How to go from zero coding experience to being hired as a junior Web Developer in less than 6 months</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }, idx) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>Step {idx + 1} - {title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}