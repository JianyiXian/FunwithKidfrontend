import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import EventItem from "./EventItem";
import axios from "axios";

import './EventList.css'
import Input from "../../shared/components/Input";

const EventList = props => {
    const [events, setEvents] = useState();
    // get access to the user ID that's encoded in the URL
    const location = useParams().zipcode;
    console.log('loca', location);

    useEffect(() => {
        const fetchEvents = async () => {
            let response;
            try {
                //Load the data from database
                if (location) {
                    response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/events/location/${location}`);
                } else {
                    response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/events/all`);
                }
                const data = await response.data

                setEvents(data)
            } catch (err) {
                console.log(err)
            }
        };
        fetchEvents();
    }, [])

    return (
        <div className='event-box'>
            {/* <Input id='event-title' label='Event Title' name='title' onChange={formHandler} /> */}
            {!events && <p>isLoading...</p>}
            {events && events.map(event => <EventItem
                id={event._id}
                src={event.img}
                title={event.title}
                startDate={event.startDate}
                location={event.location}
                link={event.link}
                description={event.description}
                fee={event.fee > 0 ? `$${event.fee}` : 'Free'}
                creator={event.creator} />)}</div>

    );
}

export default EventList;