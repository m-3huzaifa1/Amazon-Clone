import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div>
           
           <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
              </Routes>
           </BrowserRouter>
    </div>
  );
}

export default App;
