import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() =>{
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",  // TODO change this to its own state LOGOUT_USER?
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/checkout" element={<><Header /><Checkout /></>}/>
          <Route path="/" element={<><Header /><Home /></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App
