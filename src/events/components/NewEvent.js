import Button from '../../shared/components/Button';
import Input from '../../shared/components/Input';

import './NewEvent.css'

const NewEvent = props => {
    return (
        <form className='event-form w-50 mx-auto'>
            <Input id='event-title' label='Event Title' />
            <Input id='event-date' label='Date' type='date' />
            <Input id='event-time' label='Time' type='time' />
            <Input id='event-location' label='Location' />
            <Input id='event-fee' label='Fee' />
            <Input id='event-link' label='Link' />
            <Input id='event-description' label='Description' />
            <Button buttonName='Upload Attachment' className='upload-button' />
            <br />
            <Button buttonName='Submit' className='submit-button w-100' />
        </form>);
}

export default NewEvent;