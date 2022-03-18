import Link from 'next/link';
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css';


export default function Posts({posts}) {
  return (
    <section className={`${utilStyles.containerMd} ${utilStyles.padding1px}`}>
      <h2 className={`${utilStyles.headingMd}`}><span className={utilStyles.markedText}>HOW TO JUMP-START YOUR JOURNEY AS A SOFTWARE ENGINEER</span></h2>
      
      <hr/>

      <p>
        If you have you recently started your journey as a Software Engineer or if you are thinking about doing so, I'm sure yiu'll find this blog helpful.
      </p>

      <p>In there, I share with you the exact strategy and ressources that allowed me to graduate at the top of my Software Engineer program's cohort and feel good about my skills as a Full Stack Web Developer in 6 months.</p>
      <p>And on the way, I hope to show you how exciting Computer Science and Programming can be!</p>


      <ul className={utilStyles.list}>

        {posts.map(({ id, date, title }, idx) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{idx + 1}. {title}</a>
            </Link>

            <br />

            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}

      </ul>
    </section>
  )
}