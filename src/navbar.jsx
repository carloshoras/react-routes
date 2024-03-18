import {Link} from 'react-router-dom'

function NavBar () {
    return (
        <nav>
            <ul>
                <li key="inicio">
                    <Link to="/">Inicio</Link>
                </li>
                <li key="proyectos">
                    <Link to="/projects">Proyectos</Link>
                </li>
                <li key="curriculum">
                    <Link to="/resume">Currículum</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar