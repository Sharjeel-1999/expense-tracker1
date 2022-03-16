import '../index.css'
import '../comp/Exitem.css'
import React from 'react'



function ExItems(prop){
    // // date keliy varaible bnaygy hum/
    const month=prop.date.toLocaleString("en-US", {month:'long'});
    const year=prop.date.getFullYear();
    const date=prop.date.toLocaleString("en-US",{day:'2-digit'});

 return(
     <div className='expense-item'>
     <div  className='date'>
         <div>{ month }</div>
         <div>{ year }</div>
         <div>{ date }</div>
     </div>
     <div className='expense-item__description'>
         <h2>{prop.title}</h2>
         <div className='expense-item__price'>{prop.amount}</div>
     </div>
     </div>
 );
}

export default ExItems;