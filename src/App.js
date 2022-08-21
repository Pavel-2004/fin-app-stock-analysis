import TextComponent from './components/TextComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import Buttonc from './components/Buttonc';
import NotifBox from './components/NotifBox';
import {getDataOnTicker, searchResult} from "./backend/eodService"
import LoginPage from './LoginPage';
import { useState } from 'react';
import { auth, createUserHandle, signInHandle } from './backend/auth';
import StockSearch from './StockSearch';
import Loading from './components/Loading';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userId, setUserId] = useState('')
  const [searchResults, setSearchResults] = useState([])

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

  const search = (searchQuery) => {
    searchResult(searchQuery)
    .then(results => {
      setSearchResults(results)
    })
  }

  console.log(searchResults)


  if (loggedIn) {
    return (
      <div className="App">
        <div className="row justify-content-center">
          <TextComponent cn="text-center" fs="2em" text="Welcome to analysis"/>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <StockSearch searchHandler={search}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            {
              searchResults.map((result) => {
                return (
                  <div className="row justify-content-center">
                    <div className="col-4 text-center">
                      {result.Name}
                    </div>
                    <div className="col-4 text-center">
                      {result.Code}
                    </div>
                    <div className="col-4 text-center">
                      {result.previousClose}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="App">
      <div className="row justify-content-center" style={{height: "100vh"}}>
        <div className="col-lg-5 col-11 my-auto">
          <LoginPage signInHandler={signInHandler} signUpHandler={signUpHandler}/>
        </div>
      </div>    
    </div>
  );
}

export default App;
