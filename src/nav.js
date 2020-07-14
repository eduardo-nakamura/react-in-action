import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/"><h3>RPG Apps</h3></Link>
      
      <ul className="nav-links">
        <Link to="/dice-roller"><li>Dice Roller</li></Link>
        <Link to="/poke-list"><li>Pokemon List</li></Link>
        <Link to="/battle-initiative"><li>Battle Initiative</li></Link>
        <li>
          <a href="https://youtu.be/Law7wfdg_ls?t=1441">
          https://youtu.be/Law7wfdg_ls
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
