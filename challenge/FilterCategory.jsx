import dishes from "./data.js";

// Get all unique categories from the array of dishes
const categories = [...new Set(dishes.map((dish) => dish.category))];

export default function FilterCategory({setCategory}) {

  function update(event) {
    setCategory(event.target.value);
  }

  return <fieldset>
    <legend>Category</legend>
    <label htmlFor="all">
      <input type="radio"
      name="categories"
      id="all"
      value="all"
      onChange={update}/>
      all
    </label>
    {categories.map((c) => (
      <label htmlFor={c} key={c}>
        <input
        type="radio"
        name="categories"
        id={c}
        value={c}
        onChange={update}/>
        {c}
      </label>
    ))}
  </fieldset>
}
