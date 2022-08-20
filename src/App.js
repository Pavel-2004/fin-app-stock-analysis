import Buttonc from './components/Buttonc';
import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const test = () => {
    console.log("this work?");}
  return (
    <div className="App">
    <Buttonc title = 'title' funct = {test} color = 'red'/>
    </div>
  );
}
export default App;
