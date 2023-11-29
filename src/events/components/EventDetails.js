import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../shared/components/Button";

import axios from "axios";
import './EventDetails.css';
const EventDetails = props => {

    const [event, setEvent] = useState();
    const eId = useParams().eId

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/events/id/${eId}`);
                const event = await response.data;
                setEvent(event);
                console.log(event);

            }
            catch (err) {
                console.log(err);
            }
        }
        fetchEvents();
    }, [])
    if (!event) {
        return <p>is loading...</p>
    }
    return (
        <div className="event-details p-5">
            <img src={event.img} />
            <h1 className="event-title fw-bold">{event.title}</h1>
            <p className="event-description">{event.description}</p>
            <Button buttonName='Add to calendar' />
            {event.fee === '0' ? <h2 className="text-danger">Free!!!</h2> : <Button buttonName='Get a Ticket' className='red-button' />}
            <h2 className="event-subtitle fw-bold">Date and Time</h2>
            <p>{event.time}</p>
            <h2 className="event-subtitle fw-bold">Location</h2>
            <p>{event.location}, {event.zipcode}</p>
            <a>Show on map</a>
            <h2 className="event-subtitle fw-bold">Link</h2>
            <a href={event.link}>{event.link}</a>

        </div>);
}

export default EventDetails;