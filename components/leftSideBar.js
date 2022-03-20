import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import { socials } from '../lib/content/socials';
import TechStack from './techStack';


export default function LeftSideBar(){
  return (
    <div className={`${utilStyles.sideContainer} ${utilStyles.left}`}>
      <Image 
        priority
        src="/images/profile.png"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt={'Eva Degano'}
      />

      <h3>In a nutshell</h3>
      <p>Full Stack / Back-End Web Developer / Python, JavaScript (ES6) & TypeScript, MongoDB, Express, React, NodeJS, HTML & CSS</p>
      <Link href={'https://drive.google.com/file/d/1az4CTXsZeyXkKtp8o_U3TSb-vsl2Yc9U/view?usp=sharing'}>
        <a className={utilStyles.simpleBtn} target={'_blank'}>
          
          <Image 
            src="/icons/download.png"
            height={20}
            width={20}
            alt={'download icon'}
          />
          MY RESUME
        </a>
      </Link>

      <h3>Socials</h3>

      <ul>
        <li>
          <Image 
            src={'/icons/pin.png'} 
            alt={'location pin icon'}
            width={20}
            height={20}
            />
          Paris 2, France
        </li>

        {socials.map(item => {
          return  <li key={item.name}>
                    <Link href={item.url}>
                      <a target={'_blank'}>
                        <Image 
                        src={item.img1} 
                        alt={item.name}
                        width={20}
                        height={20}
                        />
                        {item.name}
                      </a>
                    </Link>
                  </li>
        })}
      </ul>
    </div>
  );
}