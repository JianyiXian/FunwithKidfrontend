import { useNavigate } from 'react-router-dom';

import Card from '../../shared/components/Card';
import './EventItem.css'


const EventItem = props => {
    const navigate = useNavigate();
    const clickhandler = e => {
        e.preventDefault();
        console.log('navigate')
        navigate(`/events/id/${e.target.id}`)
    }
    return (
        <Card >
            <img onClick={e => clickhandler(e)} className='card-img-top' src={props.src} alt={props.alt} id={props.id} />
            <div className="card-body">
                <h5 className='card-title font-weight-bold'>{props.title}</h5>
                <p>{props.startDate}</p>
                <p>{props.location}</p>
                <p>{props.fee}</p>
            </div>
        </Card>
    );
}

export default EventItem;