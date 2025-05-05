const CategorySelector = ({ category, setCategory }) => (
  <select value={category} onChange={e => setCategory(e.target.value)}>
    <option value="technology">Technology</option>
    <option value="business">Business</option>
    <option value="sports">Sports</option>
    <option value="health">Health</option>
    <option value="science">Science</option>
  </select>
);

export default CategorySelector;
