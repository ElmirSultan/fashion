import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/header/Header'
import Firstpage from './pages/firstpage/Firstpage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Firstpage />
      </BrowserRouter>
    </>
  )
}

export default App
