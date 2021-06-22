import React from 'react';
import './Recipe.style.css';
const Recipe = ({ label, calories, image, ingredients }) => {
  return (
    <div className='recipe'>
      <h1>{label}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt='' className='image' />
    </div>
  );
};
export default Recipe;
