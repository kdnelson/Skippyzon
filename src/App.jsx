import './App.scss';
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter 
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
    }}>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
