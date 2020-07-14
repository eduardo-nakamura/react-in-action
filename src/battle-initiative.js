import React, {useState, useEffect} from 'react';
import './App.css';

function BattleInit() {
  useEffect(() => {
    fetchItems()
  },[])
  const fetchItems = async () => {
    const data = await fetch('https://spreadsheets.google.com/feeds/list/18okNyKjrihgei9jqko5VTW13nt-TfzIEeJxiHX7xETA/od6/public/basic?alt=json');
    console.log(data);
  }
  return (
    <div className="App">
      <h1>Battle Initiative</h1>
      
    </div>
  );
}

export default BattleInit;
