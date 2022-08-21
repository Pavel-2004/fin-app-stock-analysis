import 'bootstrap/dist/css/bootstrap.min.css';
import Buttonc from './Buttonc';

function NotifBox(props){
//    x = props.BtnColor;
//    y = props.BtnFunct;
//    z = props.BtnTitle;
var colour = "";

    if(props.NotifColour == "blue") {
      colour = "alert alert-primary";    
    } else if(props.NotifColour == "light gray") {
      colour = "alert alert-secondary";
    } else if(props.NotifColour == "green") {
      colour = "alert alert-success";
    } else if(props.NotifColour == "red") {
      colour = "alert alert-danger"; 
    } else if(props.NotifColour == "yellow") {
      colour = "alert alert-warning";
    } else if(props.NotifColour == "cyan") {
      colour = "alert alert-info";
    } else if(props.NotifColour == "white") {
      colour = "alert alert-light";
    } else if(props.NotifColour == "dark gray") {
      colour = "alert alert-dark";
    } 
  return(
    
    <div className={colour}>
      <div className="row">
        <div className="col-1">
        {props.IncludeButton &&
          (
            <Buttonc color = {props.BtnColor} funct = {props.BtnFunct} title = {props.BtnTitle}/>
          )
        }
        </div>
        <div className="col-10">
          <p> </p>
        </div>
        <div className="col-1">
            <div className="justify-content-end">
              <button type="button" className="">
               <span aria-hidden="true">&times;</span>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default NotifBox;


