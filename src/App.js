import {useEffect, useState, } from "react";
import axios from "axios";
import Recipe from "./components/Recipe";
import Search from "./components/Search";
import "./App.css";


function App() {
  const [recipe, setRecipe] = useState([]);
 
  const apiKey = "5baef9db1emsh404dc00e921d899p1eff00jsn80b6bb0abaac";
  const apiUrl = "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser";

 const getRecipe = async () => {
 try {
  
  const res = await axios.get(apiUrl, {
    headers: {
      'X-RapidAPI-Key': apiKey,
    },
   
  });
  setRecipe(res.data.hints);
  console.log(res.data.hints);
 } catch (err) {
  console.log('error is', err);
  
 }
 }

  useEffect(() => {
  getRecipe();
  
  }, []);
 
  

  return (
    <div className="container" >
    
      <Search/>
      {recipe.map((dish) => (
   <Recipe id={dish.food.foodId}   title={dish.food.label} calories = {dish.food.nutrients.ENERC_KCAL} image={dish.food.image}/>
      ))}
   
   
    </div>
  );
}

export default App;
