function ProjectInfo(props) {
  const description = props.project.description;
  const links = props.project.links;

  return (
    <div className="w-full h-full">
      <p>{ description }</p>

      <div>
        { links.map((link) =>
          <a href={link.url} target="_blank">{ link.title }</a>
        )}
      </div>

      <div></div>
    </div>
  )
}

export default ProjectInfo