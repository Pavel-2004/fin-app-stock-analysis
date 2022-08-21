
import Buttonc from './Buttonc';
function ResultComponent(props) {
    return (
        <div className="row"  style ={{padding: 20}} > 
    <div className ="container" style={{backgroundColor: props.color, color: props.text}}> 
  <div className="row">

    <div className="col-sm" style={{border: '1px solid grey', borderRadius:'5px'}}>
      {props.name}
    </div>
    

    <div className="col-sm" style={{border: '1px solid grey', borderRadius:'5px'}}>
      {props.code}
    </div>
    
 
    <div className="col-sm" style={{border: '1px solid grey',borderRadius:'5px'}}>
    {'$'+props.price}
    </div>
    <Buttonc marginTop = "1px" color = "green" title = "View" funct ={props.func} >
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
