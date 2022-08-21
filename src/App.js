import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import Buttonc from './components/Buttonc';
import NotifBox from './components/NotifBox';
import "./backend/auth"


function App() {
  return (
    <div className="App">
     <NotifBox IncludeButton={true} NotifColour="green" BtnColor = "blue" BtnTitle = "hello"/>
      
    </div>
  );
}

export default App;
