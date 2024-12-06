import './App.scss';
import './i18n'
import Header from './components/Header/header'
import Home from './components/Home/home'
import Login from './components/Login/login'
import Counter from './components/Counter/counter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter 
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true, 
    }}>
      <Routes>
        <Route path="/" element={<><Header /><Home /></>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/Counter" element={<Counter />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
