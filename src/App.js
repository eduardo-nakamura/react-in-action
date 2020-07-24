import React, {useState} from 'react';
import './App.scss';
// Components
import Box from '@material-ui/core/Box';
import Nav from './nav';
// import Header from './header';
import DiceRoller from './pages/dice-roller';
import LootGenerator from './pages/loot-generator'
import GameHooks from './pages/game-hooks';
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
  const [teste,setTeste] = useState(true)

  return (
    <Router>     
      <div className="">
      <section className="header-app">
        <AiOutlineMenu style={{color: "white"}} onClick={() => setTeste(!teste)}></AiOutlineMenu>
        <Link to="/">
          <h3>RPG Apps</h3>
        </Link>
        <AiOutlineMenu style={{opacity: 0}} ></AiOutlineMenu>
      </section>

      <Box display="flex"  bgcolor="background.paper">
      
        <Box color="white" bgcolor="red" display="flex">
        <Nav ></Nav>
        </Box>
        <Box  flexGrow={2}  color="white" bgcolor="red" display="flex">
        <Switch >
          <Route path="/" exact component={Home}/>
          <Route path="/dice-roller" component={DiceRoller}/>
          <Route path="/poke-list" component={PokemonsList}/>
          <Route path="/poke-list/:id" component={PokemonsDetail}/>
          <Route path="/battle-initiative" component={BattleInit}/> 
          <Route path="/game-hooks" component={GameHooks}/> 
          <Route path="/loot-generator" component={LootGenerator}/> 
        </Switch> 
     
        </Box>
      </Box>

{/*       
      <div className={teste ? 'container-nav menu-hide' : ' container-nav menu-show'} >
      <Nav ></Nav>
      </div>
        
      
   
      <div className="container">
      <Switch >
          <Route path="/" exact component={Home}/>
          <Route path="/dice-roller" component={DiceRoller}/>
          <Route path="/poke-list" component={PokemonsList}/>
          <Route path="/poke-list/:id" component={PokemonsDetail}/>
          <Route path="/battle-initiative" component={BattleInit}/> 
          <Route path="/game-hooks" component={GameHooks}/> 
        </Switch> 
      </div> */}
     
      </div>
    </Router>
    
  );
}



export default App;
