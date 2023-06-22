import { Link } from "react-router-dom";
const Navbar = props => {

    return (
        <nav>
            <div className="nav-wrapper">
                <ul id="nav" className="left hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

