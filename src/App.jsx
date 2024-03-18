import RoutesPortfolio from "./routes"
import NavBar from "./navbar"
import {BrowserRouter as Router} from "react-router-dom" 

function App () {
    return (
        <Router>
            <h1>MY PORTFOLIO</h1>
            <NavBar/>
            <RoutesPortfolio/>
        </Router>
    )
}

export default App