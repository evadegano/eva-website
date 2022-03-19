import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';


export default function RightSideBar(){
  return (
    <div className={`${utilStyles.sideContainer} ${utilStyles.right}`}>
      <div>
        <h2>Jump-start your journey as a software engineer</h2>
        <p>If you're new to Programming, check out my blog to learn the strategy and ressources that allowed me to <span className={utilStyles.markedText}>graduate at the top of my Software Engineer program's cohort</span> and feel good about my skills as a Full Stack Web Developer in 6 months.</p>
      </div>

      <div>
        <Link href={'/blog'}><a className={utilStyles.secondaryBtn}>GOT TO BLOG</a></Link>
      </div>
    </div>
  );
}