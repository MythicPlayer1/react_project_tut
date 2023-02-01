
import './App.css';
//import LoginPage from './Components/LoginPage';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import {
 
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import {  UserContext } from './Components/UserContext';
import { useState } from 'react';


function App() {
  const [User, setUser]=useState("hello")
  return (
    <UserContext.Provider value={{User, setUser}}>
    <Routes> 
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    </UserContext.Provider>


  );
}

export default App;
