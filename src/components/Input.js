import React from "react";

export default function Input({ value, setValue }) {
  return (
    <div>
      <input
        id="filter"
        type="text"
        placeholder="start typing here..."
        class="shop__search-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
