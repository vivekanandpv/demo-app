import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormValidationError from '../common/FormValidationError';
import FormikCheckBox from '../common/FormikCheckbox';
import FormikInput from '../common/FormikInput';

const FormikForm = (props) => {
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

  const initialValues = {
    fullName: '',
    email: '',
    newsletter: false,
    interest: '',
    message: '',
    phone: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required('Name is required')
      .max(25, 'Max 25 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Should be a proper email'),
    interest: Yup.string().required('We need your interest'),
    message: Yup.string().max(100, 'Max 100 characters'),
    phone: Yup.string().matches(
      /^[6-9]{1}[0-9]{9}$/,
      '10 digits, should start with 6-9'
    ),
  });

  const handleSubmit = (values) => {
    console.log('Form submitted', values);
  };

  return (
    <Fragment>
      <div className='album py-5 bg-light'>
        <div className='container'>
          <h3>Registration Form</h3>
          <hr />
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <div className='form-group'>
                <Field
                  as={FormikInput}
                  label='Full Name'
                  className='form-control'
                  name='fullName'
                />
                <ErrorMessage name='fullName' component={FormValidationError} />
              </div>

              <div className='form-group'>
                <Field
                  as={FormikInput}
                  label='Email'
                  className='form-control'
                  name='email'
                />
                <ErrorMessage name='email' component={FormValidationError} />
              </div>

              <div className='form-group form-check'>
                <Field name='newsletter' as={FormikCheckBox} />
                <label htmlFor='newsletter'>Newsletter</label>
                <ErrorMessage
                  name='newsletter'
                  component={FormValidationError}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='interest'>Interest</label>
                <Field as='select' className='form-control' name='interest'>
                  <option value={null}>--- Please Select ---</option>
                  {dropdownOptions.map((o, i) => {
                    return (
                      <option value={o.value} key={i}>
                        {o.text}
                      </option>
                    );
                  })}
                </Field>
                <ErrorMessage name='interest' component={FormValidationError} />
              </div>

              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <Field as='textarea' className='form-control' name='message' />
                <ErrorMessage name='message' component={FormValidationError} />
              </div>

              <div className='form-group'>
                <Field
                  as={FormikInput}
                  label='Phone number'
                  className='form-control'
                  name='phone'
                />
                <ErrorMessage name='phone' component={FormValidationError} />
              </div>

              <button className='btn btn-primary'>Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default FormikForm;
