import { auth, createUserHandler, signInHandle } from './backend/auth';
import Input from './components/Input';
import Buttonc from './components/Buttonc';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function OnSubmit() {
        createUserHandler(auth, email, password)
    }

    return (
        <div class="row justify-content-center">
            <div className="col-12">
                <h1> LOGIN PAGE </h1>
            </div>
            <div class="col-12">
                    <div class="row">
                        <div class="col-12">
                            <Input placeholderIn="Email..." onChangeIn={event => setEmail(event.target.value)} valueIn={email} />
                        </div>
                        <div class="col-12">
                            <Input placeholderIn="Password..." onChangeIn={event => setPassword(event.target.value)} valueIn={password} />
                        </div>
                    </div>
                    <div class="row justify-content-end">
                        <div class="col-4">
                            <Buttonc title="Sign Up" funct={OnSubmit} marginTop={20} />
                        </div>
                </div>
             
            </div>           
        </div>
    )
}

export default LoginPage;
