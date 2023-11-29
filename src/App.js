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

function App() {

  return (
    // <AuthProvider>
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          <Route path='/events' element={<EventList />} />
          <Route path='/events/:zipcode' element={<EventList />} />
          <Route path='/events/id/:eId' element={<EventDetails />} />
          <Route path='/newevent' element={<NewEvent />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/myevents' element={<MyEvents />} />
        </Routes>
      </Router>
    </div >
    // </AuthProvider >
  );
}

export default App;
