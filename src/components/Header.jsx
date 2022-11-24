import React from 'react';
import classes from './Header.module.css'
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header} >
    <Link to="/">
    <h3>PokeApp</h3>
    </Link>
    <Nav />

    </header>
  )
}

export default Header