import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button } from 'bootstrap';
import Register from './components/Register';
import Counting from './components/Counting';
function App() {
  return (
    <div >
<Register/>
<Counting/>
    </div>
  );
}

export default App;
