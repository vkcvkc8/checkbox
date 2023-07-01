import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <h2>Select Items:</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>

      <p>Selected Items: {selectedItems.join(', ')}</p>
    </div>
  );
}
