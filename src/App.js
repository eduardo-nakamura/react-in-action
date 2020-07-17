import React, {useState} from 'react';
import './App.scss';
// Components
import Nav from './nav';
// import Header from './header';
import DiceRoller from './pages/dice-roller';
import Home from './pages/home';
import PokemonsList from './poke-list';
import BattleInit from './pages/battle-initiative';
import PokemonsDetail from './pokemon-detail'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
// const Home = () => {
//   return (
//   <div>
//     <h1>Home</h1>
//   </div>)
// };

function App() {
  const [teste,setTeste] = useState(false)

  return (
    <Router>     
      <div className="AppContainer">
      <section className="header-app">
        <AiOutlineMenu style={{color: "white"}} onClick={() => setTeste(!teste)}></AiOutlineMenu>
        <Link to="/">
          <h3>RPG Apps</h3>
        </Link>
        <AiOutlineMenu style={{opacity: 0}} ></AiOutlineMenu>
      </section>
     
        <div className={teste ? 'menu-show' : 'menu-hide'}>
        <Nav ></Nav>
        </div>
      
   
      
        <Switch className="Container">
          <Route path="/" exact component={Home}/>
          <Route path="/dice-roller" component={DiceRoller}/>
          <Route path="/poke-list" component={PokemonsList}/>
          <Route path="/poke-list/:id" component={PokemonsDetail}/>
          <Route path="/battle-initiative" component={BattleInit}/> 
        </Switch> 
      </div>
    </Router>
    
  );
}



export default App;
