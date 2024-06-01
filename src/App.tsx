import React, {useState} from 'react';
import './App.css';
import OrderDatails from './components/OrderDatails/OrderDatails';
import AddItems from './components/AddItems/AddItems';

interface MenuItem {
  name: string;
  price: number;
}

const menuItems: MenuItem[] = [
  {name: 'Hamburger', price: 80},
  {name: 'CheeseBurger', price: 90},
  {name: 'Fries', price: 50},
  {name: 'Cola', price: 40},
  {name: 'Nuggest', price: 70},
  {name: 'Salad', price: 60},
];

interface OrderItem extends MenuItem {
  quantity: number;
}

const App: React.FC = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const handleAddItem = (name: string) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((item) => item.name === name);
      if(existingItem) {
        return prevOrder.map((item) =>
          item.name === name ? {...item, quantity: item.quantity + 1} : item,
        );
      } else {
        const menuItem = menuItems.find((item) => item.name === name)!;
        return [...prevOrder, {...menuItem, quantity: 1}];
      }
    });
  };

  const handleRemoveItem = (name: string) => {
    setOrder((prevOrder) => prevOrder.filter(item => item.name !== name));
  };

  return (
    <div className='app'>
      <OrderDatails items={order} onRemoveItem={handleRemoveItem} />
      <AddItems items={menuItems} onAddItem={handleAddItem} />
    </div>
  );
};

export default App
