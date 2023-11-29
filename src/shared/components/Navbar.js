
import './Navbar.css';
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {

    const [userId, setUserId] = useState(sessionStorage.getItem('userId') || '');
    const [userRole, setUserRole] = useState(sessionStorage.getItem('userRole') || '')

    const logoutHandler = e => {
        e.preventDefault();
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userRole');
        setUserId('');
        setUserRole('');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/"><img src='logo.png' /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active fw-bold">
                        <a className="nav-link" href='/events'>Find Events </a>
                    </li>
                    {userId && userRole === 'creator' &&
                        <li className="nav-item active fw-bold">
                            <a className="nav-link" href='/myevents'>My Events </a>
                        </li>}
                    <li className="nav-item fw-bold">
                        <a className="nav-link" href="/newevent">Create Events</a>
                    </li>
                    {userId ? <li className="nav-item active fw-bold">
                        <button className="nav-link" href='/myevents' onClick={logoutHandler}>Log Out </button>
                    </li> : <><li className="nav-item fw-bold">
                        <a className="nav-link" href="/login">Log In</a>
                    </li>

                        <li className="nav-item fw-bold" >
                            <a className="nav-link" href="/signup">Sign up</a>
                        </li></>}


                </ul>
            </div>
        </nav>);
}

export default Navbar;