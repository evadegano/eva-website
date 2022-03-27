import Link from 'next/link';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';


export default function RightSideBar(){
  return (
    <div className={`${utilStyles.sideContainer} ${utilStyles.right}`}>
      <div>
        <h2>Jump-start your journey as a Programmer</h2>
        <p>If you're new to Programming, check out my blog to learn the strategy and ressources that allowed me to <span className={utilStyles.markedText}>graduate at the top of my Full Stack Web Development program's cohort</span> and feel good about my coding skills in 6 months.</p>
      </div>

      <div>
        <Link href={'/blog'}>
          <a className={utilStyles.simpleBtn}>
            GOT TO BLOG
            <Image 
              src={'/icons/right-arrow.png'}
              width={20}
              height={20}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}