import React, { useState } from 'react';

function ItemListManager() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        if (newItem.trim() !== '') {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    const handleInputChange = (event) => {
        setNewItem(event.target.value);
    };

    return (
        <div>
            <input type="text" value={newItem} onChange={handleInputChange} />
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default ItemListManager;
