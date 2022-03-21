import Head from 'next/head';
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
        <h1 className={utilStyles.headingXl}>Some of my works</h1>

        <table className={utilStyles.projectsTable}>
          <tbody>
            <tr>
              <td>
                <img
                  priority
                  src={projects[0].img}
                  className={utilStyles.projectImg}
                  layout={'fill'} 
                  objectFit={'contain'}
                  alt={`${projects[0].name} screenshot`}
                />
              </td>

              <td></td>

              <td>
                <img
                  priority
                  src={projects[1].img}
                  className={utilStyles.projectImg}
                  layout={'fill'} 
                  objectFit={'contain'}
                  alt={`${projects[1].name} screenshot`}
                />
              </td>
            </tr>

            <tr>
              <td>
                <h2>{projects[0].name}</h2>
                <p>{projects[0].description}</p>
                <h3>Context</h3>
                <p>{projects[0].context}</p>
                <h3>Stack</h3>
                <p>{projects[0].stack}</p>
              </td>

              <td></td>

              <td>
                <h2>{projects[1].name}</h2>
                <p>{projects[1].description}</p>
                <h3>Context</h3>
                <p>{projects[1].context}</p>
                <h3>Stack</h3>
                <p>{projects[1].stack}</p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={utilStyles.hStackLeft} style={{columnGap: '10px'}}>
                  {projects[0].url && <Link href={projects[0].url}><a target={'_blank'} className={utilStyles.mainBtn}>VIEW LIVE</a></Link>}
                  <Link href={projects[0].github}><a target={'_blank'} className={utilStyles.secondaryBtn}>SEE CODE</a></Link>
                </div>
              </td>

              <td></td>

              <td>
                <div className={utilStyles.hStackLeft} style={{columnGap: '10px'}}>
                  {projects[1].url && <Link href={projects[1].url}><a target={'_blank'} className={utilStyles.mainBtn}>VIEW LIVE</a></Link>}
                  <Link href={projects[1].github}><a target={'_blank'} className={utilStyles.secondaryBtn}>SEE CODE</a></Link>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <img
                  priority
                  src={projects[2].img}
                  className={utilStyles.projectImg}
                  layout={'fill'} 
                  objectFit={'contain'}
                  alt={`${projects[2].name} screenshot`}
                />
              </td>

              <td></td>

              <td>
                <img
                  priority
                  src={projects[3].img}
                  className={utilStyles.projectImg}
                  layout={'fill'} 
                  objectFit={'contain'}
                  alt={`${projects[3].name} screenshot`}
                />
              </td>
            </tr>

            <tr>
              <td>
                <h2>{projects[0].name}</h2>
                <p>{projects[0].description}</p>
                <h3>Context</h3>
                <p>{projects[0].context}</p>
                <h3>Stack</h3>
                <p>{projects[0].stack}</p>
              </td>

              <td></td>

              <td>
                <h2>{projects[1].name}</h2>
                <p>{projects[1].description}</p>
                <h3>Context</h3>
                <p>{projects[1].context}</p>
                <h3>Stack</h3>
                <p>{projects[1].stack}</p>
              </td>
            </tr>

            <tr>
              <td>
                <div className={utilStyles.hStackLeft} style={{columnGap: '10px'}}>
                  {projects[0].url && <Link href={projects[0].url}><a target={'_blank'} className={utilStyles.mainBtn}>VIEW LIVE</a></Link>}
                  <Link href={projects[0].github}><a target={'_blank'} className={utilStyles.secondaryBtn}>SEE CODE</a></Link>
                </div>
              </td>

              <td></td>

              <td>
                <div className={utilStyles.hStackLeft} style={{columnGap: '10px'}}>
                  {projects[1].url && <Link href={projects[1].url}><a target={'_blank'} className={utilStyles.mainBtn}>VIEW LIVE</a></Link>}
                  <Link href={projects[1].github}><a target={'_blank'} className={utilStyles.secondaryBtn}>SEE CODE</a></Link>
                </div>
              </td>
            </tr>

          </tbody>
        </table>

        <div className={utilStyles.divider}></div>

        <Link href={github.url}>
          <a target={'_blank'}>
          Check out my other projects &gt;
          </a>
        </Link>

      </section>
    </Layout>
  );
}