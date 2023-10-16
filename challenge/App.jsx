// Create a state value representing the maximum price filter
// Control the state value with the max price range input
// Filter the dish list to only show dishes cheaper than the chosen max price

import { useState } from "react";

import FilterPrice from "./FilterPrice.jsx";
import FilterCategory from "./FilterCategory.jsx";
import ListDishes from "./ListDishes.jsx";

// Get all unique categories from the array of dishes

function App() {

  const [maxPrice, setMaxPrice] = useState(9);
  const [category, setCategory] = useState("All");
  console.log(category)

  return (
    <main>
      <section aria-label="filters">
        <div className="sticky">
          <h1>Burger Place</h1>
          <form>
            <h2>Filter dishes</h2>
            <FilterPrice max={maxPrice} setMax={setMaxPrice} />
            <FilterCategory setCategory={setCategory}/>
          </form>
        </div>
      </section>
      <section aria-label="dishes">
        <ListDishes max={maxPrice} category={category}/>
      </section>
    </main>
  );
}

export default App;
