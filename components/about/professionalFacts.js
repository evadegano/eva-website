import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';
import { technologies } from '../../lib/content/technologies';


export default function ProfessionalFacts() {
  return (
    <div className={utilStyles.column}>
      <h2 className={utilStyles.headingMd}>Soft and hard skills</h2>

      <ul>
        <li>As a Digital Project Manager for key clients for +4 years:
          <ul>
            <li>
              <Image
                src="/icons/teamwork.png"
                height={60}
                width={60}
                alt={'teamwork icon'}
              />

              <p>I am used to working with cross-functional, international teams</p>
            </li>

            <li>
              <Image
                src="/icons/diamond.png"
                height={60}
                width={60}
                alt={'diamond icon'}
              />

              <p>I am comfortable with producing high quality deliverables in tight deadlines</p>
            </li>

            <li>
              <Image
                src="/icons/analytics.png"
                height={60}
                width={60}
                alt={'analytics icon'}
              />

              <p>I strive to be as results-oriented as I can</p>
            </li>

            <li>
              <Image
                src="/icons/curve.png"
                height={60}
                width={60}
                alt={'curve icon'}
              />

              <p>I am knowledgeable in UX/UI and web design</p>
            </li>
          </ul>
        </li>

        <li>Technologies I have learnt and worked with at Ironhack:
          <ul>
            {technologies.map((item, idx) => {
              return <li key={idx}><b>{item.type}:</b> {item.content}</li>
            })}
          </ul>
        </li>

        <li>Other Technologies I am curious to learn: Docker, AWS, C++ or Rust, Solidity, web3.js, Truffle</li>
      </ul>
    </div>
  );
}