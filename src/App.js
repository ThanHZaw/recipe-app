import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = 'bbba18e3';
  const APP_KEY = '8b1655f5324f4a7c08d2e4106ebdf8c9';
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipe();
  }, [query]); //it will run when query change

  // getthe Recipe
  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  // update the search

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  // get the Search

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch(' ');
  };

  return (
    <div className='App'>
      <form className='search-form' onSubmit={getSearch}>
        <input
          type='text'
          className='search-bar'
          onChange={updateSearch}
          value={search}
        />
        <button type='submit' onClick={() => {}} className='search-button'>
          Submit
        </button>
      </form>
      <div className='recipies'>
        {recipes.map((recipe) => (
          <Recipe
            label={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            key={recipe.id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
