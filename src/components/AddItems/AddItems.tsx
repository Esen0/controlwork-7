import React from "react";


interface MenuItem {
    name: string;
    price: number;
    imageUrl: string;
}

interface AddItemsProps {
    items: MenuItem[];
    onAddItem: (name: string) => void;
}


const AddItems: React.FC<AddItemsProps> = ({ items, onAddItem }) => {
  return (
    <div className="add-items">
      <h2>добавить элементы</h2>
      <div className="container-btn">
      {items.map(item => (
        <button className="btn" key={item.name} onClick={() => onAddItem(item.name)}>
            <img src={item.imageUrl} alt={item.name} style={{width: 50, height: 50}} />
          {item.name} - {item.price} KGS
        </button>
      ))}
      </div>
    </div>
  );
};


export default AddItems;