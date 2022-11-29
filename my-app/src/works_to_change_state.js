import logo from './logo.svg';
import './App.css';
import React, { Component, useState} from 'react';


function App() {


  
const Square=(props) => {
   const [squareVal,setVal]=useState(null);
   function clickedFunc(){
    alert(squareVal);
    if(squareVal==null){
    setVal(2)}
    if(squareVal==2){
    setVal(null)
    }
   }

   {
    return (
      <button className="square" onClick={()=>
        clickedFunc()}>
        {squareVal}
      </button>
    );
  }
  
  }
  function renderSquare(i){
    return <Square squareVal={i} />
  }
  function newRay(j){
    alert("boo")
    for(var i=8;i<j;i++){
      renderSquare(i)
    }
  }


  



  
  return (
    <div className="App">
     <h1> Test </h1>

     
    
     
     
     {renderSquare(1)}
     {renderSquare(2)}
     {renderSquare(1)}
     <br></br>
      <br></br>
     {renderSquare(2)}
     {renderSquare(1)}
     {renderSquare(2)}
     {newRay(1)} 
     
    
    </div>
  );
}

export default App;
