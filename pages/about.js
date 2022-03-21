import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import { achievements } from '../lib/content/achievements';
import { technologies, softSkills } from '../lib/content/skills';
import utilStyles from '../styles/utils.module.css';


export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.columnContainerLeft} ${utilStyles.containerLg}`}>
        {/* header */}
        <h1 className={utilStyles.headingXl}>About</h1>
        <p className={utilStyles.headingLg}>I feel most stimulated when I am learning and growing. Ultimately, this means that I am always looking for ways to achieve more and empower myself and others.</p>
        <div className={utilStyles.divider}></div>
        
        {/* achievements */}
        <h2>Here's how this translates in action</h2>

        <div className={utilStyles.rowContainerLg}>
          {achievements.reverse().map((item, idx) => {
            return  (
              <div className={utilStyles.containerXs} key={idx}>
                <h3>{item.year}</h3>
                <div>{item.content}</div>
              </div>
            )
          })}
        </div>

        <div className={utilStyles.divider}></div>

        {/* skills */}
        <div className={utilStyles.rowContainerLg}>
          <div className={utilStyles.containerMd}>
            <h2>My tech skills</h2>

            <ul>
              <li>Proficient with functional programming and object oriented design patterns</li>
              <li>Understanding of sorting, binary search trees and graph searching algorithms</li>

              {technologies.map((item, idx) => {
                return <li key={idx}><span className={utilStyles.markedText}>{item.type}:</span> {item.content}</li>
              })}
            </ul>
          </div>

          <div className={utilStyles.containerMd}>
            <h2>My softer skills</h2>

            <ul>
              <li><span className={utilStyles.markedText}>Fluent in English:</span> I am French but I have lived overseas for +10 years (Chad, Denmark, Argentina, China, Australia) and did my studies in English</li>
              <li>
                As a Digital Project Manager for key clients for +4 years:
                <table>
                  <tbody>
                    {softSkills.map((item, idx) => {
                      return  <tr key={idx}>
                                <td>
                                  <Image 
                                    src={item.icon}
                                    width={100}
                                    height={100}
                                    alt={'icon'}
                                  />
                                </td>
                                <td>{item.content}</td>
                              </tr>
                    })}
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
        </div>

        <div className={utilStyles.divider}></div>

        {/* goals */}
        <div className={utilStyles.rowContainerLg}>
          <div className={utilStyles.containerMd}>
            <h2>My goals for the next 2 years</h2>

            <ul>
              <li><span className={utilStyles.markedText}>Join a company where I can build a strong foundation as a Programmer:</span> this means being part of a team that is passionate about their product and about tech in general, as well as a company that promotes continuous learning.</li>
              <li><span className={utilStyles.markedText}>Study blockchain engineering</span> (Solidity, Truffle, blockchains architecture, smart contracts, ...) because I think it's the future!</li>
            </ul>
          </div>

          <div className={utilStyles.containerMd}>
            <h2>And also...</h2>

            <p>I love going out, working out - mainly running, yoga and fitness but I am down to try all sports. And of course, I am always up for a good chat and a drink after work!</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}