import React, { Component, Fragment } from 'react';
import FormInput from '../common/FormInput';
import FormCheckBox from '../common/FormCheckBox';
import FormSelect from '../common/FormSelect';
import FormTextArea from '../common/FormTextArea';

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

class RegistrationForm extends Component {
  state = {
    name: {
      validationError: null,
      isValid: false,
      value: null,
    },
    email: {
      validationError: null,
      value: null,
    },
    newsletter: {
      value: false,
    },
    interest: {
      validationError: null,
      value: null,
    },
    message: {
      validationError: null,
      value: null,
    },
  };

  handleInput = (name, value) => {
    switch (name) {
      case 'fullName':
        if (/^[A-Za-z ]{3,25}$/.test(value)) {
          this.setState({
            name: { value, validationError: null, isValid: true },
          });
        } else {
          this.setState({
            name: {
              value: null,
              validationError: 'Only characters (3-25)',
              isValid: false,
            },
          });
        }

        break;
      case 'email':
        this.setState({ email: { value } });
        break;
      case 'newsletter':
        this.setState({ newsletter: { value } });
        break;
      case 'interest':
        this.setState({ interest: { value } });
        break;
      case 'message':
        this.setState({ message: { value } });
        break;
      default:
        return;
    }
  };

  getFormData = () => {
    const formData = {};
    for (const key in this.state) {
      if (this.state.hasOwnProperty(key)) {
        formData[key] = this.state[key].value;
      }
    }

    return formData;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted', this.getFormData());
  };

  render() {
    return (
      <Fragment>
        <div className='album py-5 bg-light'>
          <div className='container'>
            <h3>Registration Form</h3>
            <hr />
            <form onSubmit={this.handleSubmit}>
              <FormInput
                label='Your name'
                type='text'
                onChange={this.handleInput}
                name='fullName'
                errorMessage={this.state.name.validationError}
              />
              <FormInput
                label='Your email'
                type='email'
                onChange={this.handleInput}
                name='email'
              />
              <FormCheckBox
                label='Subscribe to our newsletter'
                onChange={this.handleInput}
                name='newsletter'
              />
              <FormSelect
                label='Your interest'
                options={dropdownOptions}
                onChange={this.handleInput}
                name='interest'
              />
              <FormTextArea
                label='Your message'
                onChange={this.handleInput}
                name='message'
              />

              <button className='btn btn-primary'>Submit</button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RegistrationForm;
