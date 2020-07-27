import React, {useState, useEffect} from 'react';
import '../App.scss';
import { FaBatteryEmpty } from 'react-icons/fa';
import { rollDice } from '../shared/Utils'


import { Container, Box, Typography,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel,Button } from '@material-ui/core'

function LootGenerator() {
  const [tabelaTesouro, setTabelaTesouro] = useState(null);
  const [nivelTesouro, setNivelTesouro] = useState(null);
  const [diceRoll, setDiceRoll] = useState(null);
  const handleChange = (event) => {
    // console.log(tabelaTesouro == '')
    switch(event.target.name) {
      case 'type':
        setTabelaTesouro(event.target.value)
        break;
      case 'level':
        setNivelTesouro(event.target.value)
        break;
      default:
        break;
    }
    // setTabelaTesouro(event.target.value);
  };

  
  const [teste,setTeste] = useState([])
  const empty = {"name": null, "diceRoll": null, "bonusInit": null}
  useEffect(() => {
    setDiceRoll(rollDice(100))
    // fetchItems()
  },[])
  const fetchItems = async () => {
    // const data = await fetch('https://spreadsheets.google.com/feeds/cells/18okNyKjrihgei9jqko5VTW13nt-TfzIEeJxiHX7xETA/1/public/full?alt=json');
    // console.log(data.response)
    // setTeste(data)tabelaTesouro
    let query = `https://spreadsheets.google.com/feeds/cells/1UtFW7HbxOdztEkd859i8yuw-gO5OYpKPJMKxhAPc0G8/${tabelaTesouro}/public/full?alt=json`    
    setDiceRoll(rollDice(100))
    fetch(query)
      .then(response => response.json())
      .then(jsonData => {        
        if( jsonData != null){
          let testeArray = []
          let lineArray = new Array
          let row = 1    
          // for(let i=0; i < jsonData.feed.entry.length; i++){              
          //   if(jsonData.feed.entry[i]['gs$cell'].inputValue != '-'){
          //     lineArray.push(jsonData.feed.entry[i]['gs$cell'].inputValue)
          //   } else {                  
          //     if(lineArray[0] == nivelTesouro){   
          //       console.log(diceRoll >= lineArray[1])           
          //       console.log('diceRoll:',diceRoll,'lineArray[1]:',lineArray[1])   
          //       if(diceRoll >= lineArray[1])     {               
          //         testeArray.push(lineArray)
          //       }
                
          //     }         
          //     console.log(testeArray.length)               
          //     lineArray = new Array
          //   }
          // }
          for(let i=0; i < jsonData.feed.entry.length; i++){              
            if(jsonData.feed.entry[i]['gs$cell'].inputValue != '-'){
              lineArray.push(jsonData.feed.entry[i]['gs$cell'].inputValue)
            } else {      
              if(lineArray[0] == nivelTesouro){ 
                console.log('diceRoll <= lineArray[1]')   
                console.log((diceRoll <= lineArray[1]) == true)
                testeArray.push(lineArray)                
              }
              
              lineArray = new Array
            }
          }
          console.log(testeArray)
          // let arrayRandom = testeArray.pop()          
          // if(arrayRandom.length > 2){
          //   arrayRandom.shift()
          //   arrayRandom.shift()
          //   console.log(arrayRandom,arrayRandom.length)
          //   if (tabelaTesouro == 1){
          //     switch(true) {
          //       case (arrayRandom.length < 3):
                  
          //         break;                  
          //       default:
                  
          //     }
          //   } else {
           
          //   }
          // }
          
        }        
      });
  }



  return (
    <Container width={1} >
    <h1>Loot Generator</h1>
    <Box display="flex" flexDirection="column"   >

    <FormControl marginDense="normal" component="fieldset">
      <FormLabel focused={false} component="legend">Escolha a tabela de Tesouro</FormLabel>
      <RadioGroup row  aria-label="gender" name="type" value={tabelaTesouro} onChange={handleChange}>
        <FormControlLabel value="1" control={<Radio />} label="Individual" />
        <FormControlLabel value="2" control={<Radio />} label="Pilha de tesouro" />     
      </RadioGroup>
    </FormControl>
    {tabelaTesouro ? 
      <FormControl marginDense="normal" component="fieldset">
      <FormLabel focused={false} component="legend">Escolha o nivel do Tesouro</FormLabel>
      <RadioGroup row  aria-label="gender" name="level" value={nivelTesouro} onChange={handleChange}>
        <FormControlLabel value="lvl4" control={<Radio />} label="0-4" />
        <FormControlLabel value="lvl10" control={<Radio />} label="5-10" />
        <FormControlLabel value="lvl16" control={<Radio />} label="11-16" />
        <FormControlLabel value="lvl17" control={<Radio />} label="17+" />     
      </RadioGroup>
    </FormControl>
       : ''
    }
    {nivelTesouro ?
      <Box>
        <Button variant="contained"  color="primary" onClick={() => fetchItems()} >
          Gerar Tesouro
        </Button>
      </Box>
    : ''}

    {tabelaTesouro} - 
    {nivelTesouro} - 
    {diceRoll}
    
    </Box>
        
        
    </Container>
  );
}

export default LootGenerator;
