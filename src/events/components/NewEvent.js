import React, { useState } from 'react';
import axios from 'axios';

import Button from '../../shared/components/Button';
import Input from '../../shared/components/Input';
import Modal from '../../shared/components/Modal';

import './NewEvent.css'
const NewEvent = props => {
    const [formObj, setFormObj] = useState({ title: '', date: '', time: '', location: '', fee: '', link: '', description: '' });
    const [message, setMessage] = useState();

    const formHandler = e => {
        setFormObj({ ...formObj, [e.target.name]: e.target.value, creator: sessionStorage.getItem('userId') });
        console.log(formObj);

    }

    const uploadHandler = e => {

    }

    const submitHandler = async e => {
        e.preventDefault();
        console.log('submit');
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/events/new`, { ...formObj });
            const eventData = response.data;

            setMessage('You have successful submit the event.')

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <React.Fragment>
            {message && <p className='text-center text-primary'>{message}</p>}
            {!message &&
                <form className='event-form w-50 mx-auto'>
                    <Input id='event-title' label='Event Title' name='title' onChange={formHandler} />
                    <Input id='event-startDate' label='From' type='date' name='startDate' onChange={formHandler} />
                    <Input id='event-endDate' label='To' type='date' name='endDate' onChange={formHandler} />
                    <Input id='event-time' label='Time' name='time' onChange={formHandler} />
                    <Input id='event-location' label='Location' name='location' onChange={formHandler} />
                    <Input id='event-address' label='Address' name='address' onChange={formHandler} />
                    <Input id='event-zipcode' label='zipcode' name='zipcode' onChange={formHandler} />
                    <Input id='event-fee' label='Fee' name='fee' onChange={formHandler} />
                    <Input id='event-link' label='Link' name='link' onChange={formHandler} />
                    <Input id='event-description' label='Description' name='description' onChange={formHandler} />
                    <Button buttonName='Upload Attachment' className='upload-button' onClick={uploadHandler} />
                    <br />
                    <Button buttonName='Submit' className='submit-button w-100' onClick={submitHandler} />
                </form>}
        </React.Fragment>);
}

export default NewEvent;