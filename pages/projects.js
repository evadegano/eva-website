import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout';
import { projects } from '../lib/content/projects';
import { socials } from '../lib/content/socials';
import utilStyles from '../styles/utils.module.css';


export default function Projects() {
  const github = socials.find(item => item.name.includes('Github'));

  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.columnContainerLeft} ${utilStyles.containerLg}`}>
        <h1 className={utilStyles.headingXl}>
          Some of my works
        </h1>

        <div className={utilStyles.rowContainerLg}>
          {projects.map((project, idx) => {
            return (
              <div key={idx} className={`${utilStyles.containerMd} ${utilStyles.columnContainer}`}>
                <div className={utilStyles.cardImg}>
                  <Image
                  className={utilStyles.projectImg}
                    src={project.img}
                    layout={'fill'} 
                    objectFit={'contain'}
                    alt={'Quartz screenshot'}
                  />
                </div>
                
                <div className={utilStyles.card}>
                  <h2>{project.name}</h2>

                  <p>{project.description}</p>

                  <h3>Context</h3>
                  <p>{project.context}</p>

                  <h3>Stack</h3>
                  <p>{project.stack}</p>

                  <div className={utilStyles.hStack} style={{columnGap: '10px'}}>
                    {project.url && <Link href={project.url}><a target={'_blank'} className={utilStyles.mainBtn}>VIEW LIVE</a></Link>}
                    <Link href={project.github}><a target={'_blank'} className={utilStyles.secondaryBtn}>SEE CODE</a></Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className={utilStyles.divider}></div>

        <Link href={github.url}>
          <a target={'_blank'} className={utilStyles.githubBtn}>
            <Image 
              src={github.img1}
              width={30}
              height={30}
              alt={github.name}
            />
            SEE MORE PROJECTS
          </a>
        </Link>
      </section>
    </Layout>
  );
}