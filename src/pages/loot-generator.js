import React, {useState, useEffect} from 'react';
import '../App.scss';
// import { FaBatteryEmpty } from 'react-icons/fa';
import { rollDice } from '../shared/Utils'


import { Container, Box, Radio,RadioGroup,FormControlLabel,FormControl,FormLabel,Button } from '@material-ui/core'

function LootGenerator() {
  const [tabelaTreasure, setTabelaTreasure] = useState(null);
  const [nivelTreasure, setNivelTreasure] = useState(null);
  const [diceRoll, setDiceRoll] = useState(null);
  const [resultTreasure, setResultTreasure] = useState([]);
  const handleChange = (event) => {
    // console.log(tabelaTreasure == '')
    switch(event.target.name) {
      case 'type':
        setTabelaTreasure(event.target.value)
        break;
      case 'level':
        setNivelTreasure(event.target.value)
        break;
      default:
        break;
    }
    // setTabelaTreasure(event.target.value);
  };
 
  useEffect(() => {
    setDiceRoll(rollDice(100))
    // fetchItems()
  },[])
  const fetchItems = async () => {
    let query = `https://spreadsheets.google.com/feeds/cells/1UtFW7HbxOdztEkd859i8yuw-gO5OYpKPJMKxhAPc0G8/${tabelaTreasure}/public/full?alt=json`    
    setDiceRoll(rollDice(100))
    fetch(query)
      .then(response => response.json())
      .then(jsonData => {        
        if( jsonData != null){
          let testeArray = []
          let lineArray = new Array;
          for(let i=0; i < jsonData.feed.entry.length; i++){       
            if(jsonData.feed.entry[i]['gs$cell'].inputValue != '-'){
              lineArray.push(jsonData.feed.entry[i]['gs$cell'].inputValue)
            } else {     
              if(lineArray[0] === nivelTreasure){  
                let line = {
                  "diceRoll":Number,
                  "dicePrize1":String,
                  "typePrize1":String   
                }                
                line.diceRoll = parseInt(lineArray[1])
                line.dicePrize1 = lineArray[2]
                line.typePrize1 = lineArray[3]
                if(lineArray.length == 7){
                  line["dicePrize2"] = lineArray[5]
                  line["typePrize2"] = lineArray[6]
                }    
                if(lineArray.length > 7){
                  line["dicePrize3"] = lineArray[8]
                  line["typePrize3"] = lineArray[9]
                }             
                testeArray.push(line)
              }                  
              lineArray = new Array              
            }           
          }
          // let rolledLine =  testeArray.filter(function(lvl) {
          //   return lvl.diceRoll <= diceRoll;
          // });        
          // setResultTreasure(rolledLine.length === 1 ? rolledLine[0] : rolledLine.pop())       
          console.log(testeArray)       
          calculateTreasure(testeArray)
        }        
      });
  }

  function rollTreasure() {
    setResultTreasure()
    fetchItems()    
    // if (resultTreasure){
    //   calculateTreasure()
    // }
  }
  function sss(dicePrize,multiplyer){

  }
  async function calculateTreasure(res){    
    let rolledLine =  res.filter(function(lvl) {
      return lvl.diceRoll <= diceRoll;
    }); 
    rolledLine = rolledLine.length === 1 ? res[0] : rolledLine.pop()
    console.log(rolledLine)
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let query = ''
    if(rolledLine["dicePrize1"]){      
      // let dice = rolledLine["dicePrize1"].split("x")[0].split("d")
      // let multiplyer = rolledLine["dicePrize1"].split("x")[1]
      // let results = []
      // for (let i = 0; i < dice[0]; i++){
      //   results.push(rollDice(dice[1]))
      // }   
      // query += results.reduce(reducer) * parseInt(multiplyer) + ' ' + rolledLine["typePrize1"]          
    }
    
    setResultTreasure(query)
  }

  return (
    <Container width={1} >
    <h1>Loot Generator</h1>
    <Box display="flex" flexDirection="column">
    <FormControl  component="fieldset">
      <FormLabel focused={false} component="legend">Escolha a tabela de Tesouro</FormLabel>
      <RadioGroup row  aria-label="gender" name="type" value={tabelaTreasure} onChange={handleChange}>
        <FormControlLabel value="1" control={<Radio />} label="Individual" />
        <FormControlLabel value="2" control={<Radio />} label="Pilha de Treasure" />     
      </RadioGroup>
    </FormControl>
    {tabelaTreasure ? 
      <FormControl  component="fieldset">
      <FormLabel focused={false} component="legend">Escolha o nivel do Tesouro</FormLabel>
      <RadioGroup row  aria-label="gender" name="level" value={nivelTreasure} onChange={handleChange}>
        <FormControlLabel value="lvl4" control={<Radio />} label="0-4" />
        <FormControlLabel value="lvl10" control={<Radio />} label="5-10" />
        <FormControlLabel value="lvl16" control={<Radio />} label="11-16" />
        <FormControlLabel value="lvl17" control={<Radio />} label="17+" />     
      </RadioGroup>
    </FormControl>
       : ''
    }
    {nivelTreasure ?
      <Box>
        <Button variant="contained"  color="primary" onClick={() => rollTreasure()} >
          Gerar Treasure
        </Button>
      </Box>
    : ''}

    {JSON.stringify(resultTreasure)}
    {diceRoll}
    </Box>
        
        
    </Container>
  );
}

export default LootGenerator;
