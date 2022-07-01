import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='nav'>
      <ul>
        <li><Link to='complete'>Complete</Link></li>
        <li><Link to='*'>Todo</Link></li>
        <li><Link to='calander'>Calander</Link></li>
      </ul>
    </div>
  );
};

export default Header;