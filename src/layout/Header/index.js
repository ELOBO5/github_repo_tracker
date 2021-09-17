import React from 'react';
import { Form } from '../../components';
import { getResults } from '../../actions';
import './style.css';

function Header() {

    return(
        <header>
            <h2>Enter the GitHub username to get information about your public repos.</h2>
            <Form getResults={getResults}/>
        </header>
    )
}

export default Header;
