import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendingMachine from './components/vendingmachine';
import Snack1 from './components/snack1';
import Snack2 from './components/snack2';
import Snack3 from './components/snack3';
import Navbar from './components/navbar';
import './styles.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/snack1" element={<Snack1 />} />
        <Route path="/snack2" element={<Snack2 />} />
        <Route path="/snack3" element={<Snack3 />} />
      </Routes>
    </Router>
  );
}

export default App;
