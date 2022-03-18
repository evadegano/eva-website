import Head from 'next/head';
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout';
import { achievements } from '../lib/content/achievements';
import utilStyles from '../styles/utils.module.css';
import { BsChevronDoubleDown } from 'react-icons/bs';


export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.columnContainerLeft}>
        {/* header */}
        <h1 className={utilStyles.headingXl}>About</h1>
        <p className={utilStyles.headingLg}>I feel most alive when I am learning and growing. Ultimately, this means that I am always looking for ways to achieve more and empower myself and others.</p>
        <div className={utilStyles.divider}></div>
        
        {/* achievements */}
        <h2>Here's how this translates <BsChevronDoubleDown style={{color: 'black', fontSize: '20px'}} /></h2>

        <div className={utilStyles.rowContainerLg}>
          {achievements.map((item, idx) => {
            return  <div className={utilStyles.containerXs} key={idx}>
                      <h3>{item.year}</h3>
                      <div>{item.content}</div>
                    </div>
          })}
        </div>

        <div className={utilStyles.divider}></div>

        {/* skills */}
        <div className={utilStyles.rowContainerLg}>
          <div className={utilStyles.containerMd}>
            <h2>My hard skills</h2>

            <ul>
              <li>Fluent in English: I am French but I have lived overseas for +10 years (Chad, Denmark, Argentina, China, Australia) and did my studies in English</li>
              <li>Back end: Python | Flask | ExpressJs | NodeJs | REST APIs | Axios</li>
              <li>Front end: HTML | CSS | Javascript (ES6) | TypeScript | React | Next.js</li>
              <li>Data: noSQL (MongoDb) | SQL (PostgreSQL & SQLite)</li>
              <li>Environment: Git | Github | Test Driven Development</li>
              <li>Deployment: Heroku</li>
            </ul>
          </div>

          <div className={utilStyles.containerMd}>
            <h2>My soft skills</h2>

            <p>As a Digital Project Manager for key clients for +4 years:</p>

            <ul>
              <li>I am used to working with cross-functional, international teams</li>
              <li>I am comfortable with producing high quality deliverables in tight deadlines</li>
              <li>I am centered on results and lean processes</li>
              <li>I have an eye for UX/UI and web design</li>
            </ul>
          </div>
        </div>

        <div className={utilStyles.divider}></div>

        {/* goals */}
        <div className={utilStyles.rowContainerLg}>
          <div className={utilStyles.containerMd}>
            <h2>My goals for the next 2 years</h2>

            <ul>
              <li>Join a company where I can build a strong foundation as a Programmer: this means being part of a team that is passionate about their product and about tech, as well as a company that promotes continious learning</li>
              <li>Study blockchain engineering (Solidity, Truffle, blockchains architecture, smart contracts,...)</li>
            </ul>
          </div>

          <div className={utilStyles.containerMd}>
            <h2>My soft skills</h2>
          </div>
        </div>

        <div className={utilStyles.divider}></div>

        {/* contact */}
        <h2>Want to know more?</h2>

        <div className={utilStyles.hStack} style={{columnGap: '10px'}}>
          <Link href={'https://drive.google.com/file/d/1az4CTXsZeyXkKtp8o_U3TSb-vsl2Yc9U/view?usp=sharing'}><a className={utilStyles.mainBtn} target={'_blank'}>SEE MY RESUME</a></Link>
          <Link href={'mailto:eva.degano@gmail.com'}><a className={utilStyles.mainBtn}>GET IN TOUCH</a></Link>
        </div>
      </section>
    </Layout>
  );
}