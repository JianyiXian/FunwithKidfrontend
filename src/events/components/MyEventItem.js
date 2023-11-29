import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/Button";


const MyEventItem = props => {
    const navigate = useNavigate();
    const editHandle = e => {
        e.preventDefault();
        navigate('/newevent')
    }


    const handleEvent = event => {
        event.preventDefault();
        navigate(`/id/${event.target.id}`)
    }
    return (<div className='row p-3'>
        <div className='col-md-4'>
            <img className='img-fluid' onClick={handleEvent} src={props.src} alt={props.alt} id={props.id} />
        </div>
        <div className='col-md-8'>
            <h3>{props.title}</h3>
            <p className='py-5'>{props.location}</p>
            <Button buttonName='Edit' onClick={editHandle} />
            <Button buttonName='Delete' className='red-button' onClick={props.onClickDelete} />

        </div>
    </div>);
}

export default MyEventItem;