import React, {useState, useEffect} from 'react';
import '../App.scss';
import { FaBatteryEmpty } from 'react-icons/fa';

// Grid
import { Grid,Box,Typography,Container,Button } from '@material-ui/core'


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
    // <div className="container">
    //   <h1>Game Hooks</h1>
   
    //   <p style={{color:"white"}}>{allHooks[randomRumber]}</p>
      
    //   <Button variant="outlined" color="primary" onClick={() => setRandomRumber(getRandomInt(allHooks.length))} >
    //     Outro
    //   </Button>
    // </div>
    <Container width={1} >
        <h1>Game Hooks</h1>
        <Grid container spacing={3}>
          <Grid item xs={8} >
            <Box p={2} style={{backgroundColor:'red'}} >
            {allHooks[randomRumber]}
            </Box>
          </Grid>
          <Grid item xs={1} >
          <Button variant="contained" color="primary" onClick={() => setRandomRumber(getRandomInt(allHooks.length))} >
                Outro
          </Button>
          </Grid>
        </Grid>
        {/* <Box width={1} display="flex" flexDirection="column"  bgcolor="background.paper">
          <Box width={1}  color="white" bgcolor="blue" >
        
            <Typography variant="h4">    {allHooks[randomRumber]}</Typography>

          </Box>
          <Box width={1} color="white" bgcolor="red">
            <Button variant="outlined" color="primary" onClick={() => setRandomRumber(getRandomInt(allHooks.length))} >
                Outro
            </Button>
          </Box>
        </Box> */}
    </Container>
  );
}

export default GameHooks;
