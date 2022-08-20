
import 'bootstrap/dist/css/bootstrap.min.css'
function Buttonc(props) {
    return (
        <button className='btn btn-success' style={{backgroundColor: props.color}} onClick={props.funct}>
         {props.title}
        </button>   
    );
  }
  
  export default Buttonc;