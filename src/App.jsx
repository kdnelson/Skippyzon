import './App.scss';
import './i18n'
import Header from './components/Header/header'
import Home from './components/Home/home'
import Counter from './components/Counter/Counter'
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
        <Route path="/Counter" element={<Counter />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
