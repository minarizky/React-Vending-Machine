import React from 'react';
import { Link } from 'react-router-dom';

function Snack3() {
  return (
    <div>
      <h1>Granola Bar</h1>
      <img src="path/to/granola-bar.jpg" alt="Granola Bar" />
      <p>This granola bar is packed with nuts and dried fruits for a healthy snack.</p>
      <ul>
        <li>Calories: 180</li>
        <li>Fiber: 5g</li>
        <li>Protein: 4g</li>
      </ul>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack3;
