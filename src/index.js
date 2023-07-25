import React from 'react'
import ReactDOM from 'react-dom'
 import './index.css'

     let newDate=new Date(2023,7,25,2);
    let hour=newDate.getHours();


         let s="";

           let obj={}
           
    if(hour>=1&&hour<12){
        s="Good Morning!";
        obj.color="green";
    } 
     
     else if(hour>=12&&hour<17){
      s="Good AfterNoon!"
       obj.color="yellow";
     } 
       else {
          s="Good Night!";
           obj.color="black";
       }
     
ReactDOM.render(

       <div className='heading'>

         <h1 className='inner' style={obj}> hello welcome sir {s}</h1>

       </div>

       ,

       document.getElementById('root')

);