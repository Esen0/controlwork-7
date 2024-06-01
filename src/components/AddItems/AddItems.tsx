import React from "react";


interface MenuItem {
    name: string;
    price: number;
}

interface AddItemsProps {
    items: MenuItem[];
    onAddItem: (name: string) => void;
}


const AddItems: React.FC<AddItemsProps> = ({ items, onAddItem }) => {
  return (
    <div className="add-items">
      <h2>Add items</h2>
      {items.map(item => (
        <button key={item.name} onClick={() => onAddItem(item.name)}>
          {item.name} - {item.price} KGS
        </button>
      ))}
    </div>
  );
};


export default AddItems;