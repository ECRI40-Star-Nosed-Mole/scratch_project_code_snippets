import React from 'react';
import styles from './Signup.scss';

const Signup = ({ setModalVisible }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let newAccount = {
      first: e.target[0].value,
      last: e.target[1].value,
      username: e.target[2].value,
      password: e.target[3].value,
    };
    console.log(newAccount);
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(newAccount),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(`You made a new account ${user}`);
        // hideJoin(event);
        setModalVisible(false);
      })
      .catch((err) => console.log('error from Join-Post-Request ERROR: ', err));
  };

  const handleExit = () => {
    setModalVisible(false);
  };

  //   function hideJoin(event) {
  //     setJoinVisibleStyle(false)
  //     clearInputs(event);
  //     setPopup(false);
  //     setJoinError(false);
  //   }

  //   function clearInputs(event) {
  //     for (let i = 0; i < 4; i++) {
  //       if (event.type === 'submit') event.target[i].value = '';
  //       else event.target.nextSibling.childNodes[1][i].value = '';
  //     }
  //   }

  //   function inputChange() {
  //     setJoinError(false);
  //   }

  return (
    <form className='form form--signup' onSubmit={handleSubmit}>
      <button className='btn-exit' onClick={handleExit}>
        X
      </button>
      <div className='title-container'>
        <span className='title-c title-c--signup'>C</span>
        <div className='typing-container'>
          <h1 className='typing-title typing-title--signup'>ode Snippets</h1>
        </div>
      </div>
      <h3 className='form-title form-title--signup'>Signup</h3>
      <div className='form-container form-container--signup'>
        <div className='input-container input-container--signup'>
          <label className='input-label input-label--signup'>First Name</label>
          <input
            type='text'
            name='first'
            className='input-field input-field--signup'
            required
            autoComplete='off'
            pattern='[A-Za-z]+'
            title='First name must contain only upper and lowercase letters'
          />
        </div>
        <div className='input-container input-container--signup'>
          <label className='input-label input-label--signup'>Last Name</label>
          <input
            type='text'
            name='last'
            className='input-field input-field--signup'
            required
            autoComplete='off'
            pattern='[A-Za-z]+'
            title='Last name must contain only upper and lowercase letters'
          />
        </div>
        <div className='input-container input-container--signup'>
          <label className='input-label input-label--signup'>Username</label>
          <input
            type='text'
            name='username'
            className='input-field input-field--signup'
            required
            autoComplete='off'
            pattern='[A-Za-z0-9]{1,15}'
            title='Username can only contain upper and lower case letters and numbers'
            // style={usernameStyle}
          />
        </div>
        <div className='input-container input-container--signup'>
          <label className='input-label input-label--signup'>Password</label>
          <input
            type='password'
            name='pword'
            className='input-field input-field--signup'
            required
            autoComplete='off'
          />
        </div>
      </div>
      <button type='submit' className='form-btn form-btn--signup'>
        Join Now
      </button>
    </form>
  );
};

export default Signup;
