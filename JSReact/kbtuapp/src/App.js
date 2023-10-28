import logo from './logo.svg';
import './App.css';
import {Sidebar} from './components/sidebar';
import { Postpage } from './components/post';
import { Profile } from './components/profile';
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='App__inner'>
        <Sidebar/>
        <Postpage/>
        </div>
      </div>
    </div>
  );
}

export default App;
