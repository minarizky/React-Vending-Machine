import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Vending Machine</NavLink></li>
        <li><NavLink to="/snack1" className={({ isActive }) => isActive ? 'active' : ''}>Snack 1</NavLink></li>
        <li><NavLink to="/snack2" className={({ isActive }) => isActive ? 'active' : ''}>Snack 2</NavLink></li>
        <li><NavLink to="/snack3" className={({ isActive }) => isActive ? 'active' : ''}>Snack 3</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
