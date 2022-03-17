import Head from 'next/head';
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout';
import ProfessionalFacts from '../components/about/professionalFacts';
import PersonalFacts from '../components/about/personalFacts';
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


export default function About({ allPostsData }) {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.columnContainer}`}>
        <div className={`${utilStyles.containerMd} ${utilStyles.centeredText}`}>
          <h1 className={utilStyles.headingXl}>Hi there, I'm Eva!</h1>

          <div className={utilStyles.hStack} style={{columnGap: '10px'}}>
            <Link href={'mailto: eva.degano@gmail.com'}><a className={utilStyles.mainBtn}>SEE MY RESUME</a></Link>
            <Link href={'mailto: eva.degano@gmail.com'}><a className={utilStyles.mainBtn}>GET IN TOUCH</a></Link>
          </div>
        </div>
      </section>

      <section className={utilStyles.rowContainerLg} style={{columnGap: '100px'}}>
        <ProfessionalFacts />
        <PersonalFacts />
      </section>
      
      <Posts posts={allPostsData} />
    </Layout>
  );
}