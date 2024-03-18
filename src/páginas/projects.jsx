import projects from '../data/projects'

function Projects () {
    return (
        <section>
            {projects.map((project) => {
                return (
                    <div key={project.id}>
                        <p>id: {project.id}</p>
                        <p>name: {project.name}</p>
                        <img src={project.image} width="200px"/>
                        <p>description: {project.description}</p>
                        <a href={project.url}>{project.url}</a>
                    </div>
                )
            })}
        </section>
    )
}

export default Projects