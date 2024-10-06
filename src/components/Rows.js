const Rows=(props)=>{
    return(
         <td id={props.key}>
          {
          props.btn==='='? <button className="button" id={"number"} onClick={()=>{props.handleEqual(props.btn)}} >{props.btn}</button>:
              <button className="button" id={"number"} onClick={()=>{props.handleClick(props.btn)}} >{props.btn}</button>}
         </td>
    );
}

export default Rows;