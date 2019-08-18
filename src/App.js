import React from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';


function App() {
  return (
    <React.Fragment>
         <Navbar/>
         <Counters/>
    </React.Fragment>
  );
}

export default App;
