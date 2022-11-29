import logo from './logo.svg';
import './App.css';
import React, { Component, useState} from 'react';


function App() {

var squareList= Array(9).fill(null)


 
  
const Square=(props) => {
  
  

   
  const [squareNum,setNum]=useState(props.squareNum)
  const [squareVal,setVal]=useState(props.squareVal)
  const Xs ="X,X,X"
  const Os ="O,O,O"
   function clickedFunc(){

    alert(squareVal);
    alert(squareNum)
    alert(squareList)
    if(squareVal=="-"){
    setVal("X")
    alert(squareList[squareNum])
    squareList.splice(squareNum,1,'X')
    alert("squareList now= "+squarelist+"lenght"+squareList.length)
    var rowOne=squareList.slice(0,3)
    alert("row1"+rowOne)
    var rowTwo=squareList.slice(3,6)
    var rowThree=squareList.slice(6,9)
    alert("row two"+rowTwo)
    if(rowOne.toString()==Os || rowOne.toString()==Xs||rowTwo.toString()==Xs || rowTwo.toString()==Os || rowThree.toString()==Xs|| rowThree.toString()==Os){
    alert("Won!")
   }
  }
    if(squareVal=="X"){
    setVal("O")
    alert(squareList[squareNum])
    squarelist=squareList.splice(squareNum,1,'O')
    var rowOne=squareList.slice(0,3)
    alert("row1"+rowOne)
    var rowTwo=squareList.slice(3,6)
    var rowThree=squareList.slice(6,9)
    alert("row two"+rowTwo)
    if(rowOne.toString()==Os || rowOne.toString()==Xs||rowTwo.toString()==Xs || rowTwo.toString()==Os || rowThree.toString()==Xs|| rowThree.toString()==Os){
    alert("Won!")
   }
    }
    if(squareVal=="O"){
      setVal("X")
      alert(squareList[squareNum])
      var squarelist=squareList.splice(squareNum,1,'X')
      var rowOne=squareList.slice(0,3)
      var rowTwo=squareList.slice(3,6)
      var rowThree=squareList.slice(6,9)
    alert("row1"+rowOne)
    alert("row two"+rowTwo)
    if(rowOne.toString()==Os || rowOne.toString()==Xs||rowTwo.toString()==Xs || rowTwo.toString()==Os || rowThree.toString()==Xs|| rowThree.toString()==Os){
    alert("Won!")
   }
    }
    
    }
    
 

 


   
    return (
      <button className="square" onClick={()=>
        clickedFunc()}>
        {squareVal}
      </button>
    )
  }
   function renderSquare(i,j){
    return <Square squareVal={i} squareNum={j} />
  }

  
  


  



  
  return (
    <div className="App">
     <h1> Test </h1>

     
    
     
     
     {renderSquare("-",0)}
     {renderSquare("-",1)}
     {renderSquare("-",2)}
     <br></br>
      <br></br>
     {renderSquare("-",3)}
     {renderSquare("-",4)}
     {renderSquare("-",5)}
     <br></br>
     <br></br>
     {renderSquare("-",6)}
     {renderSquare("-",7)}
     {renderSquare("-",8)}

     
     
    
    </div>
  );

}






export default App;
