import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import { socials } from '../lib/content/socials';


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

      <h2>Main Stack</h2>
      <p>Python, JavaScript (ES6) & TypeScript, MongoDB, Express, React, NodeJS, HTML & CSS</p>

      <h2>Socials</h2>

      <ul>
        <li>
          <Image 
            src={'/icons/pin.png'} 
            alt={'location pin icon'}
            width={25}
            height={25}
            />
          Paris 2, France
        </li>

        {socials.map(item => {
          return  <li key={item.name}>
                    <Link href={item.url}>
                      <a target={'_blank'}>
                        <Image 
                        src={item.img2} 
                        alt={item.name}
                        width={25}
                        height={25}
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