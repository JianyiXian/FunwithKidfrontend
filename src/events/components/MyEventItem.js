import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/Button";


const MyEventItem = () => {
    const navigate = useNavigate();
    const handleEdit = event => {
        event.preventDefault();
        navigate('/newevent')

    }

    const handleEvent = event => {
        event.preventDefault();
        navigate('/eventdetails')
    }
    return (<div className='row p-3'>
        <div className='col-md-4'>
            <img className='img-fluid' onClick={handleEvent} src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F611349729%2F468130825823%2F1%2Foriginal.20231002-213330?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2162%2C1081&s=160d6aab31f4d1fd3e66f91f439c13ec" alt="Card image cap" />
        </div>
        <div className='col-md-8'>
            <h3>Title</h3>
            <p className='py-5'>Location</p>
            <Button buttonName='Edit' onClick={handleEdit} />
            <Button buttonName='Delete' className='red-button' />

        </div>
    </div>);
}

export default MyEventItem;