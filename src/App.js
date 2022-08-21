import TextComponent from './components/TextComponent';
import ResultComponent from './components/ResultComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import Buttonc from './components/Buttonc';
import LoginPage from './LoginPage';
import "./backend/auth"

function App() {
  const test = () => {
    console.log("this work?");}
  return (
    <div className="App">
      <ResultComponent name = 'Tesla' code = 'TSLA' price = '100' color = "white"  text = "black" func ={test} />
    </div>
  );
}

export default App;
