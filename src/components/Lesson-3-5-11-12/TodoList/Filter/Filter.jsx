const Filter = ({ value, onChange }) => {
  return (
    <label
    // htmlFor=""
    >
      фильтрт по имени
      <input
        // type="text"/
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
export default Filter;
