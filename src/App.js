import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/checkout" element={<><Header /><Checkout /></>}/>
          <Route path="/payment" element={<><Header /><Payment /></>}/>
          <Route path="/orders" element={<><Header /><Orders /></>}/>
          <Route path="/" element={<><Header /><Home /></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App
