import './App.scss';
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
        <Route path="/" element={<Counter />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
