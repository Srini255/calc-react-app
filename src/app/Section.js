function Section() {
    return ( 
        <section>
             <div className="img"></div>
             <div className="calc">
             <table>
               <Displaybtn/>
               <tr>
               <Rows text={1} />
               <Rows text={2} />
               <Rows text={3} />
               <Rows text={'+'} />
               </tr>
               <tr>
               <Rows text={4} />
               <Rows text={5} />
               <Rows text={6} />
               <Rows text={'-'} />
               </tr>
               <tr>
               <Rows text={7} />
               <Rows text={8} />
               <Rows text={9} />
               <Rows text={'*'} />
               </tr>
               <td></td>
               <Rows text={0} />
               <Rows text={'/'} />
               <Rows id={'Equal'} text={'='} />
             </table>
             </div>
        </section>
     );
}

function Displaybtn(){
     return (
          <tr>
          <td colSpan="3">
               <input type="text" className="dis" id="display" />
          </td>
          <td><button className="button" id="clear">C</button></td>
          </tr>
     );
}

function Rows(props){
     return(
          <td>
               <button className="button" id={props.id?props.id:"number"}>{props.text}</button>
          </td>
     );
}

export default Section;