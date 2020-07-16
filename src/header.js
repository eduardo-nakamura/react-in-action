import React, { useState } from 'react';
import './App.scss';
import {Link} from 'react-router-dom'

// const Header = props =>{
//   console.log(props)
//   return (
//     <section className="header-app">
     
//       <button onChange={event => props.onChange(event.target.value)}>teste</button>
//        <Link to="/"><h3>RPG Apps</h3></Link>      
   
//     </section>
//   );
// }
function Header(props) {
  const [teste,setTeste] = useState()
  function toggleMenu(){
    let teste2 = setTeste(!teste)
    alert(JSON.stringify(props))
    props.hideMenu(teste2)
    
  }
  return (
    <section className="header-app">
      <button onClick={toggleMenu}>teste</button>
       <Link to="/"><h3>RPG Apps</h3></Link>      
   
    </section>
  );
}

export default Header;
