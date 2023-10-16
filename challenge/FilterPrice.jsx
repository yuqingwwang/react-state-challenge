export default function FilterPrice({max, setMax}) {

  function update(event) {
    setMax(parseFloat(event.target.value));
  }

  return <fieldset>
  <legend>Price</legend>
  <label htmlFor="max-price">
    Max price
    <input
      type="range"
      id="max-price"
      min="0.5"
      max="9"
      step="0.25"
      value={max}
      onChange={update}
    />
  </label>
</fieldset>
}
