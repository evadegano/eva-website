
import utilStyles from '../../styles/utils.module.css';
import { projects } from '../../lib/content/projects';


export default function Projects() {
  return (
    <section className={`${utilStyles.columnContainer}`} style={{rowGap: '40px'}}>
      <h2 className={utilStyles.headingMd}>Some of the projects I built</h2>

      <div className={utilStyles.rowContainerSm} style={{columnGap: '40px'}}>
        <div className={`${utilStyles.row} ${utilStyles.centeredText}`}>
          <h3>{projects[0].name}</h3>
          <p>{projects[0].description}</p>
        </div>

        <div className={`${utilStyles.row} ${utilStyles.centeredText}`}>
          <h3>{projects[1].name}</h3>
          <p>{projects[1].description}</p>
        </div>
      </div>

      <div className={utilStyles.rowContainerSm} style={{columnGap: '40px'}}>
        <div className={`${utilStyles.row} ${utilStyles.centeredText}`}>
          <h3>{projects[2].name}</h3>
          <p>{projects[2].description}</p>
        </div>

        <div className={`${utilStyles.row} ${utilStyles.centeredText}`}>
          <h3>{projects[3].name}</h3>
          <p>{projects[3].description}</p>
        </div>
      </div>

      <div className={utilStyles.column}></div>
    </section>
  );
}