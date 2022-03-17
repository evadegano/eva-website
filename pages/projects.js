import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout';
import Posts from '../components/posts';
import { projects } from '../lib/content/projects';
import utilStyles from '../styles/utils.module.css';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Projects({ allPostsData }) {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={`${utilStyles.columnContainer}`}>
        <h1 className={utilStyles.headingXl}>
          A selection of 
          <br/>my favorite works
        </h1>
      </div>

      <section>
        {projects.map((project, idx) => {
          return (
            <div key={idx} className={`${utilStyles.hStackLg} ${idx % 2 !== 0 ? utilStyles.reversed : ''}`} style={{columnGap: '40px'}}>
              <div className={`${utilStyles.columnContainerLeft} ${utilStyles.column}`}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <p>Context: {project.context}</p>
                <p>stack: {project.stack}</p>
                <Link href={"/"}><a target={'_blank'}>VIEW LIVE</a></Link>
                <Link href={"/"}><a target={'_blank'}>SEE CODE</a></Link>
              </div>
              
              <div className={`${utilStyles.column} ${idx % 2 !== 0 ? utilStyles.columnContainerLeft : utilStyles.columnContainerRight}`}>
                <Image
                  src={project.img}
                  height={100}
                  width={200}
                  alt={'Quartz screenshot'}
                />
              </div>
            </div>
          )
        })}
      </section>

      <Posts posts={allPostsData} />
    </Layout>
  );
}