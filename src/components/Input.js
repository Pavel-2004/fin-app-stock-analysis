import 'bootstrap/dist/css/bootstrap.min.css';

function Input(props) {
    return(
        <div>
            <p>{props.labelIn}</p>
            <input type={props.type} className="form-control" placeholder={props.placeholderIn} onChange={props.onChangeIn} value={props.valueIn} />
        </div>
    );
}

export default Input;