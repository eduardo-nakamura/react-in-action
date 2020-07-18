import React, {useState} from 'react';
import '../App.scss';
import {FaRegQuestionCircle} from 'react-icons/fa'
import {BsFillTrashFill} from 'react-icons/bs'
import {IoIosAddCircle} from 'react-icons/io'
// IoIosAddCircle
import imgagemEscolhida from '../assets/d4.svg'
import { ReactSVG } from 'react-svg'
import diceFourImg from '../assets/d4.svg';
import diceSixImg from '../assets/d6.svg';
import diceEightImg from '../assets/d8.svg';
import diceTenImg from '../assets/d10.svg';
import diceTwelveImg from '../assets/d12.svg';
import diceTwentyImg from '../assets/d20.svg';
import diceHundredImg from '../assets/d100.svg';

function DiceRoller() {
  const empty = {"diceNum": null, "diceQuant": null, "diceBonus": null}
  const [diceOb,setDiceObj] = useState([])
  
  const dice4 = {"diceNum": 4, "diceQuant": 1, "diceBonus": 0}
  const dice6 = {"diceNum": 6, "diceQuant": 1, "diceBonus": 0}
  const dice8 = {"diceNum": 8, "diceQuant": 1, "diceBonus": 0}
  const dice10 = {"diceNum": 10, "diceQuant": 1, "diceBonus": 0}
  const dice12 = {"diceNum": 12, "diceQuant": 1, "diceBonus": 0}
  const dice20 = {"diceNum": 20, "diceQuant":1, "diceBonus": 0}
  const dice100 = {"diceNum": 100, "diceQuant": 1, "diceBonus": 0}
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
        <img onClick={() => setDiceObj(diceOb.concat(dice4)) } style={{width: "50px"}} src={diceFourImg} alt=""/>
        <img onClick={() => setDiceObj(diceOb.concat(dice6)) } style={{width: "50px"}} src={diceSixImg} alt=""/>
        <img onClick={() => setDiceObj(diceOb.concat(dice8)) } style={{width: "50px"}} src={diceEightImg} alt=""/>
        <img onClick={() => setDiceObj(diceOb.concat(dice10)) } style={{width: "50px"}} src={diceTenImg} alt=""/>
        <img onClick={() => setDiceObj(diceOb.concat(dice12)) } style={{width: "50px"}} src={diceTwelveImg} alt=""/>
        <img onClick={() => setDiceObj(diceOb.concat(dice20)) } style={{width: "50px"}} src={diceTwentyImg} alt=""/>
        <FaRegQuestionCircle style={{color: "white"}} size={50} onClick={() => setDiceObj(diceOb.concat(empty)) }/>
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
      </div>

      <div className="section">
      {JSON.stringify(diceOb)}
      </div>
    </div>
  );
}

export default DiceRoller;
