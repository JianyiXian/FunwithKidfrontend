import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './shared/components/Navbar';
import LandingPage from './events/components/LandingPage';
import EventDetails from './events/components/EventDetails';
import NewEvent from './events/components/NewEvent';
import Login from './users/components/Login';
import Signup from './users/components/Signup';
import EventList from './events/components/EventList';
import MyEvents from './events/components/MyEvents';
import { useCallback, useState } from 'react';
import { AuthContext } from './shared/context/authContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState();
  const [userRole, setUserRole] = useState();

  const login = useCallback((uid, urole) => {
    setIsLoggedIn(true);
    setUserId(uid);
    setUserRole(urole);
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
    setUserRole(null);
  }, [])


  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, userId: userId, userRole: userRole, login: login, logout: logout }}>
      <div className='App'>
        <Navbar />
        <Router>
          <Routes>
            <Route path='/' exact element={<LandingPage />} />
            <Route path='/events' element={<EventList />} />
            <Route path='/eventdetails' element={<EventDetails />} />
            <Route path='/newevent' element={<NewEvent />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/myevents' element={<MyEvents />} />
          </Routes>
        </Router>
      </div >
    </AuthContext.Provider>
  );
}

export default App;
