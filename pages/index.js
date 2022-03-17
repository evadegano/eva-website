import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date'
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

      <section className={utilStyles.padding1px}>
      <h2 className={utilStyles.headingMd}>The ultimate guide to start your journey as a Software Engineer</h2>
      
      <hr/>

      <p>
        I love sharing my knowledge through writing!
        If you have you recently started your journey as a Software Engineer or if you are thinking about doing so, you should find this blog helpful.
      </p>
      <p>
      <p>In there, I share with you the exact strategy and ressources that allowed me to graduate at the top of my Software Engineer program's cohort and feel good about my skills as a Full Stack Web Developer in 6 months.</p>
      <p>More than that, I hope to take you beyond Programming and show you how exciting Computer Science can be.</p>
      </p>

      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }, idx) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{idx + 1}. {title}</a>
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
  )
}

