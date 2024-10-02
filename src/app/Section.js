"use client"
import { useState } from "react";

function Section() {
     const [display,setDisplay]=useState('');
     function handleClick(val){
          let newDisplay=display+val;
          setDisplay(newDisplay);
     }
     function handleEqual(){
          const ans=display;
          const output=eval(ans);
          setDisplay(output);
     }
     function handleCClick(){
          setDisplay('');
     }
    return ( 
        <section>
             <div className="img"></div>
             <div className="calc">
             <table>
               <tbody>
               <Displaybtn display={display} handleCClick={handleCClick}/>
               <tr>
               <Rows text={1} handleClick={handleClick} />
               <Rows text={2} handleClick={handleClick}/>
               <Rows text={3} handleClick={handleClick}/>
               <Rows text={'+'} handleClick={handleClick}/>
               </tr>
               <tr>
               <Rows text={4} handleClick={handleClick}/>
               <Rows text={5} handleClick={handleClick}/>
               <Rows text={6} handleClick={handleClick}/>
               <Rows text={'-'} handleClick={handleClick}/>
               </tr>
               <tr>
               <Rows text={7} handleClick={handleClick}/>
               <Rows text={8} handleClick={handleClick}/>
               <Rows text={9} handleClick={handleClick}/>
               <Rows text={'*'} handleClick={handleClick}/>
               </tr>
               <tr>
               <Rows text={'%'} handleClick={handleClick} />
               <Rows text={0} handleClick={handleClick} />
               <Rows text={'/'} handleClick={handleClick} />
               <Equal id={'Equal'} text={'='} handleEqual={handleEqual} />
               </tr>
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
          <td><button className="button" id="clear" onClick={props.handleCClick}>C</button></td>
          </tr>
     );
}

function Rows(props){
     return(
          <td>
               <button className="button" id={props.id?props.id:"number"} 
               onClick={()=>{props.handleClick(props.text)}}
               >{props.text}</button>
          </td>
     );
}

function Equal(props){
     return(
          <td>
               <button className="button" id={props.id?props.id:"number"} 
               onClick={props.handleEqual}
               >{props.text}</button>
          </td>
     );
}

export default Section;