import EventItem from "./EventItem";

const EventList = () => {
    return (
        <div className='container'>
            <div className='row'>
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
            <div className='row'>
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


        </div>);
}

export default EventList;