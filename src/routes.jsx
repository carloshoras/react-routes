import {Routes, Route} from 'react-router-dom'
import Home from './páginas/home'
import Projects from './páginas/projects'
import Resume from './páginas/resume'

function RoutesPortfolio () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/resume" element={<Resume/>}/>
        </Routes>
    )
}

export default RoutesPortfolio