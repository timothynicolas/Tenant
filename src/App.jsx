import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//PAGES
import Login from './pages/Login'
import Home from './pages/Home'

import './App.css'


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
