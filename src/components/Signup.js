import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker'
import { Form, Button } from 'react-bootstrap'

const Signup = () => {
  //   const [startDate, setStartDate] = useState(new Date())
  const [details, setDetails] = useState({
    service: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    businessName: '',
    businessUrl: '',
    cityName: '',
    area: '',
    address: '',
    gender: '',
    date: new Date(),
  })
  const dispatch = useDispatch()

  const handleChange = name => event => {
    const value = event.target.value
    setDetails({ ...details, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    console.log(details)
    dispatch({
      type: 'SIGNUP_DETAILS',
      payload: details,
    })

    setDetails({
      service: '',
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      password: '',
      businessName: '',
      businessUrl: '',
      cityName: '',
      area: '',
      address: '',
      gender: '',
      date: new Date(),
    })
  }

  return (
    <div className='m-5'>
      <h1 className='text-center m-5'>Merchant Sign Up</h1>

      <div className='container'>
        <div className='row'>
          <div className='col-8 offset-md-2'>
            <Form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <Form.Check
                  onChange={handleChange('service')}
                  value='Parcel'
                  inline
                  label='Parcel'
                  name='service'
                  type='radio'
                  id='inline-radio-1'
                />
                <Form.Check
                  onChange={handleChange('service')}
                  value='Truck'
                  inline
                  label='Truck'
                  name='service'
                  type='radio'
                  id='inline-radio-2'
                />
                <Form.Check
                  inline
                  onChange={handleChange('service')}
                  value='Food'
                  label='Food'
                  name='service'
                  type='radio'
                  id='inline-radio-3'
                />
                <Form.Check
                  inline
                  onChange={handleChange('service')}
                  value='Ride'
                  label='Ride'
                  name='service'
                  type='radio'
                  id='inline-radio-4'
                />
              </div>

              <Form.Group className='mb-3'>
                <Form.Control
                  onChange={handleChange('firstName')}
                  type='text'
                  value={details.firstName}
                  name='firstName'
                  placeholder='Enter First Name'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control
                  onChange={handleChange('lastName')}
                  value={details.lastName}
                  type='text'
                  name='lastName'
                  placeholder='Enter Last Name'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control
                  onChange={handleChange('email')}
                  value={details.email}
                  type='email'
                  name='email'
                  placeholder='Enter Email Address'
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Control
                  onChange={handleChange('mobile')}
                  value={details.mobile}
                  type='tel'
                  name='mobile'
                  placeholder='Enter Mobile Number'
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Control
                  type='password'
                  value={details.password}
                  onChange={handleChange('password')}
                  name='password'
                  placeholder='Enter Password'
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Control
                  type='text'
                  onChange={handleChange('businessName')}
                  value={details.businessName}
                  name='businessName'
                  placeholder='Enter Business Name'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control
                  type='text'
                  value={details.businessUrl}
                  onChange={handleChange('businessUrl')}
                  name='businessUrl'
                  placeholder='Enter Business URL'
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Control
                  onChange={handleChange('cityName')}
                  value={details.cityName}
                  type='text'
                  name='cityName'
                  placeholder='Enter City Name'
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Control
                  onChange={handleChange('area')}
                  type='text'
                  value={details.area}
                  name='area'
                  placeholder='Enter Area'
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Control
                  onChange={handleChange('address')}
                  value={details.address}
                  type='text'
                  name='address'
                  placeholder='Enter Address'
                />
              </Form.Group>

              <DatePicker
                className='mb-3'
                selected={details.date}
                onChange={date => setDetails({ ...details, date: date })}
              />

              <Form.Group className='mb-3'>
                <select
                  onChange={handleChange('gender')}
                  name='gender'
                  id='gender'
                >
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Others'>Others</option>
                </select>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Check
                  type='checkbox'
                  id='setCheck'
                  label='I agree the terms and condition of GHURI Parcel'
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
