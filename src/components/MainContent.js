import React, { Fragment, useState } from 'react';
import Card from './Card';
import FormInput from '../common/FormInput';
import FormCheckBox from '../common/FormCheckBox';
import FormSelect from '../common/FormSelect';
import FormTextArea from '../common/FormTextArea';

const MainContent = (props) => {
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [newsletter, setNewsletter] = useState(false);
  const [interest, setInterest] = useState(null);
  const [message, setMessage] = useState(null);

  const dropdownOptions = [
    {
      value: 'wl',
      text: 'Wildlife Photography',
    },
    {
      value: 'gen',
      text: 'General Photography',
    },
    {
      value: 'port',
      text: 'Portrait Photography',
    },
    {
      value: 'nature',
      text: 'Nature Photography',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      newsletter,
      interest,
      message,
    };

    console.log('Submitted', formData);
  };

  const handleInput = (name, value) => {
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'newsletter':
        setNewsletter(value);
        break;
      case 'interest':
        setInterest(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
  };

  return (
    <Fragment>
      <div className='album py-5 bg-light'>
        <div className='container'>
          <h3>Registration Form</h3>
          <hr />
          <form onSubmit={handleSubmit}>
            <FormInput
              label='Your name'
              type='text'
              onChange={handleInput}
              name='fullName'
            />
            <FormInput
              label='Your email'
              type='email'
              onChange={handleInput}
              name='email'
            />
            <FormCheckBox
              label='Subscribe to our newsletter'
              onChange={handleInput}
              name='newsletter'
            />
            <FormSelect
              label='Your interest'
              options={dropdownOptions}
              onChange={handleInput}
              name='interest'
            />
            <FormTextArea
              label='Your message'
              onChange={handleInput}
              name='message'
            />

            <button className='btn btn-primary'>Submit</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default MainContent;
