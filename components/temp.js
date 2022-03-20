<div className={utilStyles.rowContainerLg}>
  {projects.map((project, idx) => {
    return (
      <div key={idx} className={`${utilStyles.containerMd} ${utilStyles.columnContainer}`}>
        <div className={utilStyles.cardImg}>
          <img
            priority
            src={project.img}
            className={utilStyles.projectImg}
            layout={'fill'} 
            objectFit={'contain'}
            alt={`${project.name} screenshot`}
          />
        </div>
        
        <div>
          <h2>{project.name}</h2>

          <p>{project.description}</p>

          <h3>Context</h3>
          <p>{project.context}</p>

          <h3>Stack</h3>
          <p>{project.stack}</p>

          <div className={utilStyles.hStack} style={{columnGap: '10px'}}>
            {project.url && <Link href={project.url}><a target={'_blank'} className={utilStyles.mainBtn}>VIEW LIVE</a></Link>}
            <Link href={project.github}><a target={'_blank'} className={utilStyles.secondaryBtn}>SEE CODE</a></Link>
          </div>
        </div>
      </div>
    )
  })}
</div>