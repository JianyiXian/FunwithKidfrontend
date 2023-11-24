import EventItem from './EventItem';
import './LandingPage.css'

const LandingPage = () => {
    return (<>
        <div className='container py-5 main-content'>
            <div className='row'>
                <div className='col-md-6'>
                    <img className='img-fluid' src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F611349729%2F468130825823%2F1%2Foriginal.20231002-213330?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2162%2C1081&s=160d6aab31f4d1fd3e66f91f439c13ec' alt="Card image cap" />
                </div>
                <div className='col-md-6'>
                    <h1 className='py-5 landing-title'>Find community events near you</h1>
                    <input className='location-input' placeholder='Location' />
                </div>
            </div>
            <p className='pt-5'> Events you might like</p>
            <div className='row p-3'>
                <div className='col-md-3'>
                    <EventItem />
                </div>
                <div className='col-md-3'>
                    <EventItem />
                </div>
                <div className='col-md-3'>
                    <EventItem />
                </div>
                <div className='col-md-3'>
                    <EventItem />
                </div>
            </div>

        </div>


    </>);
}

export default LandingPage;