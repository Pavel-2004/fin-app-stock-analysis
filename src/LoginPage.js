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
        <div>
            <h1> LOGIN PAGE </h1>
            <Input placeholderIn="Email..." onChangeIn={event => setEmail(event.target.value)} valueIn={email} />
            <Input placeholderIn="Password..." onChangeIn={event => setPassword(event.target.value)} valueIn={password} />
            <Buttonc title="Sign Up" funct={OnSubmit} />
        </div>
    )
}

export default LoginPage;
