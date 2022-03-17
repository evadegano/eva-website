import Link from 'next/link';
import Image from 'next/image';
import { socials } from '../lib/content/socials';


export default function Footer() {
  return (
    <footer>
      <div>© 2022 Eva Degano</div>

      <ul>
        {socials.map(item => {
          return <li key={item.name}>
                    <Link href={item.url}>
                      <a target={'_blank'}>
                        <Image 
                        src={item.img} 
                        alt={item.name}
                        width={30}
                        height={30}
                      /></a>
                    </Link>
                  </li>
        })}
      </ul>
    </footer>
  );
}