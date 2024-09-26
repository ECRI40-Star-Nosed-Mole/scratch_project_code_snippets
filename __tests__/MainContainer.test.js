import React, { useState } from 'react';
import { render } from '@testing-library/react';
import MainContainer from '../client/src/containers/MainContainer/MainContainer.jsx';
import Sidebar from '../client/src/containers/Sidebar/Sidebar.jsx';


import styles from '../client/src/components/SnippetDisplay/SnippetCard.module.scss';
import { Card } from 'react-bootstrap';
import DarkModeToggler from '../client/src/components/DarkModeToggler/DarkModeToggler.jsx';
import FooterButtons from '../client/src/components/SnippetDisplay/FooterButtons.jsx';
import Snippet from '../client/src/components/SnippetDisplay/Snippet.jsx';

describe('Maincontainer', () => {
  it('should render the MainContainer component', () => {
    render(<MainContainer />);
  });
});