import React, {useState, useEffect} from 'react';
import '../App.scss';
import { FaBatteryEmpty } from 'react-icons/fa';

function BattleInit() {
  

  const [teste,setTeste] = useState([])
  const empty = {"name": null, "diceRoll": null, "bonusInit": null}
  useEffect(() => {
    fetchItems()
  },[])
  const fetchItems = async () => {
    const data = await fetch('https://spreadsheets.google.com/feeds/cells/18okNyKjrihgei9jqko5VTW13nt-TfzIEeJxiHX7xETA/1/public/full?alt=json');
    console.log(data.response)
    // setTeste(data)
    fetch('https://spreadsheets.google.com/feeds/cells/18okNyKjrihgei9jqko5VTW13nt-TfzIEeJxiHX7xETA/1/public/full?alt=json')
      .then(response => response.json())
      .then(jsonData => {
  
        if( jsonData != null){
          let testeArray = []
          for(let i=0; i < jsonData.feed.entry.length; i++){
            /*
            col: "1"
            inputValue: "teste"
            row: "2"
            */
            
            if (i>1){              
              if ( i % 2 == 0) {               
                let newArr = {"name": null, "diceRoll": null, "bonusInit": null}; 
                newArr.name = jsonData.feed.entry[i]['gs$cell'].inputValue
                newArr.bonusInit = jsonData.feed.entry[i+1]['gs$cell'].inputValue   
                testeArray.push(newArr)
              }
            }
            setTeste(teste.concat(testeArray))
      

            // if( jsonData.feed.entry[i]['gsx$animals']['$t'] != '' ){
            //   this.state.animals.push(jsonData.feed.entry[i]['gsx$animals']['$t'] );
            // }
 
            // if( jsonData.feed.entry[i]['gsx$cities']['$t'] != '' ){
            //   this.state.cities.push(jsonData.feed.entry[i]['gsx$cities']['$t'] );
            // }
          }
        }
        
      });
  }
  return (
    <div className="container">
      <h1>Battle Initiative</h1>
      <p style={{color:"white"}}>{JSON.stringify(teste)}</p>
    </div>
  );
}

export default BattleInit;
