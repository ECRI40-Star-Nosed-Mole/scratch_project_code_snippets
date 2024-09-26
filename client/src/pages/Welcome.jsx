import React, { useState } from 'react';
import styles from './Welcome.scss';
import Signup from './Signup';

const Welcome = ({ setLoggedIn }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    console.log(username);
    console.log(password);
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(console.log(JSON.stringify({ username, password })))
      //.then((res) => res.json())
      .then((user) => {
        console.log('hello');
        console.log('You loggedin', user);
        setLoggedIn('fake data');
      })
      .catch((err) =>
        console.log('error from Login-Post-Request ERROR: ', err)
      );
  };

  const signupDisplay = () => {
    console.log('you clicked signup');
    setModalVisible(true);
  };

  const inputChange = () => {
    console.log('its changing');
  };

  return (
    <div className='welcome'>
      <form
        className={modalVisible ? 'form form-flip' : 'form'}
        onSubmit={handleSubmit}
      >
        <div className='title-container'>
          <span className='title-c'>C</span>
          <div className='typing-container'>
            <h1 className='typing-title'>ode Snippets</h1>
          </div>
        </div>
        <h3 className='form-title'>Login</h3>
        <div className='form-container'>
          <div className='input-container'>
            <label className='input-label'>Username </label>
            <input
              type='text'
              name='username'
              className='input-field input-field--small'
              // onChange={inputChange}
              required
              autoComplete='off'
            />
          </div>
          <div className='input-container'>
            <label className='input-label'>Password </label>
            <input
              type='password'
              name='pword'
              className='input-field input-field--small'
              // onChange={inputChange}
              required
              autoComplete='off'
            />
          </div>
        </div>
        <button type='submit' className='form-btn'>
          Login
        </button>
        <a className='signup-link' onClick={signupDisplay}>
          Not a member? Sign up here!
        </a>
      </form>

      {modalVisible && <Signup setModalVisible={setModalVisible} />}
    </div>
  );
};

export default Welcome;
