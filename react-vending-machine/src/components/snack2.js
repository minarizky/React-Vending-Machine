import React from 'react';
import { Link } from 'react-router-dom';

function Snack2() {
  return (
    <div>
      <h1>Potato Chips</h1>
      <img src="path/to/potato-chips.jpg" alt="Potato Chips" />
      <p>Crispy and salty, these potato chips are a classic snack.</p>
      <ul>
        <li>Calories: 150</li>
        <li>Fat: 10g</li>
        <li>Carbohydrates: 15g</li>
      </ul>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack2;
