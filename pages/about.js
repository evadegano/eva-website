import Head from 'next/head';
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout';
import ProfessionalFacts from '../components/about/professionalFacts';
import PersonalFacts from '../components/about/personalFacts';
import utilStyles from '../styles/utils.module.css';


export default function About() {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.columnContainer}`}>
        <div className={`${utilStyles.containerMd} ${utilStyles.centeredText}`}>
          <h1 className={utilStyles.headingXl}>Hi there, I'm Eva!</h1>

          <p>I recently graduated from Ironhack, a 24-week immersive Software Development program where I dove into the fields of Computer Science, Web Development and Programming.</p>
          <p>As I have developed a strong interest for algorithms and data structures, I am looking for a Full Stack or Back End position in a tech-first company.</p>
          <p>Feel free to checkout my <Link href={'/blog'}><a>blog</a></Link>, where I give new developers the strategy and ressources I used to graduate top of my cohort and have all of my projects voted best project by teachers and students.</p>

          <div className={utilStyles.hStack} style={{columnGap: '10px'}}>
            <Link href={'mailto: eva.degano@gmail.com'}><a className={utilStyles.mainBtn}>MY RESUME</a></Link>
            <Link href={'mailto: eva.degano@gmail.com'}><a className={utilStyles.mainBtn}>GET IN TOUCH</a></Link>
          </div>
        </div>
      </section>

      <section className={utilStyles.rowContainerLg} style={{columnGap: '100px'}}>
        <ProfessionalFacts />
        <PersonalFacts />
      </section>
    </Layout>
  );
}