import TextComponent from './components/TextComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import Buttonc from './components/Buttonc';
import LoginPage from './LoginPage';
import { useState } from 'react';
import { auth, createUserHandle, signInHandle } from './backend/auth';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userId, setUserId] = useState('')

  const signInHandler = (email, password) => {
    return signInHandle(auth, email, password)
    .then(result => {
      if(result.success) {
        setLoggedIn(true);
        setUserId(result.result.uid)
        return true
      }
    })
  }

  const signUpHandler = (email, password) => {
    return createUserHandle(auth, email, password)
    .then(result => {
      if(result.success) {
        setLoggedIn(true);
        setUserId(result.result.uid)
        return true
      }
    })
  }

  if (loggedIn) {
    return (
      <div className="App">
        <div className="row justify-content-center">
          <TextComponent cn="text-center" fs="2em" text="Logged in"/>
        </div>
      </div>
    )
  }
  return (
    <div className="App">
      <div className="row justify-content-end">
        x
      </div>
      <div className="row justify-content-center" style={{height: "100vh"}}>
        <div className="col-lg-5 col-11 my-auto">
          <LoginPage signInHandler={signInHandler} signUpHandler={signUpHandler}/>
        </div>
      </div>    
    </div>
  );
}

export default App;
