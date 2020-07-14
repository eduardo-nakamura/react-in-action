import React from 'react';
import './App.css';
// Components
import Nav from './nav';
import DiceRoller from './dice-roller';
import PokemonsList from './poke-list';
import BattleInit from './battle-initiative';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Home = () => {
  return (
  <div>
    <h1>Home</h1>
  </div>)
};

function App() {
  return (
    <Router>
      <div className="App">
        
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/dice-roller" component={DiceRoller}/>
          <Route path="/poke-list" component={PokemonsList}/>
          <Route path="/battle-initiative" component={BattleInit}/> 
        </Switch> 
      </div>
    </Router>
    
  );
}



export default App;
