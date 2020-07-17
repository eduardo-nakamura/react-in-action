import React, {useState} from 'react';
import '../App.scss';
import { ReactComponent as d4 } from '../assets/d4.svg'


function DiceRoller() {
  const empty = {"diceNum": null, "diceQuant": null, "diceBonus": null}
  const [diceOb,setDiceObj] = useState([empty])
  
  const dice4 = {"diceNum": 4, "diceQuant": null, "diceBonus": null}
  const dice6 = {"diceNum": 6, "diceQuant": null, "diceBonus": null}
  const dice8 = {"diceNum": 8, "diceQuant": null, "diceBonus": null}
  const dice10 = {"diceNum": 10, "diceQuant": null, "diceBonus": null}
  const dice12 = {"diceNum": 12, "diceQuant": null, "diceBonus": null}
  const dice20 = {"diceNum": 20, "diceQuant": null, "diceBonus": null}
  const dice100 = {"diceNum": 100, "diceQuant": null, "diceBonus": null}
  let handleChangeAlt = (itemAlt, index) => {    
    let { name, value } = itemAlt.target;
    let newArr = [...diceOb]; 
    newArr[index][name] = value;
    setDiceObj(newArr);
  }  

  const [allDice,setAllDice] = useState([])

  
  return (
    <div className="container">
      <h1 className="bg-success">Dice Roller</h1>
      <div className="section">
        
      </div>
    
      <div className="section">
      <p onClick={() => setDiceObj(diceOb.concat(empty)) }>ee</p>
      <div className="dices-type">
        <img src={d4} alt="a"/>
        <d4/>
      </div>
          <table class="w3-table">
            <tr>
              <th>Faces</th>
              <th>Quantidade</th>
              <th>Bonus</th>
            </tr>
            {
                diceOb && diceOb.slice(0, 12).map((item, index) => {
                  return (
                    <tr>
                      <td>
                    
                        <input                           
                          type="number"
                          name="diceNum"
                          onChange={(item) => handleChangeAlt(item, index)}  
                          value={diceOb[index].diceNum}               
                        />
                      </td>
                      <td>
                      <input                           
                          type="number"
                          name="diceQuant"
                          onChange={(item) => handleChangeAlt(item, index)}   
                          value={diceOb[index].diceQuant}              
                        />
                        </td>
                      <td>
                      <input                           
                          type="number"
                          name="diceBonus"
                          onChange={(item) => handleChangeAlt(item, index)}  
                          value={diceOb[index].diceBonus}                
                        />
                       </td>
                    </tr>
                  )
                })

              }
            
          </table>
      </div>

      <div className="section">
      {JSON.stringify(diceOb)}
      </div>
    </div>
  );
}

export default DiceRoller;
