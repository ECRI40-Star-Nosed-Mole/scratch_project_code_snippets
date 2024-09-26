import React, { useState } from 'react';
import MainContainer from './src/containers/MainContainer/MainContainer.jsx';
import Welcome from './src/pages/Welcome.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div id='app'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              !loggedIn ? (
                <Welcome setLoggedIn={setLoggedIn} />
              ) : (
                <Navigate to='/snippets' />
              )
            }
          />
          <Route path='/snippets' element={<MainContainer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
