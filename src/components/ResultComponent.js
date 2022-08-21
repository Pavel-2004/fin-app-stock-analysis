import Buttonc from './Buttonc';
function ResultComponent(props) {


    const handleView = () => {
      props.func(props.code)
    }

    return (
        <div className="row"  style ={{padding: 20}} > 
    <div className ="container" style={{backgroundColor: props.color, color: props.text}}> 
  <div className="row">

    <div className="col-sm" style={{border: '1px solid grey', borderRadius:'5px'}}>
      <div className={'text-'+props.textColor}>{props.name}</div>
    </div>
    

    <div className="col-sm" style={{border: '1px solid grey', borderRadius:'5px'}}>
    <div className={'text-'+props.textColor}>{props.code}</div>
    </div>
    
 
    <div className="col-sm" style={{border: '1px solid grey',borderRadius:'5px'}}>
    <div className={'text-'+props.textColor}>{'$'+props.price}</div>
    </div>
    <Buttonc marginTop = "1px" title = "View" funct={handleView} >
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
