
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import './app.css'

import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Login/Login";

function App() {
  return (
      <Router>
        
      <div className="app">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Routes>
      </div>
      </Router>

  );
}

export default App;
