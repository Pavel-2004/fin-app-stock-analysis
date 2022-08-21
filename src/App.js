import TextComponent from './components/TextComponent';
import ResultComponent from './components/ResultComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import Buttonc from './components/Buttonc';
import NotifBox from './components/NotifBox';
import {getDataOnTicker, searchResult} from "./backend/eodService"
import LoginPage from './LoginPage';
import { useState, useEffect } from 'react';
import { auth, createUserHandle, signInHandle } from './backend/auth';
import StockView from './components/StockView';
import StockSearch from './StockSearch';
import { getStocks } from './backend/stock';
import OwnedStocks from './components/OwnedStocks';
import OwnedStockView from './components/OwnedStockView';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userId, setUserId] = useState('')
  const [stockData, setStockData] = useState([])
  const [error, setError] = useState(false)
  const [showStockResult, setShowStockResult] = useState(false)
  const [showOwnedStock, setShowOwnedStock] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [stockInfo, setStockInfo] = useState({});
  const [ownedStocks, setOwnedStocks] = useState([]);
  const [pageSwitch, setPageSwitch] = useState(0);

  const signInHandler = (email, password) => {
    return signInHandle(auth, email, password)
    .then(result => {
      if(result.success) {
        setLoggedIn(true);
        setUserId(result.result.uid)
        setPageSwitch(pageSwitch + 1)
        return true
      }
    })
  }

  useEffect(() => {
    getStocks(userId)
    .then(results => {
      let final = []
      results.forEach(result => {
        final.push(result.data())
      });
      setOwnedStocks(final)
    })
  }, [pageSwitch])

  console.log(ownedStocks)
  
  const signUpHandler = (email, password) => {
    return createUserHandle(auth, email, password)
    .then(result => {
      if(result.success) {
        setLoggedIn(true);
        setUserId(result.result.uid)
        setPageSwitch(pageSwitch + 1)
        return true
      }
    })
  }

  const search = (searchQuery) => {
    setError(false)
    searchResult(searchQuery)
    .then(results => {
      setSearchResults(results)
    })
  }

  const handleView = (name, code, price) => {
    getDataOnTicker(code)
    .then(results => {
      setError(false)
      setStockData(results)
      setStockInfo({name: name, code:code, price:price})
      setShowStockResult(true);
    })
    .catch(err => {
      setError(true)
    })
  }

  const handleOpenStock = (name, code, total, purchasedPrice, qty) => {
    getDataOnTicker(code)
    .then(results => {
      setStockData(results)
      setStockInfo({name: name, code: code, total: total, qty: qty, purchasedPrice: purchasedPrice})
      setShowOwnedStock(true);
    })
  }

  const handleExitView = () => {
    setStockData([])
    setStockInfo({})
    setPageSwitch(pageSwitch + 1)
    setShowStockResult(false);
    setShowOwnedStock(false);
  }


  if (showStockResult) {
    return (<StockView name={stockInfo.name} code={stockInfo.code} price={stockInfo.price} prices={stockData} exit={handleExitView} userId={userId} ownedStocks={ownedStocks}/>)
  } else if (showOwnedStock) {
    return (<OwnedStockView name={stockInfo.name} code={stockInfo.code} total={stockInfo.total} prices={stockData} exit={handleExitView} userId={userId} ownedStocks={ownedStocks} qty={stockInfo.qty} purchasedPrice={stockInfo.purchasedPrice}/>)
  } else {
    if (loggedIn) {
      return (
        <div className="App">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="row justify-content-center">
              <TextComponent cn="text-center" fs="2em" text="Welcome to analysis"/>
            </div>

            <div className="row justify-content-center">
              {error && (
                <TextComponent cn="text-center text-danger" text="There was an error opening this stock, please try another one."></TextComponent>
              )}
            </div>
            <div className="row justify-content-center">
              <div className="col-11">
                <StockSearch searchHandler={search}/>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-11" style={{height: '50vh', overflow: "scroll"}}>
                <h1>Results</h1>
                {
                  searchResults.map((result) => {
                    return (
                      <div className="row justify-content-center" style={{marginTop: 20, marginBottom: 20}}>
                        <div className="col-8">
                          <ResultComponent name={result.Name} code={result.Code} price={result.previousClose} func={handleView}/>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            </div>
            <div className="col-6">
              <div className="row justify-content-center">
                <div className="col-12">
                  <OwnedStocks allStocks={ownedStocks} view={handleOpenStock}/>
                </div>
            </div>
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
}

export default App;
