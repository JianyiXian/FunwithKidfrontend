import { useContext } from 'react';
import './Navbar.css';
import { AuthContext } from '../context/authContext';
const Navbar = () => {
    const auth = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/"><img src='logo.png' /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active fw-bold">
                        <a className="nav-link" href='/events'>Find Events </a>
                    </li>
                    {auth.isLoggedIn && auth.userRoll === 'creator' &&
                        <li className="nav-item active fw-bold">
                            <a className="nav-link" href='/myevents'>My Events </a>
                        </li>}
                    {auth.isLoggedIn && auth.userRoll === 'user' &&
                        <li className="nav-item active fw-bold">
                            <a className="nav-link" href='/mycalendar'>My Calendar </a>
                        </li>
                    }
                    <li className="nav-item fw-bold">
                        <a className="nav-link" href="/newevent">Create Events</a>
                    </li>
                    <li className="nav-item fw-bold">
                        <a className="nav-link" href="/login">Log In</a>
                    </li>
                    <li className="nav-item fw-bold" >
                        <a className="nav-link" href="/signup">Sign up</a>
                    </li>
                    {auth.isLoggedIn && <li className="nav-item active fw-bold">
                        <a className="nav-link" href='/myevents'>Log Out </a>
                    </li>}

                </ul>
            </div>
        </nav>);
}

export default Navbar;