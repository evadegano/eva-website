import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout';
import { projects } from '../lib/content/projects';
import utilStyles from '../styles/utils.module.css';


export default function Projects() {
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
                <Link><a target={'_blank'}>VIEW LIVE</a></Link>
                <Link><a target={'_blank'}></a>SEE CODE</Link>
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

    </Layout>
  );
}