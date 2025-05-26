function Select() {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sortBy" className="font-medium">
        Giá:
      </label>
      <select id="sortBy" className="cursor-pointer border-none outline-none">
        <option value="asc" className="flex items-center leading-0">
          Thấp &rarr; Cao
        </option>
        <option value="asc" className="flex items-center leading-0">
          Cao &rarr; Thấp
        </option>
      </select>
    </div>
  );
}

export default Select;
