import utilStyles from '../../styles/utils.module.css';
import { achievements } from '../../lib/content/achievements';


export default function PersonalFacts() {
  return (
    <div className={utilStyles.column}>
      <h2 className={utilStyles.headingMd}>Personal facts and achievements</h2>

      <ul>
        <li>I am French but I have lived overseas for +10 years (Chad, Denmark, Argentina, China, Australia) which made me fluent in English</li>
        <li>I love studying and sharing my knowledge through writing, as well as building things that help people:
          <ul>
            {achievements.map((item, idx) => {
              return <li key={idx}><b>{item.year}:</b> {item.content}</li>
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}