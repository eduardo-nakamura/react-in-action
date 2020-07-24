import React, {useState, useEffect} from 'react';
import '../App.scss';
import { FaBatteryEmpty } from 'react-icons/fa';



import { Container, Box, Typography,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel,Button } from '@material-ui/core'

function LootGenerator() {
  const [tabelaTesouro, setTabelaTesouro] = React.useState();
  const [nivelTesouro, setNivelTesouro] = React.useState();
  const handleChange = (event) => {
    console.log(event.target.name)
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
    // fetchItems()
  },[])
  const fetchItems = async () => {
    // const data = await fetch('https://spreadsheets.google.com/feeds/cells/18okNyKjrihgei9jqko5VTW13nt-TfzIEeJxiHX7xETA/1/public/full?alt=json');
    // console.log(data.response)
    // setTeste(data)
    fetch('https://spreadsheets.google.com/feeds/cells/129ZTU_sBnQmbJlua11DSY3hfaBLpvzJvv2OtHg1Sja8/2/public/full?alt=json')
      .then(response => response.json())
      .then(jsonData => {
        
        if( jsonData != null){
          let testeArray = []
          let lengthTable = jsonData.feed.entry.length -1
          // console.log(jsonData.feed.entry)
          //jsonData.feed.entry[lengthTable]['gs$cell'].row
          for(let i=0; i < jsonData.feed.entry.length; i++){  
            console.log(jsonData.feed.entry[i]['gs$cell'])
          }
        }
        
      });
  }
  return (
    <Container width={1} >
    <h1>Loot Generator</h1>
    <Box display="flex" flexDirection="row" justifyContent="space-around"  >

    <FormControl  component="fieldset">
      <FormLabel  component="legend">Escolha a tabela de Tesouro</FormLabel>
      <RadioGroup row  aria-label="gender" name="type" value={tabelaTesouro} onChange={handleChange}>
        <FormControlLabel value="individual" control={<Radio />} label="Individual" />
        <FormControlLabel value="pilha" control={<Radio />} label="Pilha de tesouro" />
        {/* <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
      </RadioGroup>
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel  component="legend">Escolha o nivel do Tesouro</FormLabel>
      <RadioGroup row  aria-label="gender" name="level" value={nivelTesouro} onChange={handleChange}>
        <FormControlLabel value="4" control={<Radio />} label="0-4" />
        <FormControlLabel value="10" control={<Radio />} label="5-10" />
        <FormControlLabel value="16" control={<Radio />} label="11-16" />
        <FormControlLabel value="17" control={<Radio />} label="17+" />     
      </RadioGroup>
    </FormControl>
    <Button variant="outlined" color="primary" onClick={() => fetchItems()} >
                Gerar Tesouro
    </Button>
    </Box>

    </Container>
  );
}

export default LootGenerator;
