import { useNavigate } from 'react-router-dom';

import Card from '../../shared/components/Card';
import './EventItem.css'


const EventItem = (props) => {
    const navigate = useNavigate();
    const clickhandler = e => {
        e.preventDefault();
        console.log('navigate')
        navigate('/eventdetails')
    }
    return (
        <Card >
            <img onClick={e => clickhandler(e)} className="card-img-top" src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F611349729%2F468130825823%2F1%2Foriginal.20231002-213330?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2162%2C1081&s=160d6aab31f4d1fd3e66f91f439c13ec" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title font-weight-bold">It a family frendly activity.</h5>
                <p>FRI, Aug 9</p>
                <p>Diamond Bar</p>
                <p>Free</p>
            </div>
        </Card>
    );
}

export default EventItem;