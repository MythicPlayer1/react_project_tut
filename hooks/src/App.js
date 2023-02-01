
import './App.css';
import {
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { Home } from './pages/Home';
import Contact from './pages/Contact';
import { UserContext } from './components/UserContext';
import { useState } from 'react';



function App() {
  const [user , setUser]=useState(null)
  return (
    <div>
      <ul>
        <li><Link to='' >Home </Link></li>
        <li><Link to='/contact '>Contact</Link></li>
      </ul>

      <UserContext.Provider value={{user, setUser}}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      </UserContext.Provider>



    </div>);

}

export default App;
