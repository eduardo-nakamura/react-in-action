import React, {useState, useEffect} from 'react';
import '../App.scss';
import { FaBatteryEmpty } from 'react-icons/fa';
import Button from '@material-ui/core/Button';

function GameHooks() { 
  const [allHooks,setAllHooks] = useState([])
  const [randomRumber,setRandomRumber] = useState()
  function getRandomInt(max) {
    let min = Math.ceil(1);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  useEffect(() => {
    
    fetchItems()
  },[])
  const fetchItems = async () => {
    fetch('https://spreadsheets.google.com/feeds/cells/1Bz2dGNuN9n5nP4koMNhxAlFMHaTJagHJYqyG-4nNZ0Q/1/public/full?alt=json')
      .then(response => response.json())
      .then(jsonData => {        
        if( jsonData != null){
          let testeArray = []
          for(let i=0; i < jsonData.feed.entry.length; i++){
            let newHook = jsonData.feed.entry[i]['gs$cell'].inputValue
            testeArray.push(newHook)          
          }
          setAllHooks(testeArray)
          setRandomRumber(getRandomInt(allHooks.length))
        }        
      });
  }

  return (
    <div className="container">
      <h1>Game Hooks</h1>
   
      <p style={{color:"white"}}>{allHooks[randomRumber]}</p>
      
      <Button variant="outlined" color="primary" onClick={() => setRandomRumber(getRandomInt(allHooks.length))} >
        Outro
      </Button>
    </div>
  );
}

export default GameHooks;
