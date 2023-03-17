function ProjectList(props) {

    return (
      <div className={`w-full h-full grid ${props.gridView ? "grid-cols-2" : "grid-row"}`}>
        {props.projects.map((project, index) => 
          <button key={index} onClick={() => props.setProjectId(index)} className="bg-slate-300 hover:bg-slate-400 even:bg-sky-400">{ project.name }</button>
        )}
      </div>
    )
  }
  
  export default ProjectList