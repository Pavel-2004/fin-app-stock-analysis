import Input from './components/Input';
import Buttonc from './components/Buttonc';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextComponent from './components/TextComponent';

function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function OnSignIn() {
        setError("")
        props.signInHandler(email, password)
        .then(res => {
            setEmail("")
            setPassword("")
        })
        .catch(err => {
            setError("There was an error signing in");
        })
    }

    function OnSignUp() {
        setError("")
        props.signUpHandler(email, password)
        .then(res => {
            setEmail("")
            setPassword("")
        })
        .catch(err => {
            setError("There was an error signing up");
        })
    }

    return (
        <div className="row justify-content-center">
            <div className="col-12">
                <h1> LOGIN </h1>
            </div>
            <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <Input type="text" placeholderIn="Email..." onChangeIn={event => setEmail(event.target.value)} valueIn={email} />
                        </div>
                        <div className="col-12">
                            <Input type="password" placeholderIn="Password..." onChangeIn={event => setPassword(event.target.value)} valueIn={password} />
                        </div>
                    </div>
                    {error && (
                        <div className="row justify-content-start" style={{marginTop: 20}}>
                            <div className="col-12">
                                <TextComponent cn="text-danger" text={error}/>
                            </div>
                        </div>
                    )}
                    <div className="row justify-content-end">
                        <div className="col-4">
                            <Buttonc title="Sign In" funct={OnSignIn} marginTop={20} />
                        </div>
                        <div className="col-4">
                            <Buttonc title="Sign Up" funct={OnSignUp} marginTop={20} />
                        </div>
                    </div>
            </div>           
        </div>
    )
}

export default LoginPage;
