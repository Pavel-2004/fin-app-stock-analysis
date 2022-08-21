
import Buttonc from './Buttonc';
function ResultComponent(props) {
    return (
        <div className="row"  style ={{padding: 20}} > 
    <div className ="container" style={{backgroundColor: props.color, color: props.text}}> 
  <div className="row">

    <div className="col-sm" style={{border: '1px solid white'}}>
      {props.name}
    </div>
    

    <div className="col-sm" style={{border: '1px solid white'}}>
      {props.code}
    </div>
    
 
    <div className="col-sm" style={{border: '1px solid white'}}>
    {'$'+props.price}
    </div>
    <Buttonc marginTop = "1px" color = "white" title = "View" funct ={props.func} text ={props.text}>
    <div className="col-sm">
    view
    </div>
    </Buttonc>
  </div>

</div>

</div>
);
}
export default ResultComponent;
