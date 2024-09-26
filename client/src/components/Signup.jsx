import React from 'react';

// setModalVisible makes the modal appear
const Signup = ({setModalVisible}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAccount = {
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
      // comment this out since it's redundant?  Seems to work without it.
      // .then((res) => res.json())
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
    <div className='popup' >
      <div className='container--wide'>
        <button className='btn-exit' onClick={handleExit}>
            X
        </button>
        <div className='container--widest'>
          <h2 className='title account__title'>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className='input-container'>
              <label>First Name </label>
              <input
                type='text'
                name='first'
                className='join__input'
                required
                autoComplete='off'
                pattern='[A-Za-z]+'
                title='First name must contain only upper and lowercase letters'
              />
            </div>
            <div className='input-container'>
              <label>Last Name </label>
              <input
                type='text'
                name='last'
                className='join__input'
                required
                autoComplete='off'
                pattern='[A-Za-z]+'
                title='Last name must contain only upper and lowercase letters'
              />
            </div>
            <div className='input-container'>
              <label>Username</label>
              <input
                type='text'
                name='username'
                className='join__input'
                required
                autoComplete='off'
                pattern='[A-Za-z0-9]{1,15}'
                title='Username can only contain upper and lower case letters and numbers'
                // style={usernameStyle}
              />
            </div>
            <div className='input-container'>
              <label>Password </label>
              <input
                type='password'
                name='pword'
                className='join__input'
                required
                autoComplete='off'
              />
            </div>
            <button type='submit' className='btn btn--popup'>
                Join Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;