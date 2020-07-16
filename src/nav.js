import React from 'react';
import './App.scss';
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <ul className="menu-links">
        <li>
          <Link to="/dice-roller">Dice Roller</Link>
        </li>
        <li>
          {/* <Link to="/poke-list">Pokemon List</Link> */}
          
        </li>
        <li>
          <Link to="/battle-initiative">Battle Initiative</Link>
        </li>    
      </ul>
  );
}

export default Nav;
