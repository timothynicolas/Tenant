import {BrowserRouter, Routes, Route} from 'react-router-dom';

//PAGES
import Home from './pages/Home';
import Login from './pages/Login';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Search from './pages/Search';


function App() {
  return(
    <div>
      <BrowserRouter>                
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/> 
          <Route path="/messages" element={<Messages/>}/> 
          <Route path="/notifications" element={<Notifications/>}/>   
          <Route path="/profile" element={<Profile/>}/>     
          <Route path="/settings" element={<Settings/>}/>  
          <Route path="/search" element={<Search/>}/>       
        </Routes>
      </BrowserRouter> 
    </div>
  )
  
}

export default App;
