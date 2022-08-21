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
     <div className='col-6'>
      <LoginPage/>
     </div>
    </div>
  );
}

export default App;
