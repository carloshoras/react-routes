import {studies, experiences} from '../data/resume'

function Resume () {
    return (
        <>
        <section className='studies'>
            <h2>Estudios</h2>
            {studies.map((study) => {
                return (
                    <div key={study.id}>
                        <p>id: {study.id}</p>
                        <p>title: {study.title}</p>
                        <p>institution: {study.institution}</p>
                        <p>date: {study.date}</p>
                    </div>
                )
            })}
        </section>
        <section className='experiences'>
            <h2>Experiencia</h2>
            {experiences.map((experience) => {
                return (
                    <div key={experience.id}>
                        <p>id: {experience.id}</p>
                        <p>title: {experience.title}</p>
                        <p>company: {experience.company}</p>
                        <p>date: {experience.date}</p>
                    </div>
                )
            })}
        </section>
        </>
    )
}

export default Resume