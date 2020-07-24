import React, {useState} from 'react';
import './App.scss';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Nav() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [currentHost, setCurrentHost] = useState()
  // switch (window.location.pathname) {    
  //   case '/dice-roller':
  //     setCurrentHost(0)
  //     break;
  //   case '/battle-initiative':
  //     setCurrentHost(1)
  //     break;
  //   case '/game-hooks':
  //     setCurrentHost(2)
  //     break;    
  // }

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      {currentHost}
      <List component="nav" aria-label="main mailbox folders">
      <Link to="/dice-roller">
      <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >          
          <ListItemText primary="Dice Roller" />
        </ListItem>
      </Link>

     

        <Link to="/battle-initiative">
          
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          
          <ListItemText primary="Battle Initiative" />
        </ListItem>
        </Link>

        

        <Link to="/game-hooks">
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          
          <ListItemText primary="Game Hooks" />
        </ListItem>
        </Link>
        
        <Link to="/loot-generator">
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          
          <ListItemText primary="Loot Generator" />
        </ListItem>
        </Link>
        
        
      </List>
     
    </div>
    // <ul className="menu-links">
    //     <li>
    //       <Link to="/dice-roller">Dice Roller</Link>
    //     </li>
    
    //     <li>
    //       <Link to="/battle-initiative">Battle Initiative</Link>
    //     </li> 
    //     <li>
    //       <Link to="/game-hooks">Game Hooks</Link>
    //     </li>    
    //   </ul>
  );
}

export default Nav;
