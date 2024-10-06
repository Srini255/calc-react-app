"use client"
import Rows from "@/components/Rows";
import { useState } from "react";

function Section() {
     const [display,setDisplay]=useState('');
     const handleClick = (val) => setDisplay(display + val);
     const handleEqual = () =>{
          try{
               setDisplay(eval(display));
          }catch(e)
          {
               setDisplay('');
               alert('the given input is wrong');
          }
          
     } 
     const handleClear = () => setDisplay('');
     
     const calcValues=[[1,2,3,'+'],
               [4,5,6,'-'],
               [7,8,9,'*'],
               ['%', 0, '/', '=']]
          
    return ( 
        <section>
             <div className="img"></div>
             <div className="calc">
             <table>
               <tbody>
               <Displaybtn display={display} handleClear={handleClear}/>
               {calcValues.map((row, rowIndex) => (
               <tr key={rowIndex}>
                    {row.map((btn, index) => (
                         <Rows key={index} btn={btn} handleEqual={handleEqual} handleClick={handleClick} />
                    ))}
               </tr>
               ))}
               </tbody>
             </table>
             </div>
        </section>
     );
}

function Displaybtn(props){
     return (
          <tr>
          <td colSpan="3">
               <input type="text" className="dis" id="display" value={props.display} readOnly />
          </td>
          <td><button className="button" id="clear" onClick={props.handleClear}>C</button></td>
          </tr>
     );
}


export default Section;