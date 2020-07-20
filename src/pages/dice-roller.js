import React, {useState} from 'react';
import '../App.scss';
import {FaRegQuestionCircle} from 'react-icons/fa'
import {BsFillTrashFill} from 'react-icons/bs'
import {IoIosAddCircle} from 'react-icons/io'
// IoIosAddCircle
import imgagemEscolhida from '../assets/d4.svg'
import { ReactSVG } from 'react-svg'
import diceFourImg from '../assets/dice4.svg';
import diceSixImg from '../assets/dice6.svg';
import diceEightImg from '../assets/dice8.svg';
import diceTenImg from '../assets/dice10.svg';
import diceTwelveImg from '../assets/dice12.svg';
import diceTwentyImg from '../assets/dice20.svg';
import diceCustomImg from '../assets/custom.svg';
import diceHundredImg from '../assets/dice100.svg';

const dice4 = {"diceNum": 4, "diceQuant": 1, "diceBonus": 0}
  const dice6 = {"diceNum": 6, "diceQuant": 1, "diceBonus": 0}
  const dice8 = {"diceNum": 8, "diceQuant": 1, "diceBonus": 0}
  const dice10 = {"diceNum": 10, "diceQuant": 1, "diceBonus": 0}
  const dice12 = {"diceNum": 12, "diceQuant": 1, "diceBonus": 0}
  const dice20 = {"diceNum": 20, "diceQuant":1, "diceBonus": 0}
  const dice100 = {"diceNum": 100, "diceQuant": 1, "diceBonus": 0}
function DiceRoller() {
  const empty = {"diceNum": null, "diceQuant": null, "diceBonus": null}
  const [diceOb,setDiceObj] = useState([])
  const [diceRolled,setDiceRolled] = useState([])
  const [diceHist,setDiceHist] = useState([])
  function rollDiceResult(){    
    let diceResults2 = []
    setDiceObj([]);
    Object.keys(diceOb).forEach(key => {       
      let diceResults = []
      for(let i=0; i < diceOb[key].diceQuant; i++){
        diceResults.push(rollDice(diceOb[key].diceNum,1))        
      }
      if (diceOb[key].diceBonus > 0){
        diceResults.push(parseInt(diceOb[key].diceBonus))
      }      
      diceResults2.push(diceResults)
    })
    console.log(diceResults2.toString())    
    setDiceRolled(diceResults2)
    setDiceHist(diceHist.concat(diceResults2))
  }

  function rollDice(max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let handleChangeAlt = (itemAlt, index) => {    
    let { name, value } = itemAlt.target;
    let newArr = [...diceOb]; 
    newArr[index][name] = value;
    setDiceObj(newArr);
  }  

  const [allDice,setAllDice] = useState([])
  function deleteLine(index){
    let newArr = [...diceOb]; 
    console.log(newArr[index])
    newArr.splice(index,1)
    setDiceObj(newArr);
  }
  
  return (
    <div className="container">
      <h1 className="bg-success">Dice Roller</h1>
      <div className="section">
        
      </div>
    
      <div className="section">
     
      <div className="dices-type">
        <img onClick={() => setDiceObj(diceOb.concat(dice4)) }  src={diceFourImg} alt=""/>
        <img onClick={() => setDiceObj(diceOb.concat(dice6)) }  src={diceSixImg} alt=""/>
        <img onClick={() => setDiceObj(diceOb.concat(dice8)) }  src={diceEightImg} alt=""/>
        <img onClick={() => setDiceObj(diceOb.concat(dice10)) }  src={diceTenImg} alt=""/>
        <img onClick={() => setDiceObj(diceOb.concat(dice12)) }  src={diceTwelveImg} alt=""/>
        <img onClick={() => setDiceObj(diceOb.concat(dice20)) }  src={diceTwentyImg} alt=""/>
        <img onClick={() => setDiceObj(diceOb.concat(dice20)) }  src={diceHundredImg} alt=""/>
        <img onClick={() => setDiceObj(diceOb.concat(empty)) }  src={diceCustomImg} alt=""/>
        {/* <FaRegQuestionCircle style={{color: "white"}} size={50} onClick={() => setDiceObj(diceOb.concat(empty)) }/> */}
        {/* <img onClick={() => setDiceObj(diceOb.concat(dice100)) } style={{width: "50px"}} src={diceHundredImg} alt=""/> */}
      </div>
          <table class="w3-table">
            <tr>
            <th>Quantidade:</th>
              <th>Faces:</th>
             
              <th>Bonus:</th>
              <th><IoIosAddCircle onClick={() => setDiceObj(diceOb.concat(empty)) }/></th>
            </tr>
            {
                diceOb && diceOb.slice(0, 12).map((item, index) => {
                  return (
                    <tr>
                     
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
                          name="diceNum"
                          onChange={(item) => handleChangeAlt(item, index)}  
                          value={diceOb[index].diceNum}               
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
                       <td>
                       <BsFillTrashFill onClick={() => deleteLine(index)}/>
                       </td>
                    </tr>
                  )
                })

              }
            
          </table>
          <button onClick={() =>setDiceObj([empty]) }>Limpar</button>
          <button onClick={() => rollDiceResult() }>Rolar Dados</button>
      </div>

      <div className="section">
      {/* {JSON.stringify(diceOb)} - {diceOb.length} */}
      {JSON.stringify(diceRolled)}
      </div>

      <div className="section">
        <ul className="dice-results">
          {
            diceRolled && diceRolled.slice(0, 12).map((item, index) => {
              return (
                <li>
                  {index+1}) {item.toString().replace(/,/g, " + ")} = {JSON.stringify(item.reduce((acc, val) => acc + val))}
                  {/* {JSON.stringify(item).replace(/,/g, "+")}  */}
                  </li>
                )
            })
          }
        </ul>
      </div>

      {/* diceHist */}

      <div className="section">
        pkp
        <ul className="dice-results">
          {
            diceHist && diceHist.reverse().slice(0, 12).map((item, index) => {
              return (
                <li>
                 
                  {index+1}) {item.toString().replace(/,/g, " + ")} = {JSON.stringify(item.reduce((acc, val) => acc + val))}
                  {/* {JSON.stringify(item).replace(/,/g, "+")}  */}
                  </li>
                )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default DiceRoller;
