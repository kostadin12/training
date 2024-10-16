import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons'

function App() {
  return (
    <>
    <p className='underline bold text-info-600'>
      hello
    </p>
    <Button variant='success' size='s' trailingIcon={faAddressBook}>
      Add Address
    </Button>
    </>
  );
}

export default App;
