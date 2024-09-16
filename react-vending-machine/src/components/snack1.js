import React from 'react';
import { Link } from 'react-router-dom';

function Snack1() {
  return (
    <div>
      <h1>Chocolate Bar</h1>
      <img src="path/to/chocolate-bar.jpg" alt="Chocolate Bar" />
      <p>This delicious chocolate bar is perfect for a sweet treat.</p>
      <ul>
        <li>Calories: 200</li>
        <li>Sugar: 20g</li>
        <li>Protein: 3g</li>
      </ul>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack1;
