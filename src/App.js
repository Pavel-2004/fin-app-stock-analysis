import TextComponent from './components/TextComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import Buttonc from './components/Buttonc';
import LoginPage from './LoginPage';
import "./backend/auth"


function App() {
  return (
    <div className="App">
      <div className='col-6'>
        <LoginPage />
      </div>    
    </div>
  );
}

export default App;
