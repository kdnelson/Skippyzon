import './App.css';
import Header from './header';
import Home from './home';
import Checkout from './checkout';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<><Header /><Checkout /></>}/>
          <Route path="/" element={<><Header /><Home /></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
